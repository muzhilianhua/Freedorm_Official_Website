"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselItem {
  title: string
  description: string
  image: string
}

interface CarouselCardProps {
  items: CarouselItem[]
  className?: string
}

export default function CarouselCard({ items, className = "" }: CarouselCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const previous = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }

  return (
    <div className={`card p-6 flex flex-col items-center relative ${className}`}>
      <div className="relative w-full aspect-video">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={items[currentIndex].image || "/placeholder.svg"}
              alt={items[currentIndex].title}
              fill
              className="rounded-lg object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={previous}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>
      </div>

      <div className="w-full text-center mt-6">
        <h3 className="text-2xl font-bold mb-2 text-primary">{items[currentIndex].title}</h3>
        <p className="text-gray-600">{items[currentIndex].description}</p>
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


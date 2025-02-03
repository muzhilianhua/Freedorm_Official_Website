"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type React from "react" // Added import for React

export default function Hero() {
  const scrollToFeatures = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-start pt-8 sm:pt-4">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="https://pic1.imgdb.cn/item/67a09e58d0e0a243d4f9b978.png"
          alt="智能门锁"
          layout="fill"
          objectFit="cover"
          objectPosition="77% 50%"  // 中间偏右
          className="shadow-2xl"
        />
      </motion.div>

      <div className="container mx-auto px-4 text-left relative z-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-SlateBlue">
            推门既入
            <br />
            智慧如影随形
          </h1>
          <h3 className="text-xl sm:text-2xl mb-8 text-white">用我们的努力，让南科大的住宿体验更便捷、更温暖</h3>
          <button className="button button-primary" onClick={scrollToFeatures}>
            了解更多
          </button>
        </motion.div>
      </div>
    </section>
  )
}


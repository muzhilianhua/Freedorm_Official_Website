"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "智能门锁是如何工作的？",
    answer:
      "智能门锁通过电子系统控制门锁的开关。用户可以使用指纹、密码、NFC或手机APP等多种方式进行身份验证和开锁操作。",
  },
  {
    question: "如果没电了怎么办？",
    answer:
      "我们的智能门锁配备了长效电池，通常可以使用6-12个月。同时，门锁会在电量不足时提前提醒。如果真的没电，可以使用外置应急电源接口供电开锁。",
  },
  {
    question: "智能门锁安全吗？",
    answer: "我们的智能门锁采用多重加密技术，并具有防撬报警功能。同时，用户可以随时查看开锁记录，大大提高了安全性。",
  },
  {
    question: "如何安装智能门锁？",
    answer:
      "我们提供专业的安装服务。如果您想自己安装，我们也提供详细的安装指南和视频教程。大多数情况下，安装过程简单，不需要对门做大的改动。",
  },
  {
    question: "支持远程开锁吗？",
    answer: "是的，我们的高级版和旗舰版支持通过手机APP进行远程开锁操作。您可以在任何地方为访客开门。",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="w-full py-16 bg-background-color">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">常见问题</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="card"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary-color" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary-color" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"

const installationSteps = [
  {
    title: "准备工具",
    description: "确保您有以下工具：随附的螺丝刀、说明书。",
    image: "https://pic1.imgdb.cn/item/67a08c9cd0e0a243d4f9b75d.jpg",
  },
  {
    title: "移除原有面板",
    description: "小心拆下原有的门锁面板，注意不要损坏内部结构。",
    image: "https://pic1.imgdb.cn/item/67a08c9cd0e0a243d4f9b75d.jpg",
  },
  {
    title: "连接电源线",
    description: "将Freedorm的电源线与门内预留的电源接口连接。",
    image: "https://pic1.imgdb.cn/item/67a08c9cd0e0a243d4f9b75d.jpg",
  },
  {
    title: "安装新面板",
    description: "将Freedorm面板对准安装位置，确保电源线不会被挤压。",
    image: "https://pic1.imgdb.cn/item/67a08c9cd0e0a243d4f9b75d.jpg",
  },
  {
    title: "固定螺丝",
    description: "使用随附的螺丝刀，依次拧紧6颗固定螺丝。",
    image: "https://pic1.imgdb.cn/item/67a08c9cd0e0a243d4f9b75d.jpg",
  },
  {
    title: "功能测试",
    description: "完成安装后，进行开关测试确保功能正常。",
    image: "https://pic1.imgdb.cn/item/67a08c9cd0e0a243d4f9b75d.jpg",
  },
]

export default function InstallationGuide() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <section id="top" className="pt-24 pb-16 bg-gradient-to-b from-background-start to-background-end">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">安装指南</h1>
            <p className="text-xl text-gray-600">只需15分钟，6步轻松完成安装</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {installationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="relative h-48">
                  <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-primary text-white rounded-full w-8 h-8 mr-3">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-8">安装注意事项</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  建议两人配合安装，一人扶住面板，另一人固定螺丝
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  安装前请仔细阅读说明书，确保理解每个步骤
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  注意电源线的走向，避免被螺丝压到或折断
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  螺丝需依次均匀拧紧，避免受力不均导致面板变形
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  如遇到任何问题，请及时联系售后服务QQ群获取支持
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-8">安装视频教程</h2>
            <div className="aspect-video">
              <iframe
                src="https://player.bilibili.com/player.html?aid=113950347887171&bvid=BV1GLPyejEVz&cid=28225831739&p=1&high_quality=1"
                className="w-full h-[600px] rounded-lg shadow-lg"
                scrolling="no"
                border="0"
                frameBorder="no"
                framespacing="0"
                allowFullScreen={true}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FAQ from "../components/FAQ"

const supportOptions = [
  {
    icon: <Mail className="w-12 h-12 text-primary" />,
    title: "邮件支持",
    description: "发送邮件至 support@freedorm.net，我们将在24小时内回复。",
    action: "发送邮件",
    link: "mailto:support@freedorm.net",
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-primary" />,
    title: "QQ群支持",
    description: "加入我们的售后服务QQ群 1014153547，获取快速响应。",
    action: "加入QQ群",
    link: "https://qm.qq.com/cgi-bin/qm/qr?k=kKqSZnLWwfxAhvrdulAG_EScDFGiObK_&jump_from=webapi&authKey=qRz51dNGprieuHXjxN+OddxEO/69VJMZ5jJRCpv3QvtWyyQmmu1FMvp3ASyDkSMl",
  },
]

export default function AfterSalePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">售后服务</h1>
            <p className="text-xl text-gray-600">我们致力于为您提供优质的售后支持，确保您的Freedorm宿舍锁智能套件使用无忧</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 flex flex-col items-center text-center"
              >
                {option.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary mt-auto"
                >
                  {option.action}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">售后政策</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Freedorm智能锁提供6年的售后服务保障
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  产品自购买之日起7天内，如有质量问题，可无理由退换
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  15天内出现质量问题，我们提供免费更换服务
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  1年内硬件故障，提供免费维修服务
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  软件终身免费升级，确保您始终享有最新功能
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ />

      <Footer />
    </main>
  )
}


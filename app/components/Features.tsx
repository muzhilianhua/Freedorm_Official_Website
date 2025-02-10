"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CarouselCard from "./CarouselCard"

const features = [
  {
    title: "蓝牙自动解锁功能",
    description: "靠近即解锁，无需手动掏出卡片，解放双手。",
    image: "https://pic1.imgdb.cn/item/67a08c8bd0e0a243d4f9b757.png",
    type: "single",
  },
  {
    title: "远程控制",
    description: "通过手机小程序远程控制开锁及其他智能操作。",
    image: "https://pic1.imgdb.cn/item/67a09e57d0e0a243d4f9b975.png",
    type: "single",
  },
  {
    title: "定时开门",
    description: "设置定时开门，方便定期开门场景。",
    image: "https://pic1.imgdb.cn/item/67a09e58d0e0a243d4f9b977.png",
    type: "single",
  },
  {
    title: "访客开门",
    description: "分享开门链接，自定义人员通行。",
    image: "https://pic1.imgdb.cn/item/67a08c8cd0e0a243d4f9b75b.png",
    type: "single",
  },
  {
    title: "多种解锁方式",
    description: "单击暂时开门或双击常开，操作简便。",
    image: "https://pic1.imgdb.cn/item/67a08c8bd0e0a243d4f9b758.png",
    type: "single",
  },
  {
    title: "Home Assistant智能设备互联",
    description: "与其他智能家居设备无缝连接，打造智能家庭生活。",
    image: "https://pic1.imgdb.cn/item/67a08c9cd0e0a243d4f9b75c.png",
    type: "single",
  },
  {
    title: "安全提醒功能",
    description: "虚掩警告提醒门未完全关闭，提升安全性。",
    image: "https://pic1.imgdb.cn/item/67a09e59d0e0a243d4f9b979.png",
    type: "single",
  },
  {
    title: "直观交互体验",
    description: "炫酷灯效，直观反馈操作状态，增添生活仪式感。",
    image: "https://pic1.imgdb.cn/item/67a08c9dd0e0a243d4f9b75e.png",
    type: "single",
  },
  {
    type: "carousel",
    items: [
      {
        title: "闪耀黑",
        description: "如黑珍珠般神秘的黑色，突显出低调奢华的品味",
        image: "https://s1.locimg.com/2025/02/10/35719bb8767be.jpg",
      },
      {
        title: "水晶紫",
        description: "如水晶般剔透的紫色，彰显出高贵典雅的气质",
        image: "https://s1.locimg.com/2025/02/10/46751a8427482.jpg",
      },
      {
        title: "流光蓝",
        description: "如海洋般深邃的蓝色，散发出深邃澄澈的魅力",
        image: "https://s1.locimg.com/2025/02/10/f1f8ff57e2004.jpg",
      },
      {
        title: "赤曜红",
        description: "如火焰般热情的红色，展现出热烈独特的个性",
        image: "https://s1.locimg.com/2025/02/10/ce3a699022b1e.jpg",
      },
      {
        title: "大理石",
        description: "如大理石般独特的纹理，凸显出浑厚深沉的气度",
        image: "https://s1.locimg.com/2025/02/10/24ab532a29791.jpg",
      },
    ],
  },
  {
    type: "carousel",
    items: [
      {
        title: "磨砂质感",
        description: "细腻柔和的触感，抗指纹污渍",
        image: "https://pic1.imgdb.cn/item/67a09f61d0e0a243d4f9b984.jpg",
      },
      {
        title: "镜面质感",
        description: "光亮如镜的表面，尽显高端品质",
        image: "https://pic1.imgdb.cn/item/67a09f61d0e0a243d4f9b984.jpg",
      },
      {
        title: "钻石纹理",
        description: "独特的菱形切割纹理，闪耀夺目",
        image: "https://pic1.imgdb.cn/item/67a09f61d0e0a243d4f9b984.jpg",
      },
      {
        title: "极光处理",
        description: "变幻莫测的光泽效果，如极光般绚丽",
        image: "https://pic1.imgdb.cn/item/67a09f61d0e0a243d4f9b984.jpg",
      },
    ],
  },
  {
    type: "carousel",
    items: [
      {
        title: "高特汤姆轴",
        description: "静音顺滑，办公室使用首选",
        image: "https://pic1.imgdb.cn/item/67a0a0acd0e0a243d4f9b9a9.jpg",
      },
      {
        title: "高特海洋轴",
        description: "清脆爽快，完美触感反馈",
        image: "https://pic1.imgdb.cn/item/67a0a0acd0e0a243d4f9b9a9.jpg",
      },
    ],
  },
  {
    type: "carousel",
    items: [
      {
        title: "400天持久续航",
        description: "一年以上的持久续航，无需频繁更换电池",
        image: "https://pic1.imgdb.cn/item/67a0a04dd0e0a243d4f9b99c.png",
      },
      {
        title: "10000次开门测试",
        description: "超过10000次的开门测试，确保稳定可靠",
        image: "https://pic1.imgdb.cn/item/67a0a04dd0e0a243d4f9b99c.png",
      },
      {
        title: "极限环境测�������",
        description: "-20°C到50°C的极限环境测试，适应各种天气",
        image: "https://pic1.imgdb.cn/item/67a0a04dd0e0a243d4f9b99c.png",
      },
    ],
  },
  {
    title: "安装方便，6颗螺丝直达心趴",
    description: "简单9步，15分钟轻松搞定",
    image: "https://pic1.imgdb.cn/item/67a08c9cd0e0a243d4f9b75d.jpg",
    type: "single",
  },
  {
    title: "开源精神",
    description: "固件硬件前端后端交互设计全开源。",
    image: "https://pic1.imgdb.cn/item/67a08c8cd0e0a243d4f9b75a.png",
    type: "single",
  },
  {
    title: "限量发售，Now or Never",
    description: "限时发售，抓限量机会。",
    image: "https://pic1.imgdb.cn/item/67a08c9dd0e0a243d4f9b75f.png",
    type: "single",
  },
  {
    title: "6年售后服务，锁比金坚",
    description: "6年售后服务保障，加入售后服务QQ群。",
    image: "https://p.sda1.dev/21/49ec32e4e1d8c37469b6c9a7ff853775/dude.png",
    type: "single",
  },
]

function FeatureCard({ feature, index }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  if (feature.type === "carousel") {
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <CarouselCard items={feature.items} />
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-6 flex flex-col items-center"
    >
      <Image
        src={feature.image || "/placeholder.svg"}
        alt={feature.title}
        width={400}
        height={400}
        className="rounded-lg w-full mb-6"
      />
      <div className="w-full text-center">
        <h3 className="text-2xl font-bold mb-2 text-primary">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Freedorm可以……</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}


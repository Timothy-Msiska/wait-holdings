"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, type Variants } from "framer-motion"

export function Hero() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  }

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }

  return (
    <section
      className="
        relative overflow-hidden
        pt-[96px] sm:pt-[112px]
        min-h-[calc(130vh-96px)]
        flex items-center
      "
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/background.png"
          alt="Agricultural background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-3xl text-white">
          {/* Heading */}
          <motion.h1
            className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
            variants={fadeUp}
          >
            Innovating Agriculture Through{" "}
            <span className="text-primary">Science</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl"
            variants={fadeUp}
          >
            WAIT Holdings Limited delivers precision fertilizer manufacturing,
            advanced soil testing, and laboratory services that empower Malawi’s
            agricultural sector with science-backed solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            variants={fadeUp}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                variant="outline"
                className="
                  border-white text-black
                  hover:bg-yellow-400 hover:text-black
                  hover:border-yellow-400
                  transition-all duration-300
                "
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
            variants={container}
          >
            {[
              { value: "15+", label: "Years of Excellence" },
              { value: "500+", label: "Farmers Served" },
              { value: "50+", label: "Custom Formulations" },
              { value: "ISO", label: "Certified Quality" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="mb-2 text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

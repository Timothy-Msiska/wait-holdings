"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Leaf,
  Sprout,
  TrendingUp,
  ShieldCheck,
  CheckCircle,
  XCircle,
} from "lucide-react"

export function MlimifertSection() {
  return (
    <>
      {/* ===== MLIMIFERT OVERVIEW ===== */}
      <section className="relative py-28 bg-[#f7fcfd] overflow-hidden">
        <div className="container mx-auto px-6">

          {/* BRAND INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-[#0c0c0c]">
              Growing Agriculture with{" "}
              <span className="text-primary">Mlimifert</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Mlimifert delivers high-performance fertilizer solutions designed to
              improve soil health, enhance nitrogen efficiency, and maximize crop
              yields for modern farmers.
            </p>
          </motion.div>

          {/* PRODUCT FEATURE SECTION */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-[330px] h-[470px] rounded-2xl shadow-xl overflow-hidden bg-white">
                <Image
                  src="/images/mlini-fert.png"
                  alt="Mlimifert Urea 46%N 50kg"
                  fill
                  className="object-contain p-0"
                  priority
                />
              </div>
            </motion.div>

            {/* PRODUCT INFO */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-[#0c0c0c]">
                Urea 46%N – High Nitrogen Fertilizer
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Mlimifert Urea 46%N is a premium nitrogen fertilizer formulated to
                promote rapid vegetative growth, improved photosynthesis, and
                increased crop productivity.
              </p>

              <ul className="mt-8 space-y-4">
                {productBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CORE VALUES / SERVICES STYLE */}
          <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {coreValues.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-[#0c0c0c] mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== MLIMIFERT BENEFITS & APPLICATIONS ===== */}
      <section className="relative py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6">

          {/* SECTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-3xl font-bold text-[#0c0c0c]">
              Benefits & Applications of <span className="text-primary">Mlimifert</span>
            </h3>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Mlimifert fertilizers are trusted by farmers across Malawi for their high efficiency, reliability, and positive impact on crop yield. Designed to suit various soil types and climatic conditions, Mlimifert helps farmers achieve healthier plants and more abundant harvests.
            </p>
          </motion.div>

          {/* BENEFIT CARDS */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {mlimifertBenefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-[#0c0c0c] mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------- Helpers ---------- */

function ComparisonCard({
  title,
  items,
  positive,
}: {
  title: string
  items: string[]
  positive?: boolean
}) {
  return (
    <div
      className={`rounded-2xl p-8 shadow-md ${
        positive ? "bg-primary/10" : "bg-white"
      }`}
    >
      <h4 className="text-2xl font-semibold mb-6 text-[#0c0c0c]">
        {title}
      </h4>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            {positive ? (
              <CheckCircle className="w-6 h-6 text-primary" />
            ) : (
              <XCircle className="w-6 h-6 text-gray-400" />
            )}
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const productBenefits = [
  "Promotes rapid leaf and stem development",
  "Enhances photosynthesis efficiency",
  "Improves nitrogen uptake and utilization",
  "Supports higher crop yields per hectare",
  "Supplied in durable 50kg packaging",
]

const coreValues = [
  {
    title: "Efficient Nutrition",
    description:
      "Optimized fertilizer formulas designed for effective nutrient absorption.",
    icon: Leaf,
  },
  {
    title: "Sustainable Growth",
    description:
      "Supports long-term soil fertility and sustainable farming practices.",
    icon: Sprout,
  },
  {
    title: "Higher Productivity",
    description:
      "Delivers measurable improvements in crop yield and farm output.",
    icon: TrendingUp,
  },
  {
    title: "Quality Assurance",
    description:
      "Manufactured under strict standards for consistent and reliable results.",
    icon: ShieldCheck,
  },
]

const mlimifertBenefits = [
  {
    title: "Versatile Crop Use",
    description:
      "Suitable for maize, beans, tobacco, and vegetables, enhancing growth and yield.",
    icon: Leaf,
  },
  {
    title: "Soil Health Improvement",
    description:
      "Balances nitrogen levels while promoting microbial activity for healthier soils.",
    icon: Sprout,
  },
  {
    title: "Consistent Quality",
    description:
      "Each batch is tested to maintain uniformity and high performance.",
    icon: ShieldCheck,
  },
  {
    title: "Farmer Trust & Support",
    description:
      "Widely used and recommended by modern farmers in Malawi.",
    icon: TrendingUp,
  },
  {
    title: "Sustainability Focus",
    description:
      "Supports long-term sustainable farming and minimizes environmental impact.",
    icon: CheckCircle,
  },
]

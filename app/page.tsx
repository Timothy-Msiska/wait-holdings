"use client"

import { Hero } from "@/components/hero"
import { MlimifertSection } from "@/components/mlinifert-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TechnologySection } from "@/components/technology-section"
import { CropsSection } from "@/components/crops-section"
import { ImpactSection } from "@/components/impact-section"
import { ClientsSection } from "@/components/clients-section"
import { CTASection } from "@/components/cta-section"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

// Colors based on your website: primary blue and logo leaves
const primaryColor = "#18bef0"
const leafColors = ["#0c0c0c", "#0c0c0c", "#0c0c0c"] // shades for leaves

// Big Stem with 3 leaves SVG
const StemWithLeaves = () => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stem */}
    <line x1="32" y1="32" x2="32" y2="5" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" />

    {/* Leaf 1 */}
    <path
      d="M32 10 C45 0, 55 10, 45 20"
      fill={leafColors[0]}
      stroke={primaryColor}
      strokeWidth="1"
    />

    {/* Leaf 2 */}
    <path
      d="M32 18 C42 8, 55 18, 50 28"
      fill={leafColors[1]}
      stroke={primaryColor}
      strokeWidth="1"
    />

    {/* Leaf 3 */}
    <path
      d="M32 26 C40 16, 53 26, 48 36"
      fill={leafColors[2]}
      stroke={primaryColor}
      strokeWidth="1"
    />
  </svg>
)

export default function Page() {
  const [loading, setLoading] = useState(true)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" as any } },
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Loader Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            {/* Rotating Stem + Leaves */}
            <motion.div
              className="w-32 h-32"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
              <StemWithLeaves />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              className="mt-6 text-xl font-semibold text-primary"
              animate={{ opacity: [0, 1, 0], y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Loading...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <AnimatePresence mode="wait">
          <motion.main
            key="main-content"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            className="relative z-0"
          >
            <Hero />
            <MlimifertSection />
            <AboutSection />
            <ServicesSection />
            <TechnologySection />
            <CropsSection />
            <ImpactSection />
            <ClientsSection />
            <CTASection />
          </motion.main>
        </AnimatePresence>
      )}
    </div>
  )
}

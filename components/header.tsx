"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import clsx from "clsx"
import { Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "MlimiFert", href: "#mlimifert" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Technology", href: "#technology" },
  { name: "Impact", href: "#impact" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("#home")
  const [hovered, setHovered] = useState<string | null>(null)
  const [showHeader, setShowHeader] = useState(true)

  const lastScrollY = useRef(0)
  const headerHeight = 96

  /* ---------- SCROLL BEHAVIOR ---------- */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setShowHeader(!(y > lastScrollY.current && y > 120))
      lastScrollY.current = y
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* ---------- ACTIVE SECTION ---------- */
  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: "-40% 0px -50% 0px" }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  /* ---------- SCROLL TO SECTION ---------- */
  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: top - headerHeight, behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <motion.header
      animate={{ y: showHeader ? 0 : -110 }}
      transition={{ duration: 0.25 }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={clsx(
            "rounded-2xl border backdrop-blur-xl transition-all",
            scrolled
              ? "border-border bg-background/90 shadow-lg"
              : "border-transparent bg-background/70"
          )}
        >
          <nav className="grid h-[72px] grid-cols-3 items-center px-6">
            {/* LOGO */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleScrollTo("#home")
              }}
            >
              <Image
                src="/images/logo.png"
                alt="WAIT HOLDINGS"
                width={96}
                height={48}
                className="h-10 w-auto"
              />
            </a>

            {/* DESKTOP NAV */}
            <motion.div
              layout
              className="hidden md:flex justify-center gap-10 relative"
            >
              {navigation.map((item) => {
                const isActive = active === item.href
                const isHover = hovered === item.href

                return (
                  <button
                    key={item.name}
                    onClick={() => handleScrollTo(item.href)}
                    onMouseEnter={() => setHovered(item.href)}
                    onMouseLeave={() => setHovered(null)}
                    className={clsx(
                      "relative pb-2 text-sm font-medium transition-colors",
                      isActive || isHover
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}

                    {(isActive || isHover) && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                )
              })}
            </motion.div>

            {/* CTA + MOBILE */}
            <div className="flex justify-end gap-2">
              <Button className="hidden md:inline-flex rounded-full px-6">
                Book Consultation
              </Button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden rounded-xl border p-2"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col gap-6 px-6 pb-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleScrollTo(item.href)}
                      className={clsx(
                        "text-left text-sm font-medium",
                        active === item.href
                          ? "text-foreground underline underline-offset-4"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}

"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Technology", href: "#technology" },
  { name: "Impact", href: "#impact" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")
  const [showHeader, setShowHeader] = useState(true)
  const lastScroll = useRef(0)

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll > 40)

      if (currentScroll > lastScroll.current && currentScroll > 100) {
        // scrolling down
        setShowHeader(false)
      } else {
        // scrolling up
        setShowHeader(true)
      }
      lastScroll.current = currentScroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Active section detection
  useEffect(() => {
    const sections = navigation.map((n) =>
      document.querySelector(n.href)
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: "-45% 0px -45% 0px" }
    )

    sections.forEach((sec) => sec && observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={false}
      animate={{
        paddingTop: scrolled ? 8 : 16,
        y: showHeader ? 0 : -100,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          layout
          className={clsx(
            "rounded-2xl border backdrop-blur-xl transition-all",
            scrolled
              ? "border-border bg-background/85 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]"
              : "border-transparent bg-background/70"
          )}
        >
          <nav className="grid h-[72px] grid-cols-3 items-center px-6">

            {/* Left — Logo */}
            <motion.a
              href="/"
              className="flex items-center"
              animate={{ scale: scrolled ? 0.95 : 1 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src="/images/logo.png"
                alt="WAIT HOLDINGS"
                width={96}
                height={48}
                priority
                className="h-10 w-auto object-contain"
              />
            </motion.a>

            {/* Center Navigation */}
            <div className="hidden md:flex justify-center gap-10">
              {navigation.map((item) => {
                const isActive = active === item.href
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      "relative text-sm font-medium transition-colors duration-200",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-primary"
                      />
                    )}
                  </a>
                )
              })}
            </div>

            {/* Right — CTA & Mobile Menu */}
            <div className="flex justify-end items-center gap-2">
              <Button
                className="hidden md:inline-flex rounded-full px-6
                  bg-gradient-to-r from-primary to-primary/80
                  shadow-md shadow-primary/20
                  hover:shadow-lg hover:shadow-primary/30
                  transition-all duration-300
                "
              >
                Book Consultation
              </Button>

              {/* Mobile Menu Button on far right */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden ml-auto rounded-xl border border-border p-2"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col gap-6 px-6 pb-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}

                  <Button className="w-full rounded-full">
                    Book Consultation
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.header>
  )
}

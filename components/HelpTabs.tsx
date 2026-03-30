"use client"

import { useState, useRef, useEffect, useCallback } from "react"

interface HelpLink {
  label: string
  href: string
}

interface HelpCategory {
  icon: React.ReactNode
  label: string
  links: HelpLink[]
  seeAllLabel?: string
  seeAllHref?: string
}

interface HelpTabsProps {
  categories: HelpCategory[]
}

const HelpTabs = ({ categories }: HelpTabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isResetting = useRef(false)
  const count = categories.length
  const tabWidthVw = 100 / 7

  const active = categories[activeIndex]

  const getContainerLeftPx = useCallback(() => {
    const containerEl = scrollRef.current?.closest(".container")
    if (!containerEl) return 0
    return containerEl.getBoundingClientRect().left
  }, [])

  const getTabScrollTarget = useCallback(
    (copyIndex: number, tabIndex: number) => {
      const el = scrollRef.current
      if (!el) return 0
      const child = el.children[copyIndex * count + tabIndex] as HTMLElement
      if (!child) return 0
      const containerLeft = getContainerLeftPx()
      return (
        child.getBoundingClientRect().left -
        el.getBoundingClientRect().left +
        el.scrollLeft -
        containerLeft
      )
    },
    [count, getContainerLeftPx]
  )

  const handleClick = (realIndex: number) => {
    setActiveIndex(realIndex)

    const el = scrollRef.current
    if (!el) return

    // Smooth scroll to middle copy
    const target = getTabScrollTarget(1, realIndex)
    el.scrollTo({ left: target, behavior: "smooth" })

    // After animation, silently reset to middle copy
    isResetting.current = true
    setTimeout(() => {
      const resetTarget = getTabScrollTarget(1, realIndex)
      el.scrollTo({ left: resetTarget, behavior: "instant" })
      isResetting.current = false
    }, 800)
  }

  // On mount, jump to middle copy
  useEffect(() => {
    requestAnimationFrame(() => {
      const el = scrollRef.current
      if (!el) return
      const target = getTabScrollTarget(1, 0)
      el.scrollTo({ left: target, behavior: "instant" })
    })
  }, [getTabScrollTarget])

  const renderTab = (cat: HelpCategory, realIndex: number, key: string) => (
    <button
      key={key}
      onClick={() => handleClick(realIndex)}
      className={`relative flex shrink-0 cursor-pointer flex-col items-center gap-2 border-r border-border px-6 py-4 transition-all ${
        activeIndex === realIndex
          ? "bg-gradient-to-b from-primary to-accent text-white"
          : "bg-white text-foreground hover:bg-grey-20"
      }`}
      style={{ minWidth: "max-content", width: `${tabWidthVw}vw` }}
    >
      <span className="text-2xl">{cat.icon}</span>
      <span className="typo-body-sm font-medium whitespace-nowrap">
        {cat.label}
      </span>
      {activeIndex === realIndex && (
        <div className="absolute -bottom-2 left-1/2 z-10 h-0 w-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-accent" />
      )}
    </button>
  )

  return (
    <div className="flex flex-col gap-6">
      {/* Full-width tabs row */}
      <div className="relative">
        <div className="absolute left-1/2 h-24 w-screen -translate-x-1/2">
          <div ref={scrollRef} className="scrollbar-hide flex overflow-x-auto">
            {categories.map((cat, i) => renderTab(cat, i, `c0-${i}`))}
            {categories.map((cat, i) => renderTab(cat, i, `c1-${i}`))}
            {categories.map((cat, i) => renderTab(cat, i, `c2-${i}`))}
          </div>
        </div>
        <div className="h-[88px]" />
      </div>

      {/* Links stay inside container */}
      <div className="flex flex-col gap-3">
        {active.links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="typo-body-sm text-foreground underline hover:text-primary"
          >
            {link.label}
          </a>
        ))}
        {active.seeAllLabel && (
          <a
            href={active.seeAllHref || "#"}
            className="typo-body-sm mt-1 font-medium text-primary hover:underline"
          >
            {active.seeAllLabel} &gt;
          </a>
        )}
      </div>
    </div>
  )
}

export default HelpTabs

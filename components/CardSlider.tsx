"use client"

import { useRef, useState, useEffect, useCallback } from "react"

interface CardSliderProps {
  children: React.ReactNode
  visibleCount?: number
}

const CardSlider = ({ children, visibleCount = 5 }: CardSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [totalPages, setTotalPages] = useState(1)

  const updatePages = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const childCount = el.children.length
    setTotalPages(Math.ceil(childCount / visibleCount))
  }, [visibleCount])

  useEffect(() => {
    updatePages()
  }, [updatePages])

  const scrollToPage = (page: number) => {
    const el = scrollRef.current
    if (!el || !el.children[0]) return
    const cardWidth = (el.children[0] as HTMLElement).offsetWidth
    const gap = 16
    const scrollLeft = page * visibleCount * (cardWidth + gap)
    el.scrollTo({ left: scrollLeft, behavior: "smooth" })
    setActiveIndex(page)
  }

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el || !el.children[0]) return
    const cardWidth = (el.children[0] as HTMLElement).offsetWidth
    const gap = 16
    const page = Math.round(el.scrollLeft / (visibleCount * (cardWidth + gap)))
    setActiveIndex(page)
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="scrollbar-hide flex w-screen gap-6 overflow-x-auto scroll-smooth pb-4 pl-[max(1rem,calc((100vw-1280px)/2+2rem))]"
      >
        {children}
        {/* Spacer to allow last card to scroll into view */}
        <div className="w-8 shrink-0" aria-hidden />
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i)}
              className={`h-2.5 cursor-pointer rounded-full transition-all ${
                activeIndex === i ? "w-6 bg-secondary" : "w-2.5 bg-grey-20"
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CardSlider

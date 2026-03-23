"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import PrimaryButton from "./PrimaryButton"

interface BannerSlide {
  src: string
  alt: string
  title: string
  subtitle?: string
  buttonText: string
  tabLabel: string
  tabDescription?: string
}

const bannerSlides: BannerSlide[] = [
  {
    src: "/images/du-Ramadan-2026-SpecialNumber-du-ae.jpg",
    alt: "du Ramadan 2026 Special Number",
    title: "Pick your perfect\nnumber.",
    subtitle: "Find a special number that suits you.",
    buttonText: "Shop now",
    tabLabel: "Galaxy S26 Series.",
    tabDescription: "From AED 69/month",
  },
  {
    src: "/images/du-Fazaa2026Generic-du.ae-01.jpg",
    alt: "du Fazaa 2026",
    title: "Fazaa for all. With our\nexclusive plans.",
    buttonText: "Buy online",
    tabLabel: "Online Exclusive",
    tabDescription: "Free router bundled with Home Plus 500",
  },
  {
    src: "/images/du-Ramadan-2026-SpecialNumber-du-ae.jpg",
    alt: "Fazaa for all",
    title: "Fazaa for all.",
    subtitle: "With our exclusive plans.",
    buttonText: "Explore plans",
    tabLabel: "Fazaa for all.",
    tabDescription: "With our exclusive plans.",
  },
  {
    src: "/images/du-Fazaa2026Generic-du.ae-01.jpg",
    alt: "Bridging the space",
    title: "Bridging the space\nbetween hearts.",
    subtitle: "Ramadan Kareem.",
    buttonText: "Learn more",
    tabLabel: "Bridging the space between hearts.",
    tabDescription: "Ramadan Kareem.",
  },
]

const BannerSlider = () => {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % bannerSlides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {bannerSlides.map((slide, index) => (
          <div key={index} className="relative aspect-1920/540 w-full shrink-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto lg:px-20">
                <div className="max-w-xl">
                  <h2 className="font-heading text-3xl font-bold whitespace-pre-line text-white lg:text-4xl">
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <p className="mt-2 text-lg text-white/90">
                      {slide.subtitle}
                    </p>
                  )}
                  <div className="mt-6">
                    <PrimaryButton>{slide.buttonText}</PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom tabs */}
      <div className="absolute right-0 bottom-0 left-0 bg-grey-20/70">
        <div className="container mx-auto lg:px-20">
          <div className="grid grid-cols-4">
            {bannerSlides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`cursor-pointer border-r border-white/20 px-4 py-3 text-left transition-all last:border-r-0 ${
                  current === index
                    ? "text-forground bg-white backdrop-blur-sm"
                    : "text-forground backdrop-blur-sm hover:bg-white"
                }`}
              >
                <p className="text-forground truncate text-sm font-semibold">
                  {slide.tabLabel}
                </p>
                {slide.tabDescription && (
                  <p className="mt-0.5 truncate text-xs text-grey-70">
                    {slide.tabDescription}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSlider

"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "./PrimaryButton"

interface BannerSlide {
  src: string
  alt: string
  title: string
  subtitle?: string
  buttonText: string
  buttonLink?: string
  tabLabel: string
  tabDescription?: string
  invert?: string
}

const bannerSlides: BannerSlide[] = [
  {
    src: "/images/banner/Mobile.jpg",
    alt: "Own The World’s First Built-in Privacy Display On Mobile. ",
    title: "Own The World’s First Built-in Privacy Display On Mobile. ",
    subtitle:
      "From AED 129/month, plus 500GB data and premium subscriptions on us. ",
    buttonText: "Buy online",
    buttonLink:
      "https://www.du.ae/samsung?_gl=1*1sx8g8x*_gcl_au*NTM5NDk4NjY4LjE3NzMwNDAxMDU.*_ga*ODExNjg0OTg3LjE3NDcwNDc1OTM.*_ga_PSF2QWHVDC*czE3NzQ4NTA2OTckbzUyJGcxJHQxNzc0ODUwNzE1JGo0MiRsMCRoMA..",
    tabLabel: "Galaxy S26 Series",
    tabDescription: "From AED 129/month.",
    invert: "invert",
  },
  {
    src: "/images/banner/du-Consumer-50.jpg",
    alt: "Get up to 50% off on Power Plans.",
    title: "Get up to 50% off on Power Plans.",
    subtitle: "For 6 months.",
    buttonText: "Buy online",
    buttonLink:
      "https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=flexible&planType=all&view=splash&_gl=1*1ftzmv3*_gcl_au*NTM5NDk4NjY4LjE3NzMwNDAxMDU.*_ga*ODExNjg0OTg3LjE3NDcwNDc1OTM.*_ga_PSF2QWHVDC*czE3NzQ4NTA2OTckbzUyJGcxJHQxNzc0ODUxMTc4JGo1NCRsMCRoMA..",
    tabLabel: "50% off Power Plans",
    tabDescription: "For 6 months.",
  },
  {
    src: "/images/banner/du-Fazaa.jpg",
    alt: "Fazaa for all. With our exclusive plans.",
    title: "Fazaa for all. With our exclusive plans.",
    buttonText: "Buy online",
    buttonLink:
      "https://shop.du.ae/en/personal/s-du-postpaid-plans?planType=fazaaplans&minutes=national&_gl=1*mbbbu5*_gcl_au*NTM5NDk4NjY4LjE3NzMwNDAxMDU.*_ga*ODExNjg0OTg3LjE3NDcwNDc1OTM.*_ga_PSF2QWHVDC*czE3NzQ4NTA2OTckbzUyJGcxJHQxNzc0ODUxNzg2JGo1OSRsMCRoMA..",
    tabLabel: "Fazaa for all.",
    tabDescription: "With our exclusive plans.",
  },
  {
    src: "/images/banner/HWE-duae.jpg",
    alt: "Get du Home Wireless Plus for AED 229/month.",
    title: "Get du Home Wireless Plus for AED 229/month.",
    subtitle: "",
    buttonText: "Buy online",
    buttonLink:
      "https://www.du.ae/homewireless?utm_source=homepage&utm_medium=banner&utm_campaign=homewireless_hp",
    tabLabel: "du Home Wireless Plans",
    tabDescription: "Unlimited data at home.",
  },
]

const BannerSlider = () => {
  const [current, setCurrent] = useState(0)
  const [progressKey, setProgressKey] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % bannerSlides.length)
  }, [])

  useEffect(() => {
    setProgressKey((k) => k + 1)
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next, current])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] w-full shrink-0 sm:aspect-[1920/540]"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-5 lg:px-20">
                <div className="max-w-xl">
                  <h2
                    className={`typo-display-md whitespace-pre-line text-white ${slide.invert}`}
                  >
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <p className={`mt-2 text-lg text-white/90 ${slide.invert}`}>
                      {slide.subtitle}
                    </p>
                  )}
                  <div className="mt-6">
                    {slide.buttonLink ? (
                      <Link
                        href={slide.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PrimaryButton>{slide.buttonText}</PrimaryButton>
                      </Link>
                    ) : (
                      <PrimaryButton>{slide.buttonText}</PrimaryButton>
                    )}
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
          <div className="flex overflow-x-auto sm:grid sm:grid-cols-4">
            {bannerSlides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`relative min-w-[160px] shrink-0 cursor-pointer border-r border-white/20 px-4 py-3 text-left transition-all last:border-r-0 sm:min-w-0 ${
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
                {current === index && (
                  <span
                    key={progressKey}
                    className="absolute right-0 bottom-0 left-0 h-px origin-left animate-[progress-fill_5s_linear_forwards] bg-primary"
                  />
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

"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "./PrimaryButton"
import { useTranslations, useLocale } from "next-intl"

interface BannerSlide {
  src: string
  srcAr: string
  alt: string
  titleKey: string
  subtitleKey?: string
  buttonTextKey: string
  buttonLink?: string
  tabLabelKey: string
  tabDescKey?: string
  invert?: string
}

const bannerSlides: BannerSlide[] = [
  {
    src: "/images/banner/Mobile.jpg",
    srcAr: "/images/banner/Mobile-ar.png",
    alt: "Galaxy S26 Series",
    titleKey: "slide1Title",
    subtitleKey: "slide1Subtitle",
    buttonTextKey: "buyOnline",
    buttonLink:
      "https://www.du.ae/samsung?_gl=1*1sx8g8x*_gcl_au*NTM5NDk4NjY4LjE3NzMwNDAxMDU.*_ga*ODExNjg0OTg3LjE3NDcwNDc1OTM.*_ga_PSF2QWHVDC*czE3NzQ4NTA2OTckbzUyJGcxJHQxNzc0ODUwNzE1JGo0MiRsMCRoMA..",
    tabLabelKey: "tab1Label",
    tabDescKey: "tab1Desc",
    invert: "invert",
  },
  {
    src: "/images/banner/du-Consumer-50.jpg",
    srcAr: "/images/banner/du-Consumer-50-ar.jpg",
    alt: "50% off Power Plans",
    titleKey: "slide2Title",
    subtitleKey: "slide2Subtitle",
    buttonTextKey: "buyOnline",
    buttonLink:
      "https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=flexible&planType=all&view=splash",
    tabLabelKey: "tab2Label",
    tabDescKey: "tab2Desc",
  },
  {
    src: "/images/banner/du-Fazaa.jpg",
    srcAr: "/images/banner/du-Fazaa-ar.jpg",
    alt: "Fazaa for all",
    titleKey: "slide3Title",
    buttonTextKey: "buyOnline",
    buttonLink:
      "https://shop.du.ae/en/personal/s-du-postpaid-plans?planType=fazaaplans&minutes=national",
    tabLabelKey: "tab3Label",
    tabDescKey: "tab3Desc",
  },
  {
    src: "/images/banner/HWE-duae.jpg",
    srcAr: "/images/banner/HWE-duae-ar.jpg",
    alt: "du Home Wireless",
    titleKey: "slide4Title",
    subtitleKey: "",
    buttonTextKey: "buyOnline",
    buttonLink:
      "https://www.du.ae/homewireless?utm_source=homepage&utm_medium=banner&utm_campaign=homewireless_hp",
    tabLabelKey: "tab4Label",
    tabDescKey: "tab4Desc",
  },
]

const BannerSlider = () => {
  const t = useTranslations("banner")
  const tc = useTranslations("common")
  const locale = useLocale()
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
        style={{ transform: `translateX(${locale === "ar" ? "" : "-"}${current * 100}%)` }}
      >
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] w-full shrink-0 sm:aspect-[1920/540]"
          >
            <Image
              src={locale === "ar" ? slide.srcAr : slide.src}
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
                    {t(slide.titleKey)}
                  </h2>
                  {slide.subtitleKey && t(slide.subtitleKey) && (
                    <p className={`mt-2 text-lg text-white/90 ${slide.invert}`}>
                      {t(slide.subtitleKey)}
                    </p>
                  )}
                  <div className="mt-6">
                    {slide.buttonLink ? (
                      <Link
                        href={slide.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PrimaryButton>{tc(slide.buttonTextKey)}</PrimaryButton>
                      </Link>
                    ) : (
                      <PrimaryButton>{tc(slide.buttonTextKey)}</PrimaryButton>
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
                  {t(slide.tabLabelKey)}
                </p>
                {slide.tabDescKey && (
                  <p className="mt-0.5 truncate text-xs text-grey-70">
                    {t(slide.tabDescKey)}
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

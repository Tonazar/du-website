"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight, User, Search } from "lucide-react"
import SecondaryButton from "./SecondaryButton"
import PrimaryButton from "./PrimaryButton"

const navLinks = [
  { label: "Devices", href: "/devices" },
  { label: "Mobile Plans", href: "/mobile-plans" },
  { label: "Internet & TV", href: "/internet-tv" },
  { label: "Why du", href: "/why-du" },
  { label: "Help", href: "/help" },
]

type Badge = "new" | "new-price" | "50-off"

interface MenuItem {
  label: string
  href: string
  badge?: Badge
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

interface OfferLink {
  label: string
  href: string
}

interface MenuPromo {
  heading: string
  subtitle?: string
  buttonText: string
  buttonHref: string
}

interface DropdownData {
  sections: MenuSection[]
  offers?: { title: string; links: OfferLink[] }
  offersBottom?: string
  promo: MenuPromo
}

const dropdownData: Record<string, DropdownData> = {
  Devices: {
    sections: [
      {
        title: "Devices and accessories",
        items: [
          { label: "Apple", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=mobile-phones&brands=apple&features=inStockFlag&panels=0:1" },
          { label: "Samsung", href: "https://www.du.ae/Samsung" },
          { label: "All phones", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=mobile-phones&brands=all&features=inStockFlag" },
          { label: "All tablets", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=tablets&brands=all&features=inStockFlag&panels=0" },
          { label: "All watches", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=DU_Watches&brands=all&features=inStockFlag&panels=0" },
          { label: "Gaming", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=gaming&brands=all&features=inStockFlag&panels=0" },
          { label: "Accessories", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=accessories1&brands=all&features=inStockFlag&panels=0" },
        ],
      },
      {
        title: "Most popular",
        items: [
          { label: "iPhone 17e", href: "https://shop.du.ae/en/personal/Mobile-phones/iphone-17e-p-COM-HS-APP-974?findInStock=true", badge: "new" },
          { label: "iPhone 17 Pro Max", href: "https://shop.du.ae/en/personal/Mobile-phones/iphone-17-pro-max-p-COM-HS-APP-951?findInStock=true", badge: "new-price" },
          { label: "iPhone 17 Pro", href: "https://shop.du.ae/en/personal/Mobile-phones/iphone-17-pro-p-COM-HS-APP-939?findInStock=true", badge: "new-price" },
          { label: "iPhone Air", href: "https://shop.du.ae/en/personal/Mobile-phones/iphone-17-air-p-COM-HS-APP-962?findInStock=true", badge: "new-price" },
          { label: "iPhone 17", href: "https://shop.du.ae/en/personal/Mobile-phones/iphone-17-p-COM-HS-APP-930?findInStock=true", badge: "new-price" },
          { label: "Galaxy A56", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-a56-p-COM-HS-SAM-1006?findInStock=true" },
          { label: "Galaxy A36", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-a36-p-COM-HS-SAM-992?findInStock=true" },
          { label: "Galaxy A26", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-a26-p-COM-HS-SAM-979?findInStock=true" },
          { label: "Apple Watch Ultra 3", href: "https://shop.du.ae/en/personal/Watches/watch-ultra-3-ocean-band-p-COM-APP-WATCH-398?findInStock=true" },
          { label: "All 5G Devices", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=mobile-phones&brands=all&features=5G&panels=0:4" },
        ],
      },
      {
        title: "Galaxy AI",
        items: [
          { label: "Galaxy S26 Ultra", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-s26-ultra-p-COM-HS-SAM-1088?findInStock=true", badge: "new" },
          { label: "Galaxy S26 Plus", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-s26-plus-p-COM-HS-SAM-1080?findInStock=true", badge: "new" },
          { label: "Galaxy S26", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-s26-p-COM-HS-SAM-1072?findInStock=true", badge: "new" },
          { label: "Galaxy Z Fold7", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-z-fold7-p-COM-HS-SAM-1038?findInStock=true" },
          { label: "Galaxy Z Flip7", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-z-flip7-p-COM-HS-SAM-1034?findInStock=true" },
          { label: "Galaxy Z Flip7 FE", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-z-flip7-fe-p-COM-HS-SAM-1030?findInStock=true" },
          { label: "Galaxy S25 Edge", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-s25-edge-p-COM-HS-SAM-1012" },
        ],
      },
    ],
    promo: {
      heading: "Get a device today and pay AED 0 upfront.",
      buttonText: "Buy now",
      buttonHref: "https://shop.du.ae/en/personal/c-mobile-phones#category=mobile-phones&brands=all&features=inStockFlag",
    },
  },
  "Mobile Plans": {
    sections: [
      {
        title: "Buy postpaid plans",
        items: [
          { label: "Postpaid plans", href: "https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=flexible&planType=all&view=splash", badge: "50-off" },
          { label: "Emirati family plan", href: "https://shop.du.ae/en/personal/postpaid/emirati-plans", badge: "new" },
          { label: "Special numbers plans", href: "https://shop.du.ae/en/personal/s-du-metallic-plans?showLoader=true" },
          { label: "Phone + Plans", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=mobile-phones&brands=all&features=inStockFlag" },
          { label: "Upgrade to postpaid", href: "https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=flexible&view=upgrade" },
          { label: "Change to du", href: "https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=national&view=change" },
        ],
      },
      {
        title: "Buy prepaid plans",
        items: [
          { label: "Flexi", href: "https://shop.du.ae/en/personal/s-du-prepaid-flexi-plans", badge: "new" },
          { label: "Youth Box", href: "https://shop.du.ae/en/personal/prepaid/du-youth-plans", badge: "new" },
          { label: "Easy", href: "https://shop.du.ae/en/personal/s-du-prepaid-easy-plans" },
          { label: "Manage Plan", href: "https://shop.du.ae/en/personal/prepaid/discover" },
          { label: "Roaming", href: "https://www.du.ae/personal/mobile/roaming" },
        ],
      },
      {
        title: "Buy tourist plans",
        items: [
          { label: "Free tourist eSIM", href: "https://shop.du.ae/en/personal/prepaid/du-tourist-prepaid-plans", badge: "new" },
          { label: "Tourist Bundles", href: "https://shop.du.ae/en/personal/prepaid/du-tourist-prepaid-plans?view=bundles" },
        ],
      },
      {
        title: "Enhance your plan",
        items: [
          { label: "Add a Gaming Device", href: "https://shop.du.ae/en/personal/postpaid/du-gaming" },
          { label: "Roaming", href: "https://www.du.ae/personal/mobile/roaming" },
          { label: "Data packs", href: "#" },
          { label: "Multi SIM", href: "#" },
          { label: "eSIM", href: "#" },
          { label: "WiFi UAE", href: "#" },
          { label: "Value Added Services", href: "#" },
          { label: "Pay with du", href: "#" },
          { label: "Elderly and People of Determination offer", href: "#" },
          { label: "Smart Devices SIM", href: "#" },
        ],
      },
    ],
    offers: {
      title: "Top postpaid offers",
      links: [
        { label: "Fazaa New Plans", href: "https://shop.du.ae/en/personal/s-du-postpaid-plans?planType=fazaaplans&minutes=national&banner=duFazaaPlansLandingSpotlightComponent" },
        { label: "50% Esaad Cardholders", href: "https://shop.du.ae/en/personal/s-du-postpaid-plans?planType=esaad&minutes=flexible&banner=duEsaadPlansLandingSpotlightComponent" },
        { label: "My Favourites", href: "https://www.du.ae/myfavourites" },
      ],
    },
    offersBottom: "All offers",
    promo: {
      heading: "50% off select Power Plans",
      buttonText: "Buy now",
      buttonHref: "https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=flexible&planType=all&view=splash",
    },
  },
  "Internet & TV": {
    sections: [
      {
        title: "Buy home services",
        items: [
          { label: "Home Wireless Plans", href: "#", badge: "new" },
          { label: "du Home Internet & TV", href: "#" },
          { label: "TV Packages", href: "#" },
        ],
      },
      {
        title: "Manage your services",
        items: [
          { label: "Moving to a new home?", href: "#" },
          { label: "TV Channels", href: "#" },
          { label: "Track your relocation & modification order", href: "#" },
        ],
      },
      {
        title: "Enhance your services",
        items: [
          { label: "My Favourites", href: "#" },
          { label: "Apple TV 4k", href: "#" },
          { label: "Movies on Demand", href: "#" },
          { label: "Amazon Prime", href: "#" },
          { label: "OSN+", href: "#" },
          { label: "du TV", href: "#" },
        ],
      },
    ],
    offers: {
      title: "Top home offers",
      links: [
        { label: "45% off on du Home Plans", href: "#" },
        { label: "20% off on du Home Wireless Plans", href: "#" },
        { label: "My Favourites", href: "#" },
      ],
    },
    promo: {
      heading: "Home Wireless Plans from AED 229/Month.",
      buttonText: "Buy online",
      buttonHref: "#",
    },
  },
  "Why du": {
    sections: [
      {
        title: "About Us",
        items: [
          { label: "Our brands", href: "#" },
          { label: "Media Center", href: "#" },
          { label: "Corporate Sustainability", href: "#" },
          { label: "Investor Relations", href: "#" },
          { label: "Careers", href: "#" },
        ],
      },
      {
        title: "du Way of life",
        items: [
          { label: "Living in the UAE", href: "#" },
          { label: "Travel", href: "#" },
          { label: "Lifestyle", href: "#" },
          { label: "Innovation & tech", href: "#" },
        ],
      },
      {
        title: "du Network",
        items: [
          { label: "Our network coverage", href: "#" },
          { label: "Fibre", href: "#" },
          { label: "5G+", href: "#" },
          { label: "5G", href: "#" },
          { label: "VoLTE", href: "#" },
        ],
      },
    ],
    promo: {
      heading: "Add life to life with du.",
      buttonText: "Discover why",
      buttonHref: "#",
    },
  },
  Help: {
    sections: [
      {
        title: "Popular topics",
        items: [
          { label: "Self Service links", href: "#" },
          { label: "Unsubscribe third-party services", href: "#" },
          { label: "Update Emirates ID", href: "#" },
          { label: "Do Not Call Registry", href: "#" },
          { label: "SMS Spam", href: "#" },
        ],
      },
      {
        title: "Prepaid Services",
        items: [
          { label: "Check balance & usage", href: "#" },
          { label: "Line is not working", href: "#" },
          { label: "Prepaid offers activation", href: "#" },
          { label: "Out of bundle charges", href: "#" },
        ],
      },
      {
        title: "Postpaid Services",
        items: [
          { label: "Billing Inquiries", href: "#" },
          { label: "Online bill payment", href: "#" },
          { label: "Mobile troubleshooting", href: "#" },
          { label: "Power plan help", href: "#" },
        ],
      },
      {
        title: "Home services",
        items: [
          { label: "Home Wireless troubleshooting", href: "#" },
          { label: "Internet troubleshooting", href: "#" },
          { label: "Home service restoration", href: "#" },
          { label: "Home plan upgrade", href: "#" },
        ],
      },
    ],
    promo: {
      heading: "Need more help?",
      subtitle: "Get the answers you're looking for",
      buttonText: "Visit our help page",
      buttonHref: "#",
    },
  },
}

const BadgeTag = ({ type }: { type: Badge }) => {
  if (type === "new")
    return (
      <span className="typo-caption ml-2 inline-block rounded-sm bg-secondary px-1.5 py-0.5 font-semibold text-white">
        NEW
      </span>
    )
  if (type === "new-price")
    return (
      <span className="typo-caption ml-2 inline-block rounded-sm bg-primary px-1.5 py-0.5 font-semibold text-white">
        NEW PRICE
      </span>
    )
  if (type === "50-off")
    return (
      <span className="typo-caption ml-2 inline-block rounded-sm bg-primary px-1.5 py-0.5 font-semibold text-white">
        50% Off
      </span>
    )
  return null
}

const quickLinks = [
  {
    label: "Quick Pay",
    href: "https://myaccount.du.ae/webapp/en/quick-pay?_gl=1*2hqvef*_gcl_au*NTM5NDk4NjY4LjE3NzMwNDAxMDU.*_ga*ODExNjg0OTg3LjE3NDcwNDc1OTM.*_ga_PSF2QWHVDC*czE3NzQ4NTA2OTckbzUyJGcxJHQxNzc0ODUyODA1JGo1MyRsMCRoMA..",
  },
  {
    label: "Quick Recharge",
    href: "https://myaccount.du.ae/webapp/en/quick-recharge?_gl=1*1vkorln*_gcl_au*NTM5NDk4NjY4LjE3NzMwNDAxMDU.*_ga*ODExNjg0OTg3LjE3NDcwNDc1OTM.*_ga_PSF2QWHVDC*czE3NzQ4NTA2OTckbzUyJGcxJHQxNzc0ODUyODM1JGoyMyRsMCRoMA..",
  },
  { label: "Update ID", href: "/update-id" },
]

const NavBar = ({
  onMenuActiveChange,
}: {
  onMenuActiveChange?: (active: boolean) => void
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdownState] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  const setActiveDropdown = (value: string | null) => {
    setActiveDropdownState(value)
    onMenuActiveChange?.(value !== null)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className={`relative w-full border-b transition-colors ${
          activeDropdown
            ? "border-white/20 bg-[linear-gradient(90deg,var(--secondary)_0%,var(--accent)_100%)]"
            : "border-border bg-white"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-20">
          <div className="flex items-center gap-8">
            <Link href="/">
              <img
                src="/du-logo.svg"
                alt="du"
                className={`h-12 w-12 ${activeDropdown ? "brightness-0 invert" : ""}`}
              />
            </Link>
            <ul className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === link.label ? null : link.label
                      )
                    }
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      activeDropdown
                        ? "text-white hover:text-white/80"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden items-center gap-6 lg:flex">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeDropdown
                    ? "text-white hover:text-white/80"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://myaccount.du.ae/servlet/myaccount/en/home.html"
              target="_blank"
            >
              <SecondaryButton
                className={`h-[44px] w-fit ${activeDropdown ? "border-white text-white hover:bg-white/10" : ""}`}
              >
                Login
              </SecondaryButton>
            </Link>
          </div>

          {/* Mobile right icons */}
          <div className="flex items-center gap-4 lg:hidden">
            <button aria-label="Account">
              <User size={24} />
            </button>
            <button aria-label="Search">
              <Search size={24} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Desktop dropdown megamenu */}
        {activeDropdown && dropdownData[activeDropdown] && (
          <div className="absolute top-full left-0 z-50 hidden h-[55vh] w-full bg-white shadow-lg lg:block">
            <div className="container mx-auto flex gap-10 px-4 py-10 lg:px-20">
              {/* Menu columns */}
              <div className="flex min-w-0 flex-1 gap-10">
                {dropdownData[activeDropdown].sections.map((section, i) => (
                  <div key={i} className="min-w-0">
                    <h3 className="typo-label mb-4 text-foreground">
                      {section.title}
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {section.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="typo-body-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            {item.label}
                            {item.badge && <BadgeTag type={item.badge} />}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* Offers section below first column */}
                    {i === 0 && dropdownData[activeDropdown].offers && (
                      <div className="mt-6">
                        <h3 className="typo-label mb-3 text-foreground">
                          {dropdownData[activeDropdown].offers!.title}
                        </h3>
                        <ul className="flex flex-col gap-2.5">
                          {dropdownData[activeDropdown].offers!.links.map(
                            (link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="typo-body-sm flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
                                >
                                  {link.label}
                                  <ChevronRight size={14} />
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                        {dropdownData[activeDropdown].offersBottom && (
                          <Link
                            href="#"
                            className="typo-body-sm mt-3 inline-block text-muted-foreground transition-colors hover:text-primary"
                          >
                            {dropdownData[activeDropdown].offersBottom}
                          </Link>
                        )}
                      </div>
                    )}

                    {/* "View all" for Why du About Us */}
                    {activeDropdown === "Why du" && i === 0 && (
                      <Link
                        href="#"
                        className="typo-body-sm mt-3 inline-block text-primary transition-colors hover:text-primary/80"
                      >
                        View all
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Promo section */}
              <div className="flex w-80 shrink-0 flex-col items-start justify-center">
                <h2 className="typo-heading-xl text-foreground">
                  {dropdownData[activeDropdown].promo.heading}
                </h2>
                {dropdownData[activeDropdown].promo.subtitle && (
                  <p className="typo-body-sm mt-2 text-muted-foreground">
                    {dropdownData[activeDropdown].promo.subtitle}
                  </p>
                )}
                <div className="mt-5">
                  <Link href={dropdownData[activeDropdown].promo.buttonHref}>
                    <PrimaryButton className="h-12 w-44 text-base">
                      {dropdownData[activeDropdown].promo.buttonText}
                    </PrimaryButton>
                  </Link>
                </div>
                {/* Extra button for Help */}
                {activeDropdown === "Help" && (
                  <div className="mt-3">
                    <Link href="#">
                      <SecondaryButton className="h-12 w-44 text-base">
                        Chat with Luma
                      </SecondaryButton>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mobile quick links below header */}
        <div className="flex justify-center gap-3 border-t border-border px-4 py-3 lg:hidden">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md border border-border px-4 py-2 text-xs font-medium text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[linear-gradient(180deg,#753BBD_0%,#00A9CE_100%)] lg:hidden">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} className="text-white" />
            </button>
          </div>

          {/* Quick action buttons */}
          <div className="flex justify-center gap-3 px-6 pb-6">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md border border-white px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Nav links as accordion items */}
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-t border-white/20 px-6 py-4 text-lg font-semibold text-white"
              >
                {link.label}
                <ChevronDown size={20} className="text-white" />
              </Link>
            ))}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Bottom bar */}
          <div className="flex items-center justify-between border-t border-white/20 px-6 py-4">
            <button className="flex items-center gap-1 text-sm font-medium text-white">
              Switch to Business
              <ChevronDown size={16} className="rotate-180 text-white" />
            </button>
            <div className="flex items-center gap-4">
              <button
                className="text-sm font-medium text-white"
                aria-label="Text size"
              >
                <span className="text-xs">A</span>
                <span className="text-base">A</span>
              </button>
              <button className="text-sm font-medium text-white">عربي</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar

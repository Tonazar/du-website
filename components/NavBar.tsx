"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight, User, Search } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import SecondaryButton from "./SecondaryButton"
import PrimaryButton from "./PrimaryButton"

const navLinks = [
  { label: "Devices", labelKey: "devices", href: "/devices" },
  { label: "Mobile Plans", labelKey: "mobilePlans", href: "/mobile-plans" },
  { label: "Internet & TV", labelKey: "internetTv", href: "/internet-tv" },
  { label: "Why du", labelKey: "whyDu", href: "/why-du" },
  { label: "Help", labelKey: "help", href: "/help" },
]

type Badge = "new" | "new-price" | "50-off"

interface MenuItem {
  label: string
  labelKey?: string
  href: string
  badge?: Badge
}

interface MenuSection {
  title: string
  titleKey: string
  items: MenuItem[]
}

interface OfferLink {
  label: string
  labelKey?: string
  href: string
}

interface MenuPromo {
  heading: string
  headingKey: string
  subtitle?: string
  subtitleKey?: string
  buttonText: string
  buttonTextKey: string
  buttonHref: string
}

interface DropdownData {
  sections: MenuSection[]
  offers?: { title: string; titleKey: string; links: OfferLink[] }
  offersBottom?: string
  offersBottomKey?: string
  promo: MenuPromo
}

const dropdownData: Record<string, DropdownData> = {
  Devices: {
    sections: [
      {
        title: "Devices and accessories",
        titleKey: "devicesAccessories",
        items: [
          { label: "Apple", labelKey: "apple", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=mobile-phones&brands=apple&features=inStockFlag&panels=0:1" },
          { label: "Samsung", labelKey: "samsung", href: "https://www.du.ae/Samsung" },
          { label: "All phones", labelKey: "allPhones", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=mobile-phones&brands=all&features=inStockFlag" },
          { label: "All tablets", labelKey: "allTablets", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=tablets&brands=all&features=inStockFlag&panels=0" },
          { label: "All watches", labelKey: "allWatches", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=DU_Watches&brands=all&features=inStockFlag&panels=0" },
          { label: "Gaming", labelKey: "gaming", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=gaming&brands=all&features=inStockFlag&panels=0" },
          { label: "Accessories", labelKey: "accessories", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=accessories1&brands=all&features=inStockFlag&panels=0" },
        ],
      },
      {
        title: "Most popular",
        titleKey: "mostPopular",
        items: [
          { label: "iPhone 17e", labelKey: "iphone17e", href: "https://shop.du.ae/en/personal/Mobile-phones/iphone-17e-p-COM-HS-APP-974?findInStock=true", badge: "new" },
          { label: "iPhone 17 Pro Max", labelKey: "iphone17ProMax", href: "https://shop.du.ae/en/personal/Mobile-phones/iphone-17-pro-max-p-COM-HS-APP-951?findInStock=true", badge: "new-price" },
          { label: "iPhone 17 Pro", labelKey: "iphone17Pro", href: "https://shop.du.ae/en/personal/Mobile-phones/iphone-17-pro-p-COM-HS-APP-939?findInStock=true", badge: "new-price" },
          { label: "iPhone Air", labelKey: "iphoneAir", href: "https://shop.du.ae/en/personal/Mobile-phones/iphone-17-air-p-COM-HS-APP-962?findInStock=true", badge: "new-price" },
          { label: "iPhone 17", labelKey: "iphone17", href: "https://shop.du.ae/en/personal/Mobile-phones/iphone-17-p-COM-HS-APP-930?findInStock=true", badge: "new-price" },
          { label: "Galaxy A56", labelKey: "galaxyA56", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-a56-p-COM-HS-SAM-1006?findInStock=true" },
          { label: "Galaxy A36", labelKey: "galaxyA36", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-a36-p-COM-HS-SAM-992?findInStock=true" },
          { label: "Galaxy A26", labelKey: "galaxyA26", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-a26-p-COM-HS-SAM-979?findInStock=true" },
          { label: "Apple Watch Ultra 3", labelKey: "appleWatchUltra3", href: "https://shop.du.ae/en/personal/Watches/watch-ultra-3-ocean-band-p-COM-APP-WATCH-398?findInStock=true" },
          { label: "All 5G Devices", labelKey: "all5gDevices", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=mobile-phones&brands=all&features=5G&panels=0:4" },
        ],
      },
      {
        title: "Galaxy AI",
        titleKey: "galaxyAi",
        items: [
          { label: "Galaxy S26 Ultra", labelKey: "galaxyS26Ultra", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-s26-ultra-p-COM-HS-SAM-1088?findInStock=true", badge: "new" },
          { label: "Galaxy S26 Plus", labelKey: "galaxyS26Plus", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-s26-plus-p-COM-HS-SAM-1080?findInStock=true", badge: "new" },
          { label: "Galaxy S26", labelKey: "galaxyS26", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-s26-p-COM-HS-SAM-1072?findInStock=true", badge: "new" },
          { label: "Galaxy Z Fold7", labelKey: "galaxyZFold7", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-z-fold7-p-COM-HS-SAM-1038?findInStock=true" },
          { label: "Galaxy Z Flip7", labelKey: "galaxyZFlip7", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-z-flip7-p-COM-HS-SAM-1034?findInStock=true" },
          { label: "Galaxy Z Flip7 FE", labelKey: "galaxyZFlip7Fe", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-z-flip7-fe-p-COM-HS-SAM-1030?findInStock=true" },
          { label: "Galaxy S25 Edge", labelKey: "galaxyS25Edge", href: "https://shop.du.ae/en/personal/Mobile-phones/galaxy-s25-edge-p-COM-HS-SAM-1012" },
        ],
      },
    ],
    promo: {
      heading: "Get a device today and pay AED 0 upfront.",
      headingKey: "getDevicePromo",
      buttonText: "Buy now",
      buttonTextKey: "buyNow",
      buttonHref: "https://shop.du.ae/en/personal/c-mobile-phones#category=mobile-phones&brands=all&features=inStockFlag",
    },
  },
  "Mobile Plans": {
    sections: [
      {
        title: "Buy postpaid plans",
        titleKey: "buyPostpaid",
        items: [
          { label: "Postpaid plans", labelKey: "postpaidPlans", href: "https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=flexible&planType=all&view=splash", badge: "50-off" },
          { label: "Emirati family plan", labelKey: "emiratiFamilyPlan", href: "https://shop.du.ae/en/personal/postpaid/emirati-plans", badge: "new" },
          { label: "Special numbers plans", labelKey: "specialNumbersPlans", href: "https://shop.du.ae/en/personal/s-du-metallic-plans?showLoader=true" },
          { label: "Phone + Plans", labelKey: "phonePlusPlans", href: "https://shop.du.ae/en/personal/c-mobile-phones#category=mobile-phones&brands=all&features=inStockFlag" },
          { label: "Upgrade to postpaid", labelKey: "upgradeToPostpaid", href: "https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=flexible&view=upgrade" },
          { label: "Change to du", labelKey: "changeToDu", href: "https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=national&view=change" },
        ],
      },
      {
        title: "Buy prepaid plans",
        titleKey: "buyPrepaid",
        items: [
          { label: "Flexi", labelKey: "flexi", href: "https://shop.du.ae/en/personal/s-du-prepaid-flexi-plans", badge: "new" },
          { label: "Youth Box", labelKey: "youthBox", href: "https://shop.du.ae/en/personal/prepaid/du-youth-plans", badge: "new" },
          { label: "Easy", labelKey: "easy", href: "https://shop.du.ae/en/personal/s-du-prepaid-easy-plans" },
          { label: "Manage Plan", labelKey: "managePlan", href: "https://shop.du.ae/en/personal/prepaid/discover" },
          { label: "Roaming", labelKey: "roaming", href: "https://www.du.ae/personal/mobile/roaming" },
        ],
      },
      {
        title: "Buy tourist plans",
        titleKey: "buyTourist",
        items: [
          { label: "Free tourist eSIM", labelKey: "freeTouristEsim", href: "https://shop.du.ae/en/personal/prepaid/du-tourist-prepaid-plans", badge: "new" },
          { label: "Tourist Bundles", labelKey: "touristBundles", href: "https://shop.du.ae/en/personal/prepaid/du-tourist-prepaid-plans?view=bundles" },
        ],
      },
      {
        title: "Enhance your plan",
        titleKey: "enhancePlan",
        items: [
          { label: "Add a Gaming Device", labelKey: "addGamingDevice", href: "https://shop.du.ae/en/personal/postpaid/du-gaming" },
          { label: "Roaming", labelKey: "roamingEnhance", href: "https://www.du.ae/personal/mobile/roaming" },
          { label: "Data packs", labelKey: "dataPacks", href: "#" },
          { label: "Multi SIM", labelKey: "multiSim", href: "#" },
          { label: "eSIM", labelKey: "esim", href: "#" },
          { label: "WiFi UAE", labelKey: "wifiUae", href: "#" },
          { label: "Value Added Services", labelKey: "valueAddedServices", href: "#" },
          { label: "Pay with du", labelKey: "payWithDu", href: "#" },
          { label: "Elderly and People of Determination offer", labelKey: "elderlyPodOffer", href: "#" },
          { label: "Smart Devices SIM", labelKey: "smartDevicesSim", href: "#" },
        ],
      },
    ],
    offers: {
      title: "Top postpaid offers",
      titleKey: "topPostpaidOffers",
      links: [
        { label: "Fazaa New Plans", labelKey: "fazaaNewPlans", href: "https://shop.du.ae/en/personal/s-du-postpaid-plans?planType=fazaaplans&minutes=national&banner=duFazaaPlansLandingSpotlightComponent" },
        { label: "50% Esaad Cardholders", labelKey: "esaadCardholders", href: "https://shop.du.ae/en/personal/s-du-postpaid-plans?planType=esaad&minutes=flexible&banner=duEsaadPlansLandingSpotlightComponent" },
        { label: "My Favourites", labelKey: "myFavourites", href: "https://www.du.ae/myfavourites" },
      ],
    },
    offersBottom: "All offers",
    offersBottomKey: "allOffers",
    promo: {
      heading: "50% off select Power Plans",
      headingKey: "powerPlansPromo",
      buttonText: "Buy now",
      buttonTextKey: "buyNow",
      buttonHref: "https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=flexible&planType=all&view=splash",
    },
  },
  "Internet & TV": {
    sections: [
      {
        title: "Buy home services",
        titleKey: "buyHomeServices",
        items: [
          { label: "Home Wireless Plans", labelKey: "homeWirelessPlans", href: "#", badge: "new" },
          { label: "du Home Internet & TV", labelKey: "duHomeInternetTv", href: "#" },
          { label: "TV Packages", labelKey: "tvPackages", href: "#" },
        ],
      },
      {
        title: "Manage your services",
        titleKey: "manageServices",
        items: [
          { label: "Moving to a new home?", labelKey: "movingNewHome", href: "#" },
          { label: "TV Channels", labelKey: "tvChannels", href: "#" },
          { label: "Track your relocation & modification order", labelKey: "trackRelocation", href: "#" },
        ],
      },
      {
        title: "Enhance your services",
        titleKey: "enhanceServices",
        items: [
          { label: "My Favourites", labelKey: "myFavouritesEnhance", href: "#" },
          { label: "Apple TV 4k", labelKey: "appleTv4k", href: "#" },
          { label: "Movies on Demand", labelKey: "moviesOnDemand", href: "#" },
          { label: "Amazon Prime", labelKey: "amazonPrime", href: "#" },
          { label: "OSN+", labelKey: "osnPlus", href: "#" },
          { label: "du TV", labelKey: "duTv", href: "#" },
        ],
      },
    ],
    offers: {
      title: "Top home offers",
      titleKey: "topHomeOffers",
      links: [
        { label: "45% off on du Home Plans", labelKey: "45offHomePlans", href: "#" },
        { label: "20% off on du Home Wireless Plans", labelKey: "20offHomeWireless", href: "#" },
        { label: "My Favourites", labelKey: "myFavouritesHome", href: "#" },
      ],
    },
    promo: {
      heading: "Home Wireless Plans from AED 229/Month.",
      headingKey: "homeWirelessPlans",
      buttonText: "Buy online",
      buttonTextKey: "buyOnline",
      buttonHref: "#",
    },
  },
  "Why du": {
    sections: [
      {
        title: "About Us",
        titleKey: "aboutUs",
        items: [
          { label: "Our brands", labelKey: "ourBrands", href: "#" },
          { label: "Media Center", labelKey: "mediaCenter", href: "#" },
          { label: "Corporate Sustainability", labelKey: "corporateSustainability", href: "#" },
          { label: "Investor Relations", labelKey: "investorRelations", href: "#" },
          { label: "Careers", labelKey: "careers", href: "#" },
        ],
      },
      {
        title: "du Way of life",
        titleKey: "duWayOfLife",
        items: [
          { label: "Living in the UAE", labelKey: "livingInUae", href: "#" },
          { label: "Travel", labelKey: "travel", href: "#" },
          { label: "Lifestyle", labelKey: "lifestyle", href: "#" },
          { label: "Innovation & tech", labelKey: "innovationTech", href: "#" },
        ],
      },
      {
        title: "du Network",
        titleKey: "duNetwork",
        items: [
          { label: "Our network coverage", labelKey: "ourNetworkCoverage", href: "#" },
          { label: "Fibre", labelKey: "fibre", href: "#" },
          { label: "5G+", labelKey: "fiveGPlus", href: "#" },
          { label: "5G", labelKey: "fiveG", href: "#" },
          { label: "VoLTE", labelKey: "volte", href: "#" },
        ],
      },
    ],
    promo: {
      heading: "Add life to life with du.",
      headingKey: "addLifePromo",
      buttonText: "Discover why",
      buttonTextKey: "discoverWhy",
      buttonHref: "#",
    },
  },
  Help: {
    sections: [
      {
        title: "Popular topics",
        titleKey: "popularTopics",
        items: [
          { label: "Self Service links", labelKey: "selfServiceLinks", href: "#" },
          { label: "Unsubscribe third-party services", labelKey: "unsubscribeThirdParty", href: "#" },
          { label: "Update Emirates ID", labelKey: "updateEmiratesId", href: "#" },
          { label: "Do Not Call Registry", labelKey: "doNotCallRegistry", href: "#" },
          { label: "SMS Spam", labelKey: "smsSpam", href: "#" },
        ],
      },
      {
        title: "Prepaid Services",
        titleKey: "prepaidServices",
        items: [
          { label: "Check balance & usage", labelKey: "checkBalanceUsage", href: "#" },
          { label: "Line is not working", labelKey: "lineNotWorking", href: "#" },
          { label: "Prepaid offers activation", labelKey: "prepaidOffersActivation", href: "#" },
          { label: "Out of bundle charges", labelKey: "outOfBundleCharges", href: "#" },
        ],
      },
      {
        title: "Postpaid Services",
        titleKey: "postpaidServices",
        items: [
          { label: "Billing Inquiries", labelKey: "billingInquiries", href: "#" },
          { label: "Online bill payment", labelKey: "onlineBillPayment", href: "#" },
          { label: "Mobile troubleshooting", labelKey: "mobileTroubleshooting", href: "#" },
          { label: "Power plan help", labelKey: "powerPlanHelp", href: "#" },
        ],
      },
      {
        title: "Home services",
        titleKey: "homeServices",
        items: [
          { label: "Home Wireless troubleshooting", labelKey: "homeWirelessTroubleshooting", href: "#" },
          { label: "Internet troubleshooting", labelKey: "internetTroubleshooting", href: "#" },
          { label: "Home service restoration", labelKey: "homeServiceRestoration", href: "#" },
          { label: "Home plan upgrade", labelKey: "homePlanUpgrade", href: "#" },
        ],
      },
    ],
    promo: {
      heading: "Need more help?",
      headingKey: "needMoreHelp",
      subtitle: "Get the answers you're looking for",
      subtitleKey: "needMoreHelpSub",
      buttonText: "Visit our help page",
      buttonTextKey: "visitHelpPage",
      buttonHref: "#",
    },
  },
}

const quickLinks = [
  {
    labelKey: "quickPay",
    href: "https://myaccount.du.ae/webapp/en/quick-pay?_gl=1*2hqvef*_gcl_au*NTM5NDk4NjY4LjE3NzMwNDAxMDU.*_ga*ODExNjg0OTg3LjE3NDcwNDc1OTM.*_ga_PSF2QWHVDC*czE3NzQ4NTA2OTckbzUyJGcxJHQxNzc0ODUyODA1JGo1MyRsMCRoMA..",
  },
  {
    labelKey: "quickRecharge",
    href: "https://myaccount.du.ae/webapp/en/quick-recharge?_gl=1*1vkorln*_gcl_au*NTM5NDk4NjY4LjE3NzMwNDAxMDU.*_ga*ODExNjg0OTg3LjE3NDcwNDc1OTM.*_ga_PSF2QWHVDC*czE3NzQ4NTA2OTckbzUyJGcxJHQxNzc0ODUyODM1JGoyMyRsMCRoMA..",
  },
  { labelKey: "updateId", href: "/update-id" },
]

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

const NavBar = ({
  onMenuActiveChange,
}: {
  onMenuActiveChange?: (active: boolean) => void
}) => {
  const t = useTranslations("nav")
  const tc = useTranslations("common")
  const td = useTranslations("dropdown")
  const tm = useTranslations("menuItems")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en"
    const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "") || "/"
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

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
                    {t(link.labelKey)}
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
                {tc(link.labelKey)}
              </Link>
            ))}
            <Link
              href="https://myaccount.du.ae/servlet/myaccount/en/home.html"
              target="_blank"
            >
              <SecondaryButton
                className={`h-[44px] w-fit ${activeDropdown ? "border-white text-white hover:bg-white/10" : ""}`}
              >
                {tc("login")}
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
                      {td(section.titleKey)}
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {section.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="typo-body-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            {item.labelKey ? tm(item.labelKey) : item.label}
                            {item.badge && <BadgeTag type={item.badge} />}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* Offers section below first column */}
                    {i === 0 && dropdownData[activeDropdown].offers && (
                      <div className="mt-6">
                        <h3 className="typo-label mb-3 text-foreground">
                          {td(dropdownData[activeDropdown].offers!.titleKey)}
                        </h3>
                        <ul className="flex flex-col gap-2.5">
                          {dropdownData[activeDropdown].offers!.links.map(
                            (link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="typo-body-sm flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
                                >
                                  {link.labelKey ? tm(link.labelKey) : link.label}
                                  <ChevronRight size={14} />
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                        {dropdownData[activeDropdown].offersBottomKey && (
                          <Link
                            href="#"
                            className="typo-body-sm mt-3 inline-block text-muted-foreground transition-colors hover:text-primary"
                          >
                            {tc(dropdownData[activeDropdown].offersBottomKey!)}
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
                        {tc("viewAll")}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Promo section */}
              <div className="flex w-80 shrink-0 flex-col items-start justify-center">
                <h2 className="typo-heading-xl text-foreground">
                  {td(dropdownData[activeDropdown].promo.headingKey)}
                </h2>
                {dropdownData[activeDropdown].promo.subtitleKey && (
                  <p className="typo-body-sm mt-2 text-muted-foreground">
                    {td(dropdownData[activeDropdown].promo.subtitleKey!)}
                  </p>
                )}
                <div className="mt-5">
                  <Link href={dropdownData[activeDropdown].promo.buttonHref}>
                    <PrimaryButton className="h-12 w-44 text-base">
                      {dropdownData[activeDropdown].promo.buttonTextKey === "buyNow" || dropdownData[activeDropdown].promo.buttonTextKey === "buyOnline"
                        ? tc(dropdownData[activeDropdown].promo.buttonTextKey)
                        : td(dropdownData[activeDropdown].promo.buttonTextKey)}
                    </PrimaryButton>
                  </Link>
                </div>
                {/* Extra button for Help */}
                {activeDropdown === "Help" && (
                  <div className="mt-3">
                    <Link href="#">
                      <SecondaryButton className="h-12 w-44 text-base">
                        {td("chatWithLuma")}
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
              {tc(link.labelKey)}
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
                {tc(link.labelKey)}
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
                {t(link.labelKey)}
                <ChevronDown size={20} className="text-white" />
              </Link>
            ))}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Bottom bar */}
          <div className="flex items-center justify-between border-t border-white/20 px-6 py-4">
            <button className="flex items-center gap-1 text-sm font-medium text-white">
              {tc("switchToBusiness")}
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
              <button onClick={switchLocale} className="text-sm font-medium text-white">{tc("switchLang")}</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar

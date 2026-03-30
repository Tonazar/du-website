"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"

const TopBar = ({ menuActive = false }: { menuActive?: boolean }) => {
  const [activeTab, setActiveTab] = useState<"personal" | "business">(
    "personal"
  )
  const t = useTranslations("common")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en"
    const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "") || "/"
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  return (
    <div
      className={`hidden w-full transition-colors lg:block ${menuActive ? "bg-foreground" : "bg-[linear-gradient(315deg,#753BBD_0%,#00A9CE_67.21%,#00A9CE_100%)]"}`}
    >
      <div className="container mx-auto flex h-10 items-center justify-between text-sm text-white lg:px-20">
        <div className="flex items-center gap-0">
          <button
            onClick={() => setActiveTab("personal")}
            className={`h-full px-5 py-2 font-medium transition-colors ${
              activeTab === "personal"
                ? menuActive
                  ? "bg-black"
                  : "bg-[#008CAB]"
                : "text-white/70 hover:text-white"
            }`}
          >
            {t("personal")}
          </button>
          <button
            onClick={() => setActiveTab("business")}
            className={`h-full px-5 py-2 font-medium transition-colors ${
              activeTab === "business"
                ? menuActive
                  ? "bg-black"
                  : "bg-[#008CAB]"
                : "text-white/70 hover:text-white"
            }`}
          >
            {t("business")}
          </button>
        </div>
        <div className="flex items-center gap-6">
          <button
            className="transition-colors hover:text-white/80"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <button
            className="text-sm font-medium transition-colors hover:text-white/80"
            aria-label="Text size"
          >
            <span className="text-xs">A</span>
            <span className="text-base">A</span>
          </button>
          <button
            onClick={switchLocale}
            className="font-medium transition-colors hover:text-white/80"
          >
            {t("switchLang")}
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopBar

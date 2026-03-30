"use client"

import { useTranslations, useLocale } from "next-intl"
import BannerSlider from "@/components/BannerSlider"
import Container from "@/components/Container"
import Header from "@/components/Header"
import SectionCard from "@/components/SectionCard"
import {
  Van,
  CreditCard,
  BookUser,
  Tag,
  MessageCircleQuestionMark,
  BriefcaseBusiness,
  CardSim,
  Phone,
  ShoppingCart,
  Smartphone,
  Globe,
  Wifi,
  Receipt,
  Tv,
  Wallet,
  Building2,
  Shield,
  Headset,
} from "lucide-react"
import ProductCard from "@/components/ProductCard"
import CardSlider from "@/components/CardSlider"
import PrimaryButton from "@/components/PrimaryButton"
import Link from "next/link"
import Image from "next/image"
import Cards from "@/components/Cards"
import SecondaryButton from "@/components/SecondaryButton"
import HelpTabs from "@/components/HelpTabs"
import ReviewCard from "@/components/ReviewCard"
import Footer from "@/components/Footer"

export default function Page() {
  const t = useTranslations()
  const locale = useLocale()
  return (
    <div>
      <Header />
      <BannerSlider />

      {/* products and services */}

      <Container className="flex flex-col gap-6 py-8 sm:gap-12 sm:py-12">
        <div className="flex flex-col gap-20 py-8 sm:py-20">
          <SectionCard>
            <div className="flex flex-col items-center gap-6">
              <h4 className="typo-heading-md">{t("shop.title")}</h4>
              <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:items-baseline lg:justify-around">
                <Prodcuts
                  icon="Modern.png"
                  title={t("shop.devices")}
                  href="https://shop.du.ae/en/personal/c-mobile-phones#category=mobile-phones&brands=all&features=inStockFlag"
                />
                <Prodcuts
                  icon="Postpaid.png"
                  title={t("shop.postpaid")}
                  href="https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=flexible&planType=all&view=splash"
                />
                <Prodcuts icon="Internet.png" title={t("shop.tvInternet")} />
                <Prodcuts icon="Wifi.png" title={t("shop.homeWireless")} />
                <Prodcuts
                  icon="Prepaid.png"
                  title={t("shop.prepaid")}
                  href="https://shop.du.ae/en/personal/s-du-prepaid-flexi-plans"
                />
                <Prodcuts
                  icon="Wallet.png"
                  title={t("shop.financialServices")}
                />
              </div>
            </div>
          </SectionCard>
          <div className="grid w-full grid-cols-2 gap-4 lg:flex lg:justify-around">
            <div className="flex gap-2">
              <Van />
              {t("shop.freeDelivery")}
            </div>
            <div className="flex gap-2">
              <CreditCard />
              {t("shop.noDownpayment")}
            </div>
            <div className="flex gap-2">
              <Tag />
              {t("shop.zeroInterest")}
            </div>
            <div className="flex gap-2">
              <BookUser />
              {t("shop.pickYourNumber")}
            </div>
          </div>
        </div>

        {/* featured products */}
        <div className="h-96">
          <div className="absolute left-1/2 w-screen -translate-x-1/2">
            <CardSlider>
              <ProductCard
                name="iPhone 17 Pro Max"
                image="/images/products/iPhone-Pro-Ma-Bundle.jpg"
                price="340"
                href="https://shop.du.ae/en/personal/Mobile-phones/iphone-17-pro-max-p-COM-HS-APP-951?findInStock=true"
              />
              <ProductCard
                name="iPhone Air Bundle"
                image="/images/products/iPhone-Air-Bundle.png"
                price="160"
                href="https://shop.du.ae/en/personal/Mobile-phones/iphone-17-air-p-COM-HS-APP-962?findInStock=true"
              />
              <ProductCard
                name="Galaxy S26 Ultra"
                image="/images/products/S26-Ultra.jpg"
                price="185"
                href="https://shop.du.ae/en/personal/Mobile-phones/galaxy-s26-ultra-p-COM-HS-SAM-1088?findInStock=true"
              />
              <ProductCard
                name="Galaxy S26 Plus"
                image="/images/products/S26-Plus.jpg"
                price="157"
                href="https://shop.du.ae/en/personal/Mobile-phones/galaxy-s26-plus-p-COM-HS-SAM-1080?findInStock=true"
              />
              <ProductCard
                name="Galaxy S26"
                image="/images/products/S26-black.jpg"
                price="129"
                href="https://shop.du.ae/en/personal/Mobile-phones/galaxy-s26-p-COM-HS-SAM-1072?findInStock=true"
              />
              <ProductCard
                name="iPhone 17 Pro Max"
                image="/images/products/iPhone-17-Pro-max.png"
                price="214"
                href="https://shop.du.ae/en/personal/Mobile-phones/iphone-17-pro-max-p-COM-HS-APP-951?findInStock=true"
              />
              <ProductCard
                name="iPhone 17 Pro"
                image="/images/products/iPhone-17-Pro-max-deep-blue.png"
                price="197"
                href="https://shop.du.ae/en/personal/Mobile-phones/iphone-17-pro-p-COM-HS-APP-939?findInStock=true"
              />
              <ProductCard
                name="iPhone Air"
                image="/images/products/iPhone-17-Air.png"
                price="154"
                href="https://shop.du.ae/en/personal/Mobile-phones/iphone-17-air-p-COM-HS-APP-962?findInStock=true"
              />
              <ProductCard
                name="iPhone 16 Pro Max"
                image="/images/products/iPhone-16-Pro-max.jpg"
                price="183"
              />
              <ProductCard
                name="Nothing 3 Bundle"
                image="/images/products/Nothing-3-Bundle.png"
                price="120"
              />
              <ProductCard
                name="Galaxy Z Flip7"
                image="/images/products/flip7.png"
                price="140"
                href="https://shop.du.ae/en/personal/Mobile-phones/galaxy-z-flip7-p-COM-HS-SAM-1034?findInStock=true"
              />
              <ProductCard
                name="Galaxy A17"
                image="/images/products/Galaxy-A17.png"
                price="32"
              />
              <ProductCard
                name="Xbox Series S"
                image="/images/products/Xbox-Series-S.png"
                price="53"
              />
            </CardSlider>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="https://shop.du.ae/en/personal/c-mobile-phones#category=mobile-phones&brands=all&features=inStockFlag"
            target="_blank"
          >
            <PrimaryButton className="bg-primary px-4 py-2 text-white">
              {t("common.seeAllDevices")}
            </PrimaryButton>
          </Link>
        </div>

        {/* Offers */}

        <h4 className="typo-heading-sm mt-12 text-center">
          {t("offers.title")}
        </h4>

        <div className="my-12 grid grid-cols-2 gap-4 lg:flex lg:justify-between">
          {/* Offer 1 - du Pay */}
          <Link
            href="https://dupay.ae/en"
            target="_blank"
            className="relative w-fit max-w-[300px] cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:translate-y-[-10px] hover:shadow-lg"
          >
            <Image
              src="/images/offers1.jpg"
              alt="du offers"
              width={300}
              height={400}
            />
            <div className="absolute inset-0 flex flex-col gap-3 p-4">
              <span className="w-fit rounded-full border border-white bg-[linear-gradient(12deg,var(--accent),var(--primary),var(--secondary))] px-5 py-2.5 text-sm font-bold text-white">
                {t("offers.offer1Badge")}
              </span>
              <p className="typo-heading-sm font-bold text-white">
                {t("offers.offer1Title")}
              </p>
              <p className="typo-caption text-white/60">
                {t("offers.offer1Footer")}
              </p>
            </div>
          </Link>

          {/* Offer 2 - Power Plans */}
          <Link
            href="https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=flexible&planType=all&view=splash"
            target="_blank"
            className="relative w-fit max-w-[300px] cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:translate-y-[-10px] hover:shadow-lg"
          >
            <Image
              src="/images/offers2.jpg"
              alt="du offers"
              width={300}
              height={400}
            />
            <div className="absolute inset-0 flex flex-col gap-3 p-4">
              <span className="w-fit rounded-full border border-white bg-[linear-gradient(12deg,var(--accent),var(--primary),var(--secondary))] px-5 py-2.5 text-sm font-bold text-white">
                {t("offers.offer2Badge")}
              </span>
              <p className="typo-heading-sm font-bold text-white">
                {t("offers.offer2Title")}
              </p>
            </div>
          </Link>

          {/* Offer 3 - Home Wireless */}
          <div className="relative w-fit max-w-[300px] cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:translate-y-[-10px] hover:shadow-lg">
            <Image
              src="/images/offers3.jpg"
              alt="du offers"
              width={300}
              height={400}
            />
            <div className="absolute inset-0 flex flex-col gap-3 p-4">
              <span className="w-fit rounded-full border border-white bg-[linear-gradient(12deg,var(--accent),var(--primary),var(--secondary))] px-5 py-2.5 text-sm font-bold text-white">
                {t("offers.offer3Badge")}
              </span>
              <p className="typo-heading-sm font-bold text-white">
                {t("offers.offer3Title")}
              </p>
            </div>
          </div>

          {/* Offer 4 - Prepaid Flexi */}
          <Link
            href="https://shop.du.ae/en/personal/s-du-prepaid-flexi-plans"
            target="_blank"
            className="relative w-fit max-w-[300px] cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:translate-y-[-10px] hover:shadow-lg"
          >
            <Image
              src="/images/offers4.jpg"
              alt="du offers"
              width={300}
              height={400}
            />
            <div className="absolute inset-0 flex flex-col gap-3 p-4">
              <span className="w-fit rounded-full border border-white bg-[linear-gradient(12deg,var(--accent),var(--primary),var(--secondary))] px-5 py-2.5 text-sm font-bold text-white">
                {t("offers.offer4Badge")}
              </span>
              <p className="typo-heading-sm font-bold text-white">
                {t("offers.offer4Title")}
              </p>
            </div>
          </Link>
        </div>

        {/* Call back */}
        <div className="mx-auto flex w-fit flex-col items-center gap-4 rounded-xl bg-white px-6 py-4 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <MessageCircleQuestionMark />
            <p>{t("offers.questionsAboutPlans")}</p>
          </div>
          <Link
            href="https://shop.du.ae/en/personal/postpaid/du-telesales?_gl=1*il3zxo*_gcl_au*NTM5NDk4NjY4LjE3NzMwNDAxMDU.*_ga*ODExNjg0OTg3LjE3NDcwNDc1OTM.*_ga_PSF2QWHVDC*czE3NzQ4NTc0NzQkbzUzJGcxJHQxNzc0ODU3NDk0JGo0MCRsMCRoMA.."
            target="_blank"
          >
            <PrimaryButton>{t("common.callMeBack")}</PrimaryButton>
          </Link>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Esaad */}
          <Link
            href="https://shop.du.ae/en/personal/s-du-postpaid-plans?planType=esaad&minutes=flexible&banner=duEsaadPlansLandingSpotlightComponent"
            target="_blank"
            className="flex flex-1 flex-col overflow-hidden rounded-xl bg-[#245744] sm:flex-row"
          >
            <div className="flex flex-[2] items-center justify-center p-4">
              <Image
                src="/images/esaad.png"
                alt="esaad"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-[3] flex-col items-start justify-center gap-4 p-6 sm:p-10">
              <p className="typo-body-lg font-medium text-white">
                {t("offers.esaadLabel")}
              </p>
              <h2 className="typo-display-lg text-white">
                {t("offers.esaadTitle")}
              </h2>
              <p className="typo-body-lg text-white/80">
                {t("offers.esaadDesc")}
              </p>
              <span className="mt-2 rounded-lg bg-white px-12 py-6 text-lg font-bold text-primary">
                {t("offers.esaadCta")}
              </span>
            </div>
          </Link>

          {/* Fazaa */}
          <Link
            href="https://shop.du.ae/en/personal/s-du-postpaid-plans?planType=fazaaplans&minutes=national&banner=duFazaaPlansLandingSpotlightComponent"
            target="_blank"
            className="flex flex-1 flex-col overflow-hidden rounded-xl bg-[#CCA64B] sm:flex-row"
          >
            <div className="flex flex-[2] items-center justify-center p-4">
              <Image
                src="/images/fazaa.png"
                alt="fazaa"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-[3] flex-col items-start justify-center gap-4 p-6 sm:p-10">
              <p className="typo-body-lg font-medium text-white">
                {t("offers.fazaaLabel")}
              </p>
              <h2 className="typo-display-lg text-white">
                {t("offers.fazaaTitle")}
              </h2>
              <p className="typo-body-lg text-white/80">
                {t("offers.fazaaDesc")}
              </p>
              <span className="mt-2 rounded-lg bg-white px-12 py-6 text-lg font-bold text-primary">
                {t("offers.fazaaCta")}
              </span>
            </div>
          </Link>
        </div>

        {/* Home internet */}

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex flex-1 items-center justify-center rounded-xl bg-white">
            <Image
              src="/images/home-internet.jpg"
              alt="du phone"
              width={350}
              height={400}
              className="w-1/2 p-4 sm:mr-6 sm:p-0"
            />
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-start">
            <div className="flex gap-2">
              <BriefcaseBusiness />
              <p>{t("homeInternet.setupWithin24h")}</p>
            </div>
            <h1 className="typo-body-xl">{t("homeInternet.title")}</h1>
            <PrimaryButton className="bg-primary px-4 py-2 text-white">
              {t("homeInternet.findMyPlan")}
            </PrimaryButton>
          </div>
        </div>

        {/* Featured device */}

        <Cards wid="full">
          <div className="p-6 lg:p-10">
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center lg:items-start lg:p-10 lg:text-start">
                <div className="flex flex-wrap justify-center gap-6 lg:justify-start lg:gap-10">
                  <div className="flex gap-2">
                    <Van />
                    <p>{t("samsung.freeDelivery")}</p>
                  </div>
                  <div className="flex gap-2">
                    <CardSim />
                    <p>{t("samsung.freeDelivery")}</p>
                  </div>
                </div>
                <h1 className="typo-body-xl">{t("samsung.title")}</h1>
                <p className="typo-body-lg font-medium">
                  {t("common.startingPrice", { price: "143" })}
                </p>
                <Link href="https://www.du.ae/Samsung" target="_blank">
                  <PrimaryButton className="bg-primary px-4 py-2 text-white">
                    {t("common.buyNow")}
                  </PrimaryButton>
                </Link>
              </div>
              <div className="flex flex-1 items-center justify-center p-6 lg:p-10">
                <Image
                  src="/images/du-Consumer-Samsung.jpg"
                  alt="du phone"
                  width={350}
                  height={400}
                />
              </div>
            </div>
          </div>
        </Cards>

        {/* Packages */}

        <div className="flex flex-col gap-6 lg:flex-row">
          <Cards classes="flex-1">
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-1 items-center justify-center p-4">
                <Image
                  src="/images/Router+Replacement.png"
                  alt="du phone"
                  width={256}
                  height={400}
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center sm:items-start sm:text-start lg:p-10">
                <h1 className="typo-body-xl">{t("packages.homeWireless")}</h1>
                <p className="typo-body-lg font-medium">
                  {t("common.startingPrice", { price: "143" })}
                </p>
                <PrimaryButton className="bg-primary px-4 py-2 text-white">
                  {t("common.buyNow")}
                </PrimaryButton>
              </div>
            </div>
          </Cards>

          <Cards classes="flex-1 flex flex-col sm:flex-row">
            <div className="flex flex-1 items-center justify-center p-4">
              <Image
                src="/images/tv-package.png"
                alt="du phone"
                width={256}
                height={400}
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center sm:items-start sm:text-start lg:p-10">
              <h1 className="typo-body-xl">{t("packages.tvPackages")}</h1>
              <p className="typo-body-lg font-medium">
                {t("packages.startingPrice")}
              </p>
              <PrimaryButton className="bg-primary px-4 py-2 text-white">
                {t("common.buyNow")}
              </PrimaryButton>
            </div>
          </Cards>
        </div>

        {/* Flexi ramadan */}

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex-1">
            <Image
              src="/images/du-PrePaidFlexi-du.ae_App.jpg"
              alt="du phone"
              width={520}
              height={340}
              className="w-full"
            />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-start">
            <h1 className="typo-body-xl">{t("flexi.title")}</h1>
            <p className="typo-body-lg font-medium">{t("flexi.subtitle")}</p>
            <Link
              href="https://shop.du.ae/en/personal/s-du-prepaid-flexi-plans"
              target="_blank"
            >
              <PrimaryButton className="bg-primary px-4 py-2 text-white">
                {t("flexi.cta")}
              </PrimaryButton>
            </Link>
          </div>
        </div>

        {/* App and testimonials */}

        <div className="relative mb-32 h-fit pb-16 sm:mb-16">
          <div
            className="min-h-[300px] w-full overflow-hidden rounded-xl bg-cover bg-no-repeat lg:h-[546px]"
            style={{
              backgroundImage: `url(/images/du-App-Advert${locale === "ar" ? "-ar" : ""}.jpg)`,
            }}
          >
            <div className="flex flex-col gap-4 p-4 sm:max-w-2/3 sm:gap-6 sm:p-6 lg:max-w-1/2 lg:gap-10 lg:p-20">
              <h1 className="typo-body-xl text-white">{t("app.title")}</h1>
              <p className="text-white">{t("app.description")}</p>
              <div className="flex flex-wrap gap-3 lg:gap-6">
                <Image
                  src="/images/appstore.png"
                  alt="app store"
                  width={120}
                  height={40}
                />
                <Image
                  src="/images/googleplay.png"
                  alt="app store"
                  width={120}
                  height={40}
                />
                <Image
                  src="/images/appgallery.png"
                  alt="app store"
                  width={120}
                  height={40}
                />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-30 left-1/2 h-fit -translate-x-1/2 sm:-bottom-10">
            <CardSlider>
              <ReviewCard
                title={t("reviews.r1Title")}
                rating={5}
                review={t("reviews.r1Review")}
              />
              <ReviewCard
                title={t("reviews.r2Title")}
                rating={5}
                review={t("reviews.r2Review")}
              />
              <ReviewCard
                title={t("reviews.r3Title")}
                rating={5}
                review={t("reviews.r3Review")}
              />
              <ReviewCard
                title={t("reviews.r4Title")}
                rating={5}
                review={t("reviews.r4Review")}
              />
              <ReviewCard
                title={t("reviews.r5Title")}
                rating={4}
                review={t("reviews.r5Review")}
              />
              <ReviewCard
                title={t("reviews.r6Title")}
                rating={5}
                review={t("reviews.r6Review")}
              />
              <ReviewCard
                title={t("reviews.r7Title")}
                rating={5}
                review={t("reviews.r7Review")}
              />
              <ReviewCard
                title={t("reviews.r8Title")}
                rating={5}
                review={t("reviews.r8Review")}
              />
            </CardSlider>
          </div>
        </div>

        {/* ID renewal and Cyber safety */}

        <div className="flex flex-col gap-6 text-white lg:flex-row">
          <div className="flex rounded-xl bg-linear-to-r from-[#00205b] to-[#753bbd]">
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-1 items-center justify-center">
                <Image
                  src={`/images/EID${locale === "ar" ? "-ar" : ""}.png`}
                  alt="du phone"
                  width={256}
                  height={400}
                  className="w-1/2 sm:w-[256px]"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-2 p-6 sm:gap-4 sm:p-10">
                <h1 className="typo-body-xl">{t("eid.title")}</h1>
                <p className="typo-body-lg font-medium">{t("eid.subtitle")}</p>
                <SecondaryButton variant="white">
                  {t("eid.cta")}
                </SecondaryButton>
              </div>
            </div>
          </div>
          <div className="flex rounded-xl bg-linear-to-r from-[#00205b] to-[#753bbd]">
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-1 items-center justify-center">
                <Image
                  src={`/images/du-Corporate-Cyber${locale === "ar" ? "-ar" : ""}.png`}
                  alt="du phone"
                  width={256}
                  height={400}
                  className="w-1/2 sm:w-[256px]"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-2 p-6 sm:gap-4 sm:p-10">
                <h1 className="typo-body-xl">{t("cyber.title")}</h1>
                <p className="typo-body-lg font-medium">
                  {t("cyber.subtitle")}
                </p>
                <SecondaryButton variant="white">
                  {t("common.learnMore")}
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>

        {/* Help */}
        <div>
          <h2 className="typo-heading-xl mb-6">{t("needHelp.title")}</h2>
          <HelpTabs
            categories={[
              {
                icon: <Phone size={28} />,
                label: t("needHelp.roaming"),
                links: [
                  {
                    label: "Activate roaming",
                    href: "https://www.du.ae/personal/mobile/roaming",
                  },
                  {
                    label: "Check roaming rates",
                    href: "https://www.du.ae/personal/mobile/roaming",
                  },
                  {
                    label: "Roaming packs",
                    href: "https://www.du.ae/personal/mobile/roaming",
                  },
                ],
                seeAllLabel: "See all Roaming FAQs",
                seeAllHref: "#",
              },
              {
                icon: <ShoppingCart size={28} />,
                label: t("needHelp.shoppingOnline"),
                links: [
                  { label: "Track my online order", href: "#" },
                  { label: "Change my delivery location", href: "#" },
                  { label: "Documents required to buy online", href: "#" },
                ],
                seeAllLabel: "See all Shopping Online FAQs",
                seeAllHref: "#",
              },
              {
                icon: <Smartphone size={28} />,
                label: t("needHelp.postpaidMobile"),
                links: [
                  { label: "Check my balance", href: "#" },
                  { label: "Upgrade my plan", href: "#" },
                  { label: "Add a new line", href: "#" },
                ],
                seeAllLabel: "See all Postpaid Mobile FAQs",
                seeAllHref: "#",
              },
              {
                icon: <CreditCard size={28} />,
                label: t("needHelp.prepaidMobile"),
                links: [
                  { label: "Recharge my line", href: "#" },
                  { label: "Check my balance", href: "#" },
                  { label: "Activate a plan", href: "#" },
                ],
                seeAllLabel: "See all Prepaid Mobile FAQs",
                seeAllHref: "#",
              },
              {
                icon: <Receipt size={28} />,
                label: t("needHelp.billing"),
                links: [
                  { label: "View my bill", href: "#" },
                  { label: "Pay my bill", href: "#" },
                  { label: "Understand my bill", href: "#" },
                ],
                seeAllLabel: "See all Billing FAQs",
                seeAllHref: "#",
              },
              {
                icon: <Globe size={28} />,
                label: t("needHelp.onlineServices"),
                links: [
                  { label: "Manage my account", href: "#" },
                  { label: "Reset my password", href: "#" },
                  { label: "Update my profile", href: "#" },
                ],
                seeAllLabel: "See all Online Services FAQs",
                seeAllHref: "#",
              },
              {
                icon: <Wifi size={28} />,
                label: t("needHelp.homeInternet"),
                links: [
                  { label: "Check my speed", href: "#" },
                  { label: "Troubleshoot my connection", href: "#" },
                  { label: "Upgrade my plan", href: "#" },
                ],
                seeAllLabel: "See all Home Internet FAQs",
                seeAllHref: "#",
              },
              {
                icon: <Tv size={28} />,
                label: t("needHelp.tv"),
                links: [
                  { label: "Browse TV packages", href: "#" },
                  { label: "Manage my channels", href: "#" },
                  { label: "TV setup guide", href: "#" },
                ],
                seeAllLabel: "See all TV FAQs",
                seeAllHref: "#",
              },
              {
                icon: <Wallet size={28} />,
                label: t("needHelp.duPay"),
                links: [
                  { label: "Set up du Pay", href: "#" },
                  { label: "Transfer money", href: "#" },
                  { label: "du Pay limits", href: "#" },
                ],
                seeAllLabel: "See all du Pay FAQs",
                seeAllHref: "#",
              },
              {
                icon: <Building2 size={28} />,
                label: t("needHelp.businessLabel"),
                links: [
                  { label: "Business plans", href: "#" },
                  { label: "Corporate solutions", href: "#" },
                  { label: "Dedicated account manager", href: "#" },
                ],
                seeAllLabel: "See all Business FAQs",
                seeAllHref: "#",
              },
              {
                icon: <Shield size={28} />,
                label: t("needHelp.security"),
                links: [
                  { label: "Report fraud", href: "#" },
                  { label: "Secure my account", href: "#" },
                  { label: "Privacy settings", href: "#" },
                ],
                seeAllLabel: "See all Security FAQs",
                seeAllHref: "#",
              },
              {
                icon: <Headset size={28} />,
                label: t("needHelp.contactUs"),
                links: [
                  { label: "Call customer care", href: "#" },
                  { label: "Visit a store", href: "#" },
                  { label: "Live chat", href: "#" },
                ],
                seeAllLabel: "See all Contact FAQs",
                seeAllHref: "#",
              },
            ]}
          />
        </div>

        {/* Help page */}
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border p-4">
            <h5 className="typo-body-lg font-bold">
              {t("helpPage.onlineSelfServices")}
            </h5>
            <p className="typo-body-sm">
              {t("helpPage.onlineSelfServicesDesc")}
            </p>
            <SecondaryButton variant="outline" size="sm">
              {t("helpPage.onlineSelfServices")}
            </SecondaryButton>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border p-4">
            <h5 className="typo-body-lg font-bold">
              {t("helpPage.onlineSelfServices")}
            </h5>
            <p className="typo-body-sm">
              {t("helpPage.onlineSelfServicesDesc")}
            </p>
            <SecondaryButton variant="outline" size="sm">
              {t("helpPage.onlineSelfServices")}
            </SecondaryButton>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border p-4">
            <h5 className="typo-body-lg font-bold">
              {t("helpPage.onlineSelfServices")}
            </h5>
            <p className="typo-body-sm">
              {t("helpPage.onlineSelfServicesDesc")}
            </p>
            <SecondaryButton variant="outline" size="sm">
              {t("helpPage.onlineSelfServices")}
            </SecondaryButton>
          </div>
        </div>

        <Footer />
      </Container>
    </div>
  )
}

interface ProdcutsProps {
  icon: string
  title: string
  href?: string
}

const Prodcuts = ({ icon, title, href }: ProdcutsProps) => {
  const content = (
    <div className="flex items-center gap-3 rounded-xl border border-border p-4 sm:flex-col lg:border-0 lg:p-0">
      <img src={`icons/${icon}`} alt={title} className="w-8 lg:w-12" />
      <h5 className="typo-heading-sm text-center">{title}</h5>
    </div>
  )

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    )
  }

  return content
}

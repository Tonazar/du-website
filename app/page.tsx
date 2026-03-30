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
  return (
    <div>
      <Header />
      <BannerSlider />

      {/* products and services */}

      <Container className="flex flex-col gap-6 py-8 sm:gap-12 sm:py-12">
        <div className="flex flex-col gap-20 py-8 sm:py-20">
          <SectionCard>
            <div className="flex flex-col items-center gap-6">
              <h4 className="typo-heading-md">
                Shop our products and services
              </h4>
              <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:items-baseline lg:justify-around">
                <Prodcuts icon="Modern.png" title="Devices" href="https://shop.du.ae/en/personal/c-mobile-phones#category=mobile-phones&brands=all&features=inStockFlag" />
                <Prodcuts icon="Postpaid.png" title="Postpaid" href="https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=flexible&planType=all&view=splash" />
                <Prodcuts icon="Internet.png" title="TV/internet" />
                <Prodcuts icon="Wifi.png" title="Home wireless" />
                <Prodcuts icon="Prepaid.png" title="Prepaid" href="https://shop.du.ae/en/personal/s-du-prepaid-flexi-plans" />
                <Prodcuts icon="Wallet.png" title="Financial services" />
              </div>
            </div>
          </SectionCard>
          <div className="grid w-full grid-cols-2 gap-4 lg:flex lg:justify-around">
            <div className="flex gap-2">
              <Van />
              Free delivery
            </div>
            <div className="flex gap-2">
              <CreditCard />
              No downpayment
            </div>
            <div className="flex gap-2">
              <Tag />
              0% Interest
            </div>
            <div className="flex gap-2">
              <BookUser />
              Pick your number
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
          <Link href="https://shop.du.ae/en/personal/c-mobile-phones#category=mobile-phones&brands=all&features=inStockFlag" target="_blank">
            <PrimaryButton className="bg-primary px-4 py-2 text-white">
              See all devices
            </PrimaryButton>
          </Link>
        </div>

        {/* Offers */}

        <h4 className="typo-heading-sm mt-12 text-center">Our best offers</h4>

        <div className="my-12 grid grid-cols-2 gap-4 lg:flex lg:justify-between">
          <div className="w-fit max-w-[300px] cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:translate-y-[-10px] hover:shadow-lg">
            <Image
              src="/images/offers1.png"
              alt="du offers"
              width={300}
              height={400}
            />
          </div>
          <div className="w-fit max-w-[300px] cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:translate-y-[-10px] hover:shadow-lg">
            <Image
              src="/images/offers2.png"
              alt="du offers"
              width={300}
              height={400}
            />
          </div>
          <div className="w-fit max-w-[300px] cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:translate-y-[-10px] hover:shadow-lg">
            <Image
              src="/images/offers3.png"
              alt="du offers"
              width={300}
              height={400}
            />
          </div>
          <div className="w-fit max-w-[300px] cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:translate-y-[-10px] hover:shadow-lg">
            <Image
              src="/images/offers4.png"
              alt="du offers"
              width={300}
              height={400}
            />
          </div>
        </div>

        {/* Call back */}
        <div className="mx-auto flex w-fit flex-col items-center gap-4 rounded-xl bg-white px-6 py-4 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <MessageCircleQuestionMark />
            <p>Questions about our plans? We're here to help!</p>
          </div>
          <PrimaryButton>Call me back</PrimaryButton>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <Link href="https://shop.du.ae/en/personal/s-du-postpaid-plans?planType=esaad&minutes=flexible&banner=duEsaadPlansLandingSpotlightComponent" target="_blank" className="flex flex-1 items-center justify-center overflow-hidden rounded-xl bg-[#245745]">
            <Image
              src="/images/esaad.png"
              alt="du phone"
              width={600}
              height={400}
            />
          </Link>
          <Link href="https://shop.du.ae/en/personal/s-du-postpaid-plans?planType=fazaaplans&minutes=national&banner=duFazaaPlansLandingSpotlightComponent" target="_blank" className="flex flex-1 items-center justify-center overflow-hidden rounded-xl bg-[#CBA54A]">
            <Image
              src="/images/fazaa.png"
              alt="du phone"
              width={600}
              height={400}
            />
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

          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-left">
            <div className="flex gap-2">
              <BriefcaseBusiness />
              <p>Setup within 24 hours</p>
            </div>
            <h1 className="typo-body-xl">
              Up to 45% off home
              <br /> internet and TV plans
            </h1>
            <PrimaryButton className="bg-primary px-4 py-2 text-white">
              Find my plan
            </PrimaryButton>
          </div>
        </div>

        {/* Featured device */}

        <Cards wid="full">
          <div className="p-6 lg:p-10">
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center lg:items-start lg:p-10 lg:text-left">
                <div className="flex flex-wrap justify-center gap-6 lg:justify-start lg:gap-10">
                  <div className="flex gap-2">
                    <Van />
                    <p>Free delivery</p>
                  </div>
                  <div className="flex gap-2">
                    <CardSim />
                    <p>Free delivery</p>
                  </div>
                </div>
                <h1 className="typo-body-xl">
                  Unfold your story with
                  <br /> Galaxy AI.
                </h1>
                <p className="typo-body-lg font-medium">
                  Starting AED 143/month.
                </p>
                <Link href="https://www.du.ae/Samsung" target="_blank">
                  <PrimaryButton className="bg-primary px-4 py-2 text-white">
                    Buy now
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
              <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center sm:items-start sm:text-left lg:p-10">
                <h1 className="typo-body-xl">du Home Wireless</h1>
                <p className="typo-body-lg font-medium">
                  Starting AED 143/month.
                </p>
                <PrimaryButton className="bg-primary px-4 py-2 text-white">
                  Buy now
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
            <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center sm:items-start sm:text-left lg:p-10">
              <h1 className="typo-body-xl">TV packages</h1>
              <p className="typo-body-lg font-medium">
                Starting AED 143/month.
              </p>
              <PrimaryButton className="bg-primary px-4 py-2 text-white">
                Buy now
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
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-left">
            <h1 className="typo-body-xl">Get 50GB free and save 50%.</h1>
            <p className="typo-body-lg font-medium">
              On Prepaid Flexi this Ramadan.
            </p>
            <Link href="https://shop.du.ae/en/personal/s-du-prepaid-flexi-plans" target="_blank">
              <PrimaryButton className="bg-primary px-4 py-2 text-white">
                Explore flexi plans
              </PrimaryButton>
            </Link>
          </div>
        </div>

        {/* App and testimonials */}

        <div className="relative mb-32 h-fit pb-16 sm:mb-16">
          <div className="min-h-[300px] w-full overflow-hidden rounded-xl bg-[url(/images/du-App-Advert.jpg)] bg-cover bg-no-repeat lg:h-[546px]">
            <div className="flex flex-col gap-4 p-4 sm:max-w-2/3 sm:gap-6 sm:p-6 lg:max-w-1/2 lg:gap-10 lg:p-20">
              <h1 className="typo-body-xl text-white">
                Everything you need in the du App.
              </h1>
              <p className="text-white">
                Manage services, pay your bills, track usage and renew your ID,
                all in one place.
              </p>
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
                title="So good so far"
                rating={5}
                review="du's commitment towards its customers is always amazing and keeps going."
              />
              <ReviewCard
                title="Easy and fast"
                rating={5}
                review="du app recharge for friends it's easy and fast."
              />
              <ReviewCard
                title="Saves time and energy"
                rating={5}
                review="Impressive, each time I got nice offers and recharged my credit on time from anywhere."
              />
              <ReviewCard
                title="Easy to use"
                rating={5}
                review="Recommended all over the world with great experience and quality."
              />
              <ReviewCard
                title="Safe and secure"
                rating={4}
                review="Easy to use and safe and secure payment methods overall the application is good."
              />
              <ReviewCard
                title="Great service"
                rating={5}
                review="Very helpful app, everything is just a click away. Highly recommend it."
              />
              <ReviewCard
                title="Convenient"
                rating={5}
                review="Makes managing my account so simple. Love the interface and speed."
              />
              <ReviewCard
                title="Love it"
                rating={5}
                review="Best telecom app I have ever used. Keep up the good work du!"
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
                  src="/images/EID.png"
                  alt="du phone"
                  width={256}
                  height={400}
                  className="w-1/2 sm:w-[256px]"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-2 p-6 sm:gap-4 sm:p-10">
                <h1 className="typo-body-xl">Renew your Emirates ID</h1>
                <p className="typo-body-lg font-medium">
                  Keep your ID up to date.
                </p>
                <SecondaryButton variant="white">Renew ID</SecondaryButton>
              </div>
            </div>
          </div>
          <div className="flex rounded-xl bg-linear-to-r from-[#00205b] to-[#753bbd]">
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-1 items-center justify-center">
                <Image
                  src="/images/du-Corporate-Cyber.png"
                  alt="du phone"
                  width={256}
                  height={400}
                  className="w-1/2 sm:w-[256px]"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-2 p-6 sm:gap-4 sm:p-10">
                <h1 className="typo-body-xl">Stay Cyber Safe</h1>
                <p className="typo-body-lg font-medium">
                  Stay safe online by following our cyber-safety practices.
                </p>
                <SecondaryButton variant="white">Learn more</SecondaryButton>
              </div>
            </div>
          </div>
        </div>

        {/* Help */}
        <div>
          <h2 className="typo-heading-xl mb-6">Need help?</h2>
          <HelpTabs
            categories={[
              {
                icon: <Phone size={28} />,
                label: "Roaming",
                links: [
                  { label: "Activate roaming", href: "https://www.du.ae/personal/mobile/roaming" },
                  { label: "Check roaming rates", href: "https://www.du.ae/personal/mobile/roaming" },
                  { label: "Roaming packs", href: "https://www.du.ae/personal/mobile/roaming" },
                ],
                seeAllLabel: "See all Roaming FAQs",
                seeAllHref: "#",
              },
              {
                icon: <ShoppingCart size={28} />,
                label: "Shopping online",
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
                label: "Postpaid Mobile",
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
                label: "Prepaid Mobile",
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
                label: "Billing",
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
                label: "Online Services",
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
                label: "Home Internet",
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
                label: "TV",
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
                label: "du Pay",
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
                label: "Business",
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
                label: "Security",
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
                label: "Contact us",
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
            <h5 className="typo-body-lg font-bold">Online self-services</h5>
            <p className="typo-body-sm">
              Experiencing longer than normal wait-times in our call centres?
              Access our services online.
            </p>
            <SecondaryButton variant="outline" size="sm">
              Online self-services
            </SecondaryButton>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border p-4">
            <h5 className="typo-body-lg font-bold">Online self-services</h5>
            <p className="typo-body-sm">
              Experiencing longer than normal wait-times in our call centres?
              Access our services online.
            </p>
            <SecondaryButton variant="outline" size="sm">
              Online self-services
            </SecondaryButton>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border p-4">
            <h5 className="typo-body-lg font-bold">Online self-services</h5>
            <p className="typo-body-sm">
              Experiencing longer than normal wait-times in our call centres?
              Access our services online.
            </p>
            <SecondaryButton variant="outline" size="sm">
              Online self-services
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

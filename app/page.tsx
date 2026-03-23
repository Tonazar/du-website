import BannerSlider from "@/components/BannerSlider"
import Container from "@/components/Container"
import NavBar from "@/components/NavBar"
import SectionCard from "@/components/SectionCard"
import TopBar from "@/components/TopBar"
import {
  Van,
  CreditCard,
  BookUser,
  Tag,
  MessageCircleQuestionMark,
  BriefcaseBusiness,
  CardSim,
} from "lucide-react"
import ProductCard from "@/components/ProductCard"
import CardSlider from "@/components/CardSlider"
import PrimaryButton from "@/components/PrimaryButton"
import Image from "next/image"
import Cards from "@/components/Cards"
import SpecialButton from "@/components/SpecialButton"

export default function Page() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <BannerSlider />

      {/* products and services */}

      <Container>
        <div className="flex flex-col gap-20 py-20">
          <SectionCard>
            <div className="flex flex-col items-center gap-6">
              <h4 className="typo-heading-md">
                Shop our products and services
              </h4>
              <div className="flex w-full items-baseline justify-around">
                <Prodcuts icon="Modern.png" title="Devices" />
                <Prodcuts icon="Postpaid.png" title="Postpaid" />
                <Prodcuts icon="Internet.png" title="TV/internet" />
                <Prodcuts icon="Wifi.png" title="Home wireless" />
                <Prodcuts icon="Prepaid.png" title="Prepaid" />
                <Prodcuts icon="Wallet.png" title="Financial services" />
              </div>
            </div>
          </SectionCard>
          <div className="flex w-full justify-around">
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
      </Container>

      {/* featured products */}

      <div className="overflow-hidden py-10">
        <CardSlider>
          <ProductCard
            name="Galaxy S20 Ultra"
            image="/images/products/S26-Ultra.jpg"
            price="185"
          />
          <ProductCard
            name="Galaxy S20 Ultra"
            image="/images/products/S26-Ultra.jpg"
            price="185"
          />
          <ProductCard
            name="Galaxy S20 Ultra"
            image="/images/products/S26-Ultra.jpg"
            price="185"
          />
          <ProductCard
            name="Galaxy S20 Ultra"
            image="/images/products/S26-Ultra.jpg"
            price="185"
          />
          <ProductCard
            name="Galaxy S20 Ultra"
            image="/images/products/S26-Ultra.jpg"
            price="185"
          />
          <ProductCard
            name="Galaxy S20 Ultra"
            image="/images/products/S26-Ultra.jpg"
            price="185"
          />
          <ProductCard
            name="Galaxy S20 Ultra"
            image="/images/products/S26-Ultra.jpg"
            price="185"
          />
          <ProductCard
            name="Galaxy S20 Ultra"
            image="/images/products/S26-Ultra.jpg"
            price="185"
          />
        </CardSlider>
      </div>
      <div className="flex justify-center">
        <PrimaryButton className="bg-primary px-4 py-2 text-white">
          See all devices
        </PrimaryButton>
      </div>

      {/* Offers */}

      <h4 className="typo-heading-sm mt-12 text-center">Our best offers</h4>
      <Container className="flex flex-col gap-20">
        <div className="my-12 flex justify-between">
          <div className="w-fit max-w-[300px] overflow-hidden rounded-xl">
            <Image
              src="/images/offers1.png"
              alt="du offers"
              width={300}
              height={400}
            />
          </div>
          <div className="w-fit max-w-[300px] overflow-hidden rounded-xl">
            <Image
              src="/images/offers1.png"
              alt="du offers"
              width={300}
              height={400}
            />
          </div>
          <div className="w-fit max-w-[300px] overflow-hidden rounded-xl">
            <Image
              src="/images/offers1.png"
              alt="du offers"
              width={300}
              height={400}
            />
          </div>
          <div className="w-fit max-w-[300px] overflow-hidden rounded-xl">
            <Image
              src="/images/offers1.png"
              alt="du offers"
              width={300}
              height={400}
            />
          </div>
        </div>

        {/* Call back */}
        <div className="mx-auto flex w-fit items-center gap-6 rounded-xl bg-white px-6 py-4">
          <div className="flex items-center gap-2">
            <MessageCircleQuestionMark />
            <p>Questions about our plans? We're here to help!</p>
          </div>
          <PrimaryButton>Call me back</PrimaryButton>
        </div>

        <div className="flex gap-6">
          <div className="flex flex-1 items-center justify-center rounded-xl bg-[#245745]">
            <Image
              src="/images/esaad.png"
              alt="du phone"
              width={600}
              height={400}
            />
          </div>
          <div className="flex flex-1 items-center justify-center rounded-xl bg-[#CBA54A]">
            <Image
              src="/images/fazaa.png"
              alt="du phone"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Home internet */}

        <div className="flex">
          <div className="flex flex-1 items-center justify-center">
            <Image
              src="/images/home-internet.jpg"
              alt="du phone"
              width={350}
              height={400}
            />
          </div>

          <div className="flex flex-1 flex-col justify-center gap-4">
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
          <div className="p-10">
            <div className="flex">
              <div className="flex flex-1 flex-col justify-center gap-4 p-10">
                <div className="flex gap-10">
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
                <PrimaryButton className="bg-primary px-4 py-2 text-white">
                  Buy now
                </PrimaryButton>
              </div>
              <div className="flex flex-1 items-center justify-center p-10">
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

        <div className="flex gap-6">
          <Cards classes="flex-1">
            <div className="flex">
              <div className="flex flex-1 items-center justify-center">
                <Image
                  src="/images/Router+Replacement.png"
                  alt="du phone"
                  width={256}
                  height={400}
                />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-4 p-10">
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

          <Cards classes="flex-1 flex">
            <div className="flex flex-1 items-center justify-center">
              <Image
                src="/images/tv-package.png"
                alt="du phone"
                width={256}
                height={400}
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-4 p-10">
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

        <div className="flex gap-6">
          <div className="flex-1">
            <Image
              src="/images/du-PrePaidFlexi-du.ae_App.jpg"
              alt="du phone"
              width={520}
              height={340}
            />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-4">
            <h1 className="typo-body-xl">Get 50GB free and save 50%.</h1>
            <p className="typo-body-lg font-medium">
              On Prepaid Flexi this Ramadan.
            </p>
            <PrimaryButton className="bg-primary px-4 py-2 text-white">
              Explore flexi plans
            </PrimaryButton>
          </div>
        </div>

        {/* App and testimonials */}

        <div className="relative h-fit">
          <div className="h-[546px] w-full overflow-hidden rounded-xl bg-[url(/images/du-App-Advert.jpg)] bg-cover bg-no-repeat">
            <div className="flex max-w-1/2 flex-col gap-10 p-20">
              <h1 className="typo-body-xl text-white">
                Everything you need in the du App.
              </h1>
              <p className="text-white">
                Manage services, pay your bills, track usage and renew your ID,
                all in one place.
              </p>
              <div className="flex gap-6">
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
          <div className="absolute -bottom-10 -left-40 h-fit">
            <CardSlider>
              <ProductCard
                name="Galaxy S20 Ultra"
                image="/images/products/S26-Ultra.jpg"
                price="185"
              />
              <ProductCard
                name="Galaxy S20 Ultra"
                image="/images/products/S26-Ultra.jpg"
                price="185"
              />
              <ProductCard
                name="Galaxy S20 Ultra"
                image="/images/products/S26-Ultra.jpg"
                price="185"
              />
              <ProductCard
                name="Galaxy S20 Ultra"
                image="/images/products/S26-Ultra.jpg"
                price="185"
              />
              <ProductCard
                name="Galaxy S20 Ultra"
                image="/images/products/S26-Ultra.jpg"
                price="185"
              />
              <ProductCard
                name="Galaxy S20 Ultra"
                image="/images/products/S26-Ultra.jpg"
                price="185"
              />
              <ProductCard
                name="Galaxy S20 Ultra"
                image="/images/products/S26-Ultra.jpg"
                price="185"
              />
              <ProductCard
                name="Galaxy S20 Ultra"
                image="/images/products/S26-Ultra.jpg"
                price="185"
              />
            </CardSlider>
          </div>
        </div>

        {/* ID renewal and Cyber safety */}

        <div className="flex gap-6 text-white">
          <div className="flex rounded-xl bg-linear-to-r from-[#00205b] to-[#753bbd]">
            <div className="flex">
              <div className="flex flex-1 items-center">
                <Image
                  src="/images/EID.png"
                  alt="du phone"
                  width={256}
                  height={400}
                />
              </div>
              <div className="flex flex-1 flex-col justify-center gap-4 p-10">
                <h1 className="typo-body-xl">Renew your Emirates ID</h1>
                <p className="typo-body-lg font-medium">
                  Keep your ID up to date.
                </p>
                <SpecialButton>Renew ID</SpecialButton>
              </div>
            </div>
          </div>
          <div className="flex rounded-xl bg-linear-to-r from-[#00205b] to-[#753bbd]">
            <div className="flex flex-1 items-center">
              <Image
                src="/images/du-Corporate-Cyber.png"
                alt="du phone"
                width={256}
                height={400}
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-4 p-10">
              <h1 className="typo-body-xl">Stay Cyber Safe</h1>
              <p className="typo-body-lg font-medium">
                Stay safe online by following our cyber-safety practices.
              </p>
              <SpecialButton>Learn more</SpecialButton>
            </div>
          </div>
        </div>

        {/* Help */}
        {/* New slider goes here */}

        {/* Help page */}
        <div className="flex gap-6">
          <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border p-4">
            <h5 className="typo-body-lg font-bold">Online self-services</h5>
            <p className="typo-body-sm">
              Experiencing longer than normal wait-times in our call centres?
              Access our services online.
            </p>
            <SpecialButton classes="border border-primary" sm>
              Online self-services
            </SpecialButton>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border p-4">
            <h5 className="typo-body-lg font-bold">Online self-services</h5>
            <p className="typo-body-sm">
              Experiencing longer than normal wait-times in our call centres?
              Access our services online.
            </p>
            <SpecialButton classes="border border-primary" sm>
              Online self-services
            </SpecialButton>
          </div>
          <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border p-4">
            <h5 className="typo-body-lg font-bold">Online self-services</h5>
            <p className="typo-body-sm">
              Experiencing longer than normal wait-times in our call centres?
              Access our services online.
            </p>
            <SpecialButton classes="border border-primary" sm>
              Online self-services
            </SpecialButton>
          </div>
        </div>
      </Container>
    </div>
  )
}

interface ProdcutsProps {
  icon: string
  title: string
}

const Prodcuts = ({ icon, title }: ProdcutsProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={`icons/${icon}`} width={48} alt={title} />
      <h5 className="typo-heading-sm">{title}</h5>
    </div>
  )
}

"use client"

import React from "react"
import Container from "./Container"
import Link from "next/link"
import Image from "next/image"
import { SocialIcon } from "react-social-icons"
import { useTranslations } from "next-intl"

const Footer = () => {
  const t = useTranslations("footer")
  const tc = useTranslations("common")

  return (
    <footer>
      <div className="min-h-24">
        <div className="absolute left-1/2 w-screen -translate-x-1/2 border-y border-border bg-white py-5">
          <Container>
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <ul className="flex flex-wrap justify-center">
                <li className="p-4">{tc("login")}</li>
                <li className="p-4">{t("contactUs")}</li>
                <li className="p-4">{t("careers")}</li>
                <li className="p-4">{t("stores")}</li>
              </ul>
              <div className="flex w-fit gap-2 rounded-sm border border-border">
                <Link href="" target="_blank" className="p-2">
                  {tc("consumer")}
                </Link>
                <Link href="" target="_blank" className="p-2">
                  {tc("business")}
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <p>{tc("downloadApp")}</p>
                <Link
                  href="https://apps.apple.com/ae/app/du/id521545878"
                  target="_blank"
                  className="p-2"
                >
                  <Image
                    src="/images/appstore.png"
                    alt="app store"
                    width={110}
                    height={32}
                  />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=duleaf.duapp.splash"
                  target="_blank"
                  className="p-2"
                >
                  <Image
                    src="/images/googleplay.png"
                    alt="google play"
                    width={110}
                    height={32}
                  />
                </Link>
                <Link
                  href="https://appgallery.huawei.com/app/C101122217?appId=C101122217&source=appshare&subsource=C101122217&locale=en_US&source=appshare&subsource=C101122217"
                  target="_blank"
                  className="p-2"
                >
                  <Image
                    src="/images/appgallery.png"
                    alt="app gallery"
                    width={110}
                    height={32}
                  />
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 py-8 sm:grid-cols-3 lg:grid-cols-6">
        <div className="flex flex-col gap-2">
          <h4 className="mb-2 font-bold">{t("buyPlans")}</h4>
          <Link
            href="https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=flexible&planType=all&view=splash"
            target="_blank"
          >
            {t("postpaidPlans")}
          </Link>
          <Link
            href="https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=flexible&planType=all&view=splash"
            target="_blank"
          >
            {t("dataOnlyPlans")}
          </Link>
          <Link
            href="https://shop.du.ae/en/personal/s-du-prepaid-flexi-plans"
            target="_blank"
          >
            {t("prepaidPlans")}
          </Link>
          <Link
            href="https://shop.du.ae/en/personal/prepaid/du-tourist-prepaid-plans"
            target="_blank"
          >
            {t("touristPlans")}
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="mb-2 font-bold">{t("internetTv")}</h4>
          <Link href="#" target="_blank">
            {t("duHomeInternetTv")}
          </Link>
          <Link href="#" target="_blank">
            {t("homeWirelessPlans")}
          </Link>
          <Link href="#" target="_blank">
            {t("moveNewHome")}
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="mb-2 font-bold">{t("enhancePlan")}</h4>
          <Link href="https://www.du.ae/myfavourites" target="_blank">
            {t("specialOffers")}
          </Link>
          <Link href="#" target="_blank">
            {t("dataPacks")}
          </Link>
          <Link
            href="https://www.du.ae/personal/mobile/roaming"
            target="_blank"
          >
            {t("roamingBundles")}
          </Link>
          <Link
            href="https://shop.du.ae/en/personal/s-du-postpaid-plans?contract=medium&minutes=national&view=change"
            target="_blank"
          >
            {t("switchToDu")}
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="mb-2 font-bold">{t("buyLatestDevices")}</h4>
          <Link
            href="https://shop.du.ae/en/personal/Mobile-phones/iphone-17-pro-max-p-COM-HS-APP-951?findInStock=true"
            target="_blank"
          >
            iPhone 17 Pro Max
          </Link>
          <Link
            href="https://shop.du.ae/en/personal/Mobile-phones/iphone-17-pro-p-COM-HS-APP-939?findInStock=true"
            target="_blank"
          >
            iPhone 17 Pro
          </Link>
          <Link
            href="https://shop.du.ae/en/personal/Mobile-phones/iphone-17-air-p-COM-HS-APP-962?findInStock=true"
            target="_blank"
          >
            iPhone Air
          </Link>
          <Link
            href="https://shop.du.ae/en/personal/Mobile-phones/iphone-17-p-COM-HS-APP-930?findInStock=true"
            target="_blank"
          >
            iPhone 17
          </Link>
          <Link
            href="https://shop.du.ae/en/personal/Mobile-phones/galaxy-s26-ultra-p-COM-HS-SAM-1088?findInStock=true"
            target="_blank"
          >
            Galaxy S26 Ultra
          </Link>
          <Link
            href="https://shop.du.ae/en/personal/Mobile-phones/galaxy-z-fold7-p-COM-HS-SAM-1038?findInStock=true"
            target="_blank"
          >
            Galaxy Z Fold7
          </Link>
          <Link
            href="https://shop.du.ae/en/personal/Mobile-phones/galaxy-z-flip7-p-COM-HS-SAM-1034?findInStock=true"
            target="_blank"
          >
            Galaxy Z Flip7
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="mb-2 font-bold">{t("myAccountServices")}</h4>
          <Link
            href="https://myaccount.du.ae/servlet/myaccount/en/home.html"
            target="_blank"
          >
            {t("billsPayment")}
          </Link>
          <Link
            href="https://myaccount.du.ae/webapp/en/quick-recharge"
            target="_blank"
          >
            {t("recharge")}
          </Link>
          <Link href="#" target="_blank">
            {t("idRenewal")}
          </Link>
          <Link
            href="https://myaccount.du.ae/webapp/en/quick-pay"
            target="_blank"
          >
            {tc("quickPay")}
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="mb-2 font-bold">{t("helpSupport")}</h4>
          <Link href="#" target="_blank">
            {t("contactUs")}
          </Link>
          <Link href="#" target="_blank">
            {t("support")}
          </Link>
          <Link href="#" target="_blank">
            {t("trackOrder")}
          </Link>
          <Link href="#" target="_blank">
            {t("authorizedPartners")}
          </Link>
          <br />
          <h4 className="mb-2 font-bold">{t("aboutUs")}</h4>
          <Link href="#" target="_blank">
            {t("whoWeAre")}
          </Link>
          <Link href="#" target="_blank">
            {t("investorRelations")}
          </Link>
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image src="/images/logo.png" alt="logo" width={50} height={50} />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <SocialIcon
                url="https://www.instagram.com/du/?hl=en"
                style={{ width: 32, height: 32 }}
              />
              <SocialIcon
                url="https://www.youtube.com/@theduchannel"
                style={{ width: 32, height: 32 }}
              />
              <SocialIcon
                url="https://www.facebook.com/du"
                style={{ width: 32, height: 32 }}
              />
              <SocialIcon
                url="https://x.com/dutweets"
                style={{ width: 32, height: 32 }}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center justify-between gap-3 text-grey-70 sm:flex-row">
          <ul className="typo-body-sm flex flex-wrap justify-center divide-x">
            <li>
              <Link href="/" className="p-2 pl-0">
                {t("siteMap")}
              </Link>
            </li>
            <li>
              <Link href="/" className="p-2">
                {t("termsConditions")}
              </Link>
            </li>
            <li>
              <Link href="/" className="p-2">
                {t("privacyPolicy")}
              </Link>
            </li>
            <li>
              <Link href="/" className="p-2">
                {t("codeOfConduct")}
              </Link>
            </li>
          </ul>
          <p className="typo-label">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

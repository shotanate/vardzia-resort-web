import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { IconLogoEng, IconLogoGeo } from "@/assets/icons";
import bookingLogo from "@/assets/images/booking-logo.svg";
import { useMemo } from "react";
import { SocialLinks } from "./navigation/social-links";

const footerLinks = [
  {
    labelKey: "common.rooms",
    to: "/rooms",
  },
  {
    labelKey: "common.bar_and_restaurant",
    to: "/bar-and-restaurant",
  },
  {
    labelKey: "common.services",
    to: "/services",
  },
  {
    labelKey: "common.contact",
    to: "/contact",
  },
  {
    labelKey: "about.MAIN.title",
    to: "/about-us",
  },
];

export const Footer = () => {
  const t = useTranslations();
  const locale = useLocale();

  const Logo = useMemo(
    () => (locale === "en" ? IconLogoEng : IconLogoGeo),
    [locale]
  );

  return (
    <footer className="w-full pt-8 pb-12">
      <div className="container flex flex-col md:flex-row items-start justify-between">
        <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto">
          {footerLinks.map((item) => (
            <Link
              key={item.labelKey}
              href={item.to}
              className="hover:text-primary-main transition"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>

        <div className="w-full md:w-auto flex flex-col items-center md:items-start my-8 md:my-0">
          <p className="mb-5">{t("common.contact")}</p>

          <div className="flex flex-col gap-3 items-center md:items-start">
            <p className="font-firago-regular font-medium">
              {t("common.address")}
            </p>
            <Link
              href="tel:+995 591 321 515"
              className="hover:text-primary-main transition duration-300 font-firago-regular font-medium"
            >
              +995 591 321 515
            </Link>

            <Link
              href="mailto:info@vardziaresort.com"
              className="hover:text-primary-main transition duration-300 font-firago-regular font-medium"
            >
              info@vardziaresort.com
            </Link>
          </div>
        </div>

        <div className="flex items-start justify-center md:justify-end gap-8 w-full md:w-auto">
          <Link
            href="https://www.booking.com/hotel/ge/vardziaresort.en-gb.html?activeTab=main"
            target="_blank"
            className="w-8 h-8"
          >
            <Image src={bookingLogo} alt="Booking logo" width={32} />
          </Link>

          <Link href="#">
            <Logo className="w-12 h-12 text-primary-main" />
          </Link>

          <SocialLinks
            isHomePage={false}
            iconClassName="h-8 w-8 md:text-primary-main"
          />
        </div>
      </div>

      <p className="container text-center md:text-right font-firago-regular mt-3">
        © 2025 Vardzia Resort
      </p>
    </footer>
  );
};

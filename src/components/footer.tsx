import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { IconLogoEng, IconLogoGeo } from "@/assets/icons";
import bookingLogo from "@/assets/images/booking-logo.svg";
import { useMemo } from "react";

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
    labelKey: "common.hotel",
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
      <div className="container flex items-start justify-between">
        <div className="flex flex-col items-start gap-3">
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

        <div>
          <p className="mb-5">{t("common.contact")}</p>

          <div className="flex flex-col gap-3">
            <p className="font-firago-regular font-medium">
              შევჩენკოს ქ. №1 0108 თბილისი, საქართველო
            </p>
            <Link
              href="tel:+995 322 19 20 21"
              className="hover:text-primary-main transition duration-300 font-firago-regular font-medium"
            >
              +995 322 19 20 21
            </Link>

            <Link
              href="mailto:requests@shotahotels.com"
              className="hover:text-primary-main transition duration-300 font-firago-regular font-medium"
            >
              requests@shotahotels.com
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-8">
          <Link
            href="https://www.booking.com/hotel/ge/vardziaresort.en-gb.html?activeTab=main"
            target="_blank"
          >
            <Image src={bookingLogo} alt="Booking logo" height={32} />
          </Link>

          <Link href="#">
            <Logo className="w-12 h-12 text-primary-main" />
          </Link>
        </div>
      </div>

      <p className="container text-right font-firago-regular mt-3">
        © 2019 Shota Rustaveli Botiqute Hotel
      </p>
    </footer>
  );
};

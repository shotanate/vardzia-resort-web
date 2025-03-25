"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import logo from "@/assets/images/vardzia-resort-logo.png";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

// Navigation links data
const navLinks = [
  { href: "/", labelKey: "common.rooms" },
  { href: "/", labelKey: "common.bar_and_restaurant" },
  { href: "/", labelKey: "common.services" },
];

const languages = ["en", "ka"];

export const Navigation = () => {
  const t = useTranslations();

  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn("w-full fixed top-0 transition z-10", {
        "bg-black": isScrolled,
      })}
    >
      <nav className="container flex items-center justify-between py-5">
        <Link href="/">
          <Image src={logo} alt="Vardzia resort logo" height={70} />
        </Link>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.labelKey}
              href={link.href}
              className="text-lg transition text-white uppercase"
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </div>

        <div className="flex gap-2">
          {languages.map((lang) => (
            <Link
              key={lang}
              href={pathname}
              locale={lang}
              className="text-lg transition text-white"
            >
              {t(`common.locales.${lang}`)}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

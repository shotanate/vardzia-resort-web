"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { IconFacebook, IconInstagram } from "@/assets/icons";
import logo from "@/assets/images/vardzia-resort-logo.png";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

// Navigation links data
const navLinks = [
  { href: "/rooms", labelKey: "common.rooms" },
  { href: "/bar-and-restaurant", labelKey: "common.bar_and_restaurant" },
  { href: "/services", labelKey: "common.services" },
];

const languages = ["en", "ka"];

export const Navigation = () => {
  const t = useTranslations();

  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(window.scrollY > 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn("w-full h-[110px] top-0 transition z-40", {
        "bg-black": isScrolled && isHomePage,
        fixed: isHomePage,
      })}
    >
      <div className="container flex items-center justify-between py-5">
        <Link href="/">
          <Image src={logo} alt="Vardzia resort logo" height={70} />
        </Link>

        <div className="flex items-center gap-12 group/menu">
          {navLinks.map((link) => (
            <div
              key={link.labelKey}
              className="flex flex-col items-center group group-hover/menu:opacity-50 hover:opacity-100 transition duration-300"
            >
              <Link
                href={link.href}
                className={cn("text-lg transition uppercase", {
                  "text-white": isHomePage,
                })}
              >
                {t(link.labelKey)}
              </Link>

              <div
                className={cn(
                  "w-1.5 h-1.5 rounded-full bg-primary-main invisible group-hover:visible",
                  {
                    visible: pathname.includes(link.href),
                  }
                )}
              ></div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 group items-center">
          {languages.map((lang) => (
            <Link
              key={lang}
              href={pathname}
              locale={lang}
              className={cn(
                "text-lg transition duration-300 group-hover:opacity-50 hover:opacity-100 leading-none mt-1",
                {
                  "text-white": isHomePage,
                }
              )}
            >
              {t(`common.locales.${lang}`)}
            </Link>
          ))}

          <Link href="/" target="_blank">
            <IconFacebook
              className={cn(
                "transition duration-300 group-hover:opacity-50 hover:opacity-100",
                {
                  "text-white": isHomePage,
                }
              )}
            />
          </Link>

          <Link href="/" target="_blank">
            <IconInstagram
              className={cn(
                "transition duration-300 group-hover:opacity-50 hover:opacity-100",
                {
                  "text-white": isHomePage,
                }
              )}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

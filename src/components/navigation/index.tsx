"use client";

import { useEffect, useMemo, useState } from "react";

import {
  IconFacebook,
  IconInstagram,
  IconLogoEng,
  IconLogoGeo,
} from "@/assets/icons";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { navLinks } from "./_utils";
import { ChangeLanguage } from "./change-language";
import { NavigationDrawer } from "./drawer";
import { NavLink } from "./nav-link";

export const Navigation = () => {
  const locale = useLocale();

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

  const Logo = useMemo(
    () => (locale === "en" ? IconLogoEng : IconLogoGeo),
    [locale]
  );

  return (
    <nav
      className={cn("w-full h-[110px] top-0 transition z-40", {
        "bg-black": isScrolled && isHomePage,
        fixed: isHomePage,
      })}
    >
      <div className="container flex items-center justify-between py-5">
        <NavigationDrawer />

        <Link href="/">
          <Logo
            className={cn("h-14 transition text-primary-main", {
              "text-white": isScrolled && isHomePage,
            })}
          />
        </Link>

        <div className="items-center gap-12 group/menu hidden md:flex mt-2.5">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </div>

        <div className="flex gap-2 group items-center">
          <div className="hidden gap-2 md:flex">
            <ChangeLanguage />
          </div>

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

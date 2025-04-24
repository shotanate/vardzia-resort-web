"use client";

import { useEffect, useMemo, useState } from "react";

import { IconLogoEng, IconLogoGeo } from "@/assets/icons";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { navLinks } from "./_utils";
import { ChangeLanguage } from "./change-language";
import { NavigationDrawer } from "./drawer";
import { NavLink } from "./nav-link";
import { SocialLinks } from "./social-links";

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
      className={cn("w-full h-[110px] top-0 transition z-40 delay-200", {
        "bg-white": isScrolled && isHomePage,
        fixed: isHomePage,
      })}
    >
      <div className="container flex items-center justify-between py-5">
        <NavigationDrawer isScrolled={isScrolled} />

        <Link href="/" className="md:w-[134px]">
          <Logo
            className={cn("h-14 w-14 transition text-primary-main delay-200", {
              "text-white": isHomePage && !isScrolled,
            })}
          />
        </Link>

        <div className="items-center gap-12 group/menu hidden md:flex mt-2.5">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              {...link}
              isScrolled={isScrolled}
              isHomePage={isHomePage}
            />
          ))}
        </div>

        <div className="flex gap-2 group items-center ml-5">
          <div className="hidden gap-2 md:flex items-center">
            <ChangeLanguage isScrolled={isScrolled} />
          </div>

          <SocialLinks isHomePage={isHomePage} isScrolled={isScrolled} />
        </div>
      </div>
    </nav>
  );
};

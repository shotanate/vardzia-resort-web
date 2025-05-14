"use client";

import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { navLinks } from "./_utils";
import { BurgerMenuButton } from "./burger-menu-button";
import { ChangeLanguage } from "./change-language";
import { NavLink } from "./nav-link";

type Props = {
  isScrolled: boolean;
};

export const NavigationDrawer = ({ isScrolled }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/home";

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block md:hidden z-[9999] overflow-hidden">
      <BurgerMenuButton
        isOpen={isOpen}
        onToggle={handleToggle}
        isHomePage={isHomePage}
        isScrolled={isScrolled}
      />

      <div
        className={cn(
          "fixed top-0 left-0 right-0 h-full bg-white shadow-lg transition-transform duration-700 ease-in-out flex flex-col items- justify-stretch",
          "transform",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container flex items-center justify-end gap-3 w-full h-[110px]">
          <ChangeLanguage />
        </div>
        <div className="p-4 flex-1 flex items-center justify-center">
          <nav className="space-y-4">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

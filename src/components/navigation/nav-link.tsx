"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Props = {
  labelKey: string;
  href: string;
  isScrolled?: boolean;
  isHomePage?: boolean;
};

export const NavLink = ({ labelKey, href, isScrolled, isHomePage }: Props) => {
  const t = useTranslations();

  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center group group-hover/menu:opacity-50 hover:opacity-100">
      <Link
        href={href}
        className={cn(
          "text-md transition uppercase text-center delay-200 text-primary-main font-bold",
          {
            "text-white": isHomePage && !isScrolled,
          }
        )}
      >
        {t(labelKey)}
      </Link>

      <div
        className={cn(
          "w-1.5 h-1.5 rounded-full bg-primary-main invisible group-hover:visible",
          {
            visible: pathname.includes(href),
          }
        )}
      ></div>
    </div>
  );
};

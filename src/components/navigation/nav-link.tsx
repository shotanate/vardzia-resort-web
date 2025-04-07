"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

type Props = {
  labelKey: string;
  href: string;
};

export const NavLink = ({ labelKey, href }: Props) => {
  const t = useTranslations();

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="flex flex-col items-center group group-hover/menu:opacity-50 hover:opacity-100 transition duration-300">
      <Link
        href={href}
        className={cn("text-lg transition uppercase", {
          "text-white": isHomePage,
        })}
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

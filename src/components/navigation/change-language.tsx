"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { languages } from "./_utils";

type Props = {
  isScrolled?: boolean;
};

export const ChangeLanguage = ({ isScrolled }: Props) => {
  const t = useTranslations();
  const pathname = usePathname();

  return languages.map((lang) => (
    <Link
      key={lang}
      href={pathname}
      locale={lang}
      className={cn(
        "text-md transition delay-200 group-hover:opacity-50 hover:opacity-100 leading-none mt-1 text-primary-main font-bold",
        {
          "md:text-white": !isScrolled && pathname === "/home",
          "mb-1": lang === "ka",
        }
      )}
    >
      {t(`common.locales.${lang}`)}
    </Link>
  ));
};

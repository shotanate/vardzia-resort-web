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
        "text-lg transition delay-200 group-hover:opacity-50 hover:opacity-100 leading-none mt-1 text-primary-main",
        {
          "text-white": !isScrolled && pathname === "/",
        }
      )}
    >
      {t(`common.locales.${lang}`)}
    </Link>
  ));
};

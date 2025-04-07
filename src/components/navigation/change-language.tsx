"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { languages } from "./_utils";

export const ChangeLanguage = () => {
  const t = useTranslations();
  const pathname = usePathname();

  return languages.map((lang) => (
    <Link
      key={lang}
      href={pathname}
      locale={lang}
      className={cn(
        "text-lg transition duration-300 group-hover:opacity-50 hover:opacity-100 leading-none mt-1",
        {
          "text-white": pathname === "/",
        }
      )}
    >
      {t(`common.locales.${lang}`)}
    </Link>
  ));
};

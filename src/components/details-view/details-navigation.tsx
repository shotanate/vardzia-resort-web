"use client";

import { IconArrow } from "@/assets/icons";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const DetailsNavigationButton = ({
  aliasText,
  to,
  dir = "left",
}: {
  aliasText: string;
  to: string;
  dir?: "left" | "right";
}) => {
  return (
    <Link
      href={to}
      className={cn("flex items-center gap-3 group cursor-pointer", {
        "flex-row-reverse": dir === "right",
      })}
    >
      <IconArrow direction={dir} className="group-hover:text-primary-main" />
      <p className="text-lg uppercase font-archyedt-thin font-bold mt-0.5 group-hover:text-primary-main">
        {aliasText}
      </p>
    </Link>
  );
};

type Props = {
  aliases: string[];
  currentAlias: string;
};

export const DetailsNavigation = ({ aliases, currentAlias }: Props) => {
  const t = useTranslations();

  const pathname = usePathname();
  const basePathname = pathname.split("/")[1];

  const currentAliasIndex = aliases.indexOf(currentAlias);

  const prevAlias = aliases[currentAliasIndex - 1];
  const nextAlias = aliases[currentAliasIndex + 1];

  return (
    <div
      className={cn("flex items-center justify-between w-full", {
        "justify-end": !prevAlias,
        "justify-start": !nextAlias,
      })}
    >
      {prevAlias && (
        <DetailsNavigationButton
          aliasText={t(`room_types.${prevAlias}.title`)}
          to={`/${basePathname}/${prevAlias}`}
        />
      )}

      {nextAlias && (
        <DetailsNavigationButton
          aliasText={t(`room_types.${nextAlias}.title`)}
          to={`/${basePathname}/${nextAlias}`}
          dir="right"
        />
      )}
    </div>
  );
};

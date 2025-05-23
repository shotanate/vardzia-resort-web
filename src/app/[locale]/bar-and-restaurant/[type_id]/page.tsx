"use server";

import { IconBarMenu, IconMenu } from "@/assets/icons";
import { DetailsView } from "@/components/details-view";
import { FileLink } from "@/components/details-view/file-link";
import { BarAndRestaurantTypes, braAndRestaurantTypes } from "@/utils/data";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const Menus = async () => {
  const t = await getTranslations();

  return (
    <>
      <FileLink title={t("common.menu")} file="menu.pdf" Icon={IconMenu} />
      <FileLink
        title={t("common.meskhian_menu")}
        file="meskhian-menu.jpg"
        Icon={IconMenu}
      />
      <FileLink
        title={t("common.bar_menu")}
        file="bar-menu.pdf"
        Icon={IconBarMenu}
      />
    </>
  );
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ type_id: string }>;
}): Promise<Metadata> => {
  const t = await getTranslations();
  const { type_id } = await params;

  return {
    title: t(`bar_restaurant.${type_id}.title`),
    description: t("metadata.bar_and_restaurant"),
  };
};

const BarAndRestaurantDetails = async ({
  params,
}: {
  params: Promise<{ type_id: string }>;
}) => {
  const t = await getTranslations();
  const { type_id } = await params;

  if (!type_id) {
    return null;
  }

  const imagesLen = braAndRestaurantTypes[type_id as BarAndRestaurantTypes];

  let additionalContent;

  switch (type_id as BarAndRestaurantTypes) {
    case "BAR_RESTAURANT":
      additionalContent = (
        <div className="flex flex-col gap-3">
          <Menus />
          <FileLink
            title={t("common.wine_menu")}
            file="wine-menu.pdf"
            Icon={IconBarMenu}
          />
        </div>
      );
      break;
    case "DINNING_ROOM":
      additionalContent = (
        <div className="flex flex-col gap-3">
          <Menus />
        </div>
      );
      break;
  }

  return (
    <DetailsView
      imagesLen={imagesLen}
      allAliases={Object.keys(braAndRestaurantTypes)}
      typeAlias={type_id}
      translationKey="bar_restaurant"
      folderName="restaurant"
      disableButton
      additionalContent={additionalContent}
    />
  );
};

export default BarAndRestaurantDetails;

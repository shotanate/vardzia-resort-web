import { DetailsSection } from "@/components/sections/details-section";
import { braAndRestaurantTypes } from "@/utils/data";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("common.bar_and_restaurant"),
    description: t("metadata.bar_and_restaurant"),
  };
};

const BarAndRestaurantPage = async () => {
  const t = await getTranslations();

  return (
    <div className="w-screen flex flex-wrap md:h-[calc(100vh-110px)]">
      {Object.keys(braAndRestaurantTypes).map(async (itemType) => {
        return (
          <DetailsSection
            key={itemType}
            image={`/images/restaurant/${itemType}/cover.jpg`}
            title={t(`bar_restaurant.${itemType}.title`)}
            to={`bar-and-restaurant/${itemType}`}
            className="h-1/2 min-w-1/2 border"
          />
        );
      })}
    </div>
  );
};

export default BarAndRestaurantPage;

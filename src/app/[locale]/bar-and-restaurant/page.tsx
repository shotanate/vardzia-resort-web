import { DetailsSection } from "@/components/sections/details-section";
import { braAndRestaurantTypes } from "@/utils/data";
import { useTranslations } from "next-intl";

const BarAndRestaurantPage = () => {
  const t = useTranslations();

  return (
    <div className="bg-gray-300 w-screen flex flex-wrap h-[calc(100vh-110px)]">
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

import { DetailsSection } from "./details-section";
import { SectionWrapper } from "./section-wrapper";

import { getTranslations } from "next-intl/server";
import { CarouselSection } from "./carousel-section";

export const Sections = async () => {
  const t = await getTranslations();

  return (
    <div className="border h-full">
      <CarouselSection />

      <SectionWrapper
        image="/images/rooms/TWIN/cover.jpg"
        to="/rooms"
        title={t("common.rooms")}
        description={t("home.rooms_description")}
      />

      <SectionWrapper
        image="/images/restaurant/DINNING_ROOM/cover.jpg"
        to="/bar-and-restaurant"
        title={t("common.bar_and_restaurant")}
        description={t("home.bar_and_restaurant_description")}
      />

      <div className="flex flex-col md:flex-row justify-center w-screen md:h-screen">
        <DetailsSection
          image="/images/services/CONFERENCE_HALLS/cover.jpg"
          title={t("services.CONFERENCE_HALLS.title")}
          to="/services/CONFERENCE_HALLS"
        />
        <DetailsSection
          image="/images/services/WINERY/cover.jpg"
          title={t("services.WINERY.title")}
          to="/services/WINERY"
        />
      </div>
    </div>
  );
};

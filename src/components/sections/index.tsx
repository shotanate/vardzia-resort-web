import { DetailsSection } from "./details-section";
import { SectionWrapper } from "./section-wrapper";

import barAndRestaurant from "@/assets/images/bar-and-restaurant.jpg";
import conferenceRoom from "@/assets/images/conference-room.jpg";
import cover from "@/assets/images/hotel.jpg";
import rooms from "@/assets/images/rooms.jpg";
import wine from "@/assets/images/wine.jpg";
import { getTranslations } from "next-intl/server";

export const Sections = async () => {
  const t = await getTranslations();

  return (
    <>
      <SectionWrapper
        image={cover}
        to="/about-us"
        title={t("about.MAIN.title")}
        description={t("home.about")}
      />

      <SectionWrapper
        image={rooms}
        to="/rooms"
        title={t("common.rooms")}
        description={t("home.rooms_description")}
      />

      <SectionWrapper
        image={barAndRestaurant}
        to="/bar-and-restaurant"
        title={t("common.bar_and_restaurant")}
        description={t("home.bar_and_restaurant_description")}
      />

      <div className="flex flex-col md:flex-row justify-center w-screen h-screen">
        <DetailsSection
          image={conferenceRoom.src}
          title={t("services.CONFERENCE_HALLS.title")}
          to="/services/CONFERENCE_HALLS"
        />
        <DetailsSection
          image={wine.src}
          title={t("services.WINERY.title")}
          to="/services/WINERY"
        />
      </div>
    </>
  );
};

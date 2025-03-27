"use client";

import { DetailsSection } from "@/components/sections/details-section";
import { room_types } from "@/utils/data";
import { useTranslations } from "next-intl";

const RoomsPage = () => {
  const t = useTranslations();

  return (
    <div className="bg-gray-300 w-screen flex flex-wrap">
      {Object.keys(room_types).map(async (room_type) => {
        return (
          <DetailsSection
            key={room_type}
            image={`/images/rooms/${room_type}/cover.jpg`}
            title={t(`room_types.${room_type}.title`)}
            to={`rooms/${room_type}`}
            className="h-[450px] min-w-1/3 border"
          />
        );
      })}
    </div>
  );
};

export default RoomsPage;

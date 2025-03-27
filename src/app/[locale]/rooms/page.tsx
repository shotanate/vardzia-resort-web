"use client";

import { DetailsSection } from "@/components/sections/details-section";
import { roomTypes } from "@/utils/data";
import { useTranslations } from "next-intl";

const RoomsPage = () => {
  const t = useTranslations();

  return (
    <div className="bg-gray-300 w-screen flex flex-wrap h-[calc(100vh-110px)]">
      {Object.keys(roomTypes).map(async (room_type) => {
        return (
          <DetailsSection
            key={room_type}
            image={`/images/rooms/${room_type}/cover.jpg`}
            title={t(`room_types.${room_type}.title`)}
            to={`rooms/${room_type}`}
            className="h-1/2 min-w-1/3 border"
          />
        );
      })}
    </div>
  );
};

export default RoomsPage;

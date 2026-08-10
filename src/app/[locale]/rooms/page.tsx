import { DetailsSection } from "@/components/sections/details-section";
import { roomTypes } from "@/utils/data";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("common.rooms"),
    description: t("metadata.rooms"),
  };
};

const RoomsPage = async () => {
  const t = await getTranslations();

  const roomTypeKeys = Object.keys(roomTypes)
  const firstPart = roomTypeKeys.slice(0, 3)
  const secondPart = roomTypeKeys.slice(3)

  return (
    <div className="w-screen flex flex-wrap md:h-[calc(100vh-110px)]">
      {firstPart.map(async (room_type) => {
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
      {secondPart.map(async (room_type) => {
        return (
          <DetailsSection
            key={room_type}
            image={`/images/rooms/${room_type}/cover.jpg`}
            title={t(`room_types.${room_type}.title`)}
            to={`rooms/${room_type}`}
            className="h-1/2 min-w-1/4 border"
          />
        );
      })}
    </div>
  );
};

export default RoomsPage;

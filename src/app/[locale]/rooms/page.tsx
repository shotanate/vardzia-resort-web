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

  return (
    <div className="w-screen flex flex-wrap md:h-[calc(100vh-110px)]">
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

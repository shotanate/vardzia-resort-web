import { DetailsView } from "@/components/details-view";
import { roomTypes } from "@/utils/data";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ room_type: string }>;
}): Promise<Metadata> => {
  const t = await getTranslations();
  const { room_type } = await params;

  return {
    title: t(`room_types.${room_type}.title`),
    description: t("metadata.rooms"),
  };
};

const RoomDetails = async ({
  params,
}: {
  params: Promise<{ room_type: string }>;
}) => {
  const { room_type } = await params;

  if (!room_type) {
    return null;
  }

  const imagesLen = roomTypes[room_type as keyof typeof roomTypes];

  return (
    <DetailsView
      imagesLen={imagesLen}
      allAliases={Object.keys(roomTypes)}
      typeAlias={room_type}
      translationKey="room_types"
      folderName="rooms"
    />
  );
};

export default RoomDetails;

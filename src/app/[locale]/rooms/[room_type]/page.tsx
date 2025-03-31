import { DetailsView } from "@/components/details-view";
import { roomTypes } from "@/utils/data";

const RoomDetails = async ({ params }: { params: { room_type: string } }) => {
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

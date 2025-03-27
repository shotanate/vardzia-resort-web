import { DetailsView } from "@/components/details-view";
import { room_types } from "@/utils/data";

const RoomDetails = async ({ params }: { params: { room_type: string } }) => {
  const { room_type } = await params;

  if (!room_type) {
    return null;
  }

  const imagesLen = room_types[room_type as keyof typeof room_types];

  return (
    <DetailsView
      imagesLen={imagesLen}
      allAliases={Object.keys(room_types)}
      typeAlias={room_type}
      translationKey="room_types"
    />
  );
};

export default RoomDetails;

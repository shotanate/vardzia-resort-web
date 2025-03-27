import { DetailsView } from "@/components/details-view";
import { braAndRestaurantTypes } from "@/utils/data";

const BarAndRestaurantDetails = async ({
  params,
}: {
  params: { type_id: string };
}) => {
  const { type_id } = await params;

  if (!type_id) {
    return null;
  }

  const imagesLen =
    braAndRestaurantTypes[type_id as keyof typeof braAndRestaurantTypes];

  return (
    <DetailsView
      imagesLen={imagesLen}
      allAliases={Object.keys(braAndRestaurantTypes)}
      typeAlias={type_id}
      translationKey="bar_restaurant"
      folderName="restaurant"
    />
  );
};

export default BarAndRestaurantDetails;

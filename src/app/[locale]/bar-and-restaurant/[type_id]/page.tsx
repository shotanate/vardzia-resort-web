import { IconBarMenu, IconMenu } from "@/assets/icons";
import { DetailsView } from "@/components/details-view";
import { FileLink } from "@/components/details-view/file-link";
import { BarAndRestaurantTypes, braAndRestaurantTypes } from "@/utils/data";

const BarAndRestaurantDetails = async ({
  params,
}: {
  params: { type_id: string };
}) => {
  const { type_id } = await params;

  if (!type_id) {
    return null;
  }

  const imagesLen = braAndRestaurantTypes[type_id as BarAndRestaurantTypes];

  let additionalContent;

  switch (type_id as BarAndRestaurantTypes) {
    case "BAR_RESTAURANT":
      additionalContent = (
        <div className="flex flex-col gap-3">
          <FileLink title="Menu" file="menu.pdf" Icon={IconMenu} />
          <FileLink title="Bar Menu" file="bar-menu.pdf" Icon={IconBarMenu} />
        </div>
      );
      break;
    case "DINNING_ROOM":
      additionalContent = (
        <FileLink title="Menu" file="meskhian-menu.jpg" Icon={IconMenu} />
      );
      break;
  }

  return (
    <DetailsView
      imagesLen={imagesLen}
      allAliases={Object.keys(braAndRestaurantTypes)}
      typeAlias={type_id}
      translationKey="bar_restaurant"
      folderName="restaurant"
      disableButton
      additionalContent={additionalContent}
    />
  );
};

export default BarAndRestaurantDetails;

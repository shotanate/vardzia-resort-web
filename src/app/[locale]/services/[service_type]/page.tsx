import { IconBarMenu } from "@/assets/icons";
import { DetailsView } from "@/components/details-view";
import { FileLink } from "@/components/details-view/file-link";
import { ServiceTypes, serviceTypes } from "@/utils/data";

const ServiceDetails = async ({
  params,
}: {
  params: { service_type: string };
}) => {
  const { service_type } = await params;

  if (!service_type) {
    return null;
  }

  const imagesLen = serviceTypes[service_type as ServiceTypes];

  let additionalContent;

  switch (service_type as ServiceTypes) {
    case "WINERY":
      additionalContent = (
        <FileLink title="Wine Menu" file="wine-menu.pdf" Icon={IconBarMenu} />
      );
      break;
  }

  return (
    <DetailsView
      imagesLen={imagesLen}
      allAliases={Object.keys(serviceTypes)}
      typeAlias={service_type}
      translationKey="services"
      folderName="services"
      disableButton
      additionalContent={additionalContent}
    />
  );
};

export default ServiceDetails;

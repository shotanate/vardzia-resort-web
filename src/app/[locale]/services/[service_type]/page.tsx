import { DetailsView } from "@/components/details-view";
import { serviceTypes } from "@/utils/data";

const ServiceDetails = async ({
  params,
}: {
  params: { service_type: string };
}) => {
  const { service_type } = await params;

  if (!service_type) {
    return null;
  }

  const imagesLen = serviceTypes[service_type as keyof typeof serviceTypes];

  return (
    <DetailsView
      imagesLen={imagesLen}
      allAliases={Object.keys(serviceTypes)}
      typeAlias={service_type}
      translationKey="services"
      folderName="services"
    />
  );
};

export default ServiceDetails;

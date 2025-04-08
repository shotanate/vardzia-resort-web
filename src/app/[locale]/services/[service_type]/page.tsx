import { IconBarMenu, IconMenu } from "@/assets/icons";
import { DetailsView } from "@/components/details-view";
import { FileLink } from "@/components/details-view/file-link";
import { ServiceTypes, serviceTypes } from "@/utils/data";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({
  params,
}: {
  params: { service_type: string };
}): Promise<Metadata> => {
  const t = await getTranslations();
  const { service_type } = params;

  return {
    title: t(`services.${service_type}.title`),
    description: t("metadata.services"),
  };
};

const ServiceDetails = async ({
  params,
}: {
  params: { service_type: string };
}) => {
  const t = await getTranslations();

  const { service_type } = await params;

  if (!service_type) {
    return null;
  }

  const imagesLen = serviceTypes[service_type as ServiceTypes];

  let additionalContent;

  switch (service_type as ServiceTypes) {
    case "WINERY":
      additionalContent = (
        <div className="flex flex-col gap-3">
          <FileLink
            title={t("common.wine_menu")}
            file="wine-menu.pdf"
            Icon={IconBarMenu}
          />
          <FileLink
            title={t("common.meskhian_menu")}
            file="meskhian-menu.jpg"
            Icon={IconMenu}
          />
        </div>
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

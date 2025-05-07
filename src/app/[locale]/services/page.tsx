import { DetailsSection } from "@/components/sections/details-section";
import { serviceTypes } from "@/utils/data";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("common.services"),
    description: t("metadata.services"),
  };
};

const ServicesPage = async () => {
  const t = await getTranslations();

  return (
    <div className="w-screen flex flex-wrap md:h-[calc(100vh-110px)]">
      {Object.keys(serviceTypes).map(async (serviceType) => {
        return (
          <DetailsSection
            key={serviceType}
            image={`/images/services/${serviceType}/cover.jpg`}
            title={t(`services.${serviceType}.title`)}
            to={`services/${serviceType}`}
            className="h-1/2 min-w-1/3 border"
          />
        );
      })}
    </div>
  );
};

export default ServicesPage;

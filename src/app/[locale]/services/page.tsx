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

  const serviceKeys = Object.keys(serviceTypes);
  const firstPart = serviceKeys.slice(0, Math.ceil(serviceKeys.length / 2));
  const secondPart = serviceKeys.slice(Math.ceil(serviceKeys.length / 2));

  return (
    <div className="w-screen flex flex-wrap md:h-[calc(100vh-110px)]">
      {firstPart.map(async (serviceType) => {
        return (
          <DetailsSection
            key={serviceType}
            image={`/images/services/${serviceType}/cover.jpg`}
            title={t(`services.${serviceType}.title`)}
            to={`services/${serviceType}`}
            className="h-1/2 min-w-1/5 border"
          />
        );
      })}
      {secondPart.map(async (serviceType) => {
        return (
          <DetailsSection
            key={serviceType}
            image={`/images/services/${serviceType}/cover.jpg`}
            title={t(`services.${serviceType}.title`)}
            to={`services/${serviceType}`}
            className="h-1/2 min-w-1/4 border"
          />
        );
      })}
    </div>
  );
};

export default ServicesPage;

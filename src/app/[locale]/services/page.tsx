"use client";

import { DetailsSection } from "@/components/sections/details-section";
import { serviceTypes } from "@/utils/data";
import { useTranslations } from "next-intl";

const ServicesPage = () => {
  const t = useTranslations();

  return (
    <div className="bg-gray-300 w-screen flex flex-wrap h-[calc(100vh-110px)]">
      {Object.keys(serviceTypes).map(async (serviceType) => {
        return (
          <DetailsSection
            key={serviceType}
            image={`/images/services/${serviceType}/cover.jpg`}
            title={t(`services.${serviceType}.title`)}
            to={`services/${serviceType}`}
            className="h-1/2 min-w-1/2 border"
          />
        );
      })}
    </div>
  );
};

export default ServicesPage;

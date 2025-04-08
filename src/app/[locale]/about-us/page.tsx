import { DetailsView } from "@/components/details-view";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("common.about_us"),
    description: t("metadata.about_us"),
  };
};

const AboutUsPage = () => {
  return (
    <DetailsView
      imagesLen={0}
      allAliases={[]}
      typeAlias="MAIN"
      translationKey="about"
      folderName="about"
      disableButton
    />
  );
};

export default AboutUsPage;

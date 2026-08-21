import { DetailsView } from "@/components/details-view";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("family_history.MAIN.title"),
    description: t("metadata.family_history"),
  };
};

const FamilyHistoryPage = () => {
  return (
    <DetailsView
      imagesLen={5}
      allAliases={[]}
      typeAlias="MAIN"
      translationKey="family_history"
      folderName="family_history"
      disableButton
    />
  );
};

export default FamilyHistoryPage;

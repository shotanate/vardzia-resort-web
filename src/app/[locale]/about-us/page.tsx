import { DetailsView } from "@/components/details-view";

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

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { GalleryCarousel } from "../gallery-carousel/index";
import { Button } from "../ui/button";
import { DetailsNavigation } from "./details-navigation";

type Props = {
  allAliases: string[];
  typeAlias: string;
  imagesLen: number;
  translationKey: string;
  folderName: string;
  disableButton?: boolean;
};

export const DetailsView = ({
  allAliases,
  typeAlias,
  imagesLen,
  translationKey,
  folderName,
  disableButton,
}: Props) => {
  const t = useTranslations();

  return (
    <div className="flex bg-white border-0">
      <div className="w-1/2">
        <GalleryCarousel
          folderName={folderName}
          imagesLen={imagesLen}
          typeAlias={typeAlias}
        />
      </div>
      <div className="w-1/2 flex-1 flex flex-col items-center p-11">
        <div className="flex flex-col items-center justify-center gap-5 flex-1 px-16">
          <h2 className="text-4xl">
            {t(`${translationKey}.${typeAlias}.title`)}
          </h2>
          <div className="w-8 h-[1px] bg-black"></div>

          <pre className="font-firago-regular mt-5 mb-8 text-wrap">
            {t(`${translationKey}.${typeAlias}.description`)}
          </pre>

          {!disableButton && (
            <Link href="/" target="_blank">
              <Button variant="ghost" size="lg" className="text-2xl">
                {t("common.book_now")}
              </Button>
            </Link>
          )}
        </div>

        <DetailsNavigation
          aliases={allAliases}
          currentAlias={typeAlias}
          translationKey={translationKey}
        />
      </div>
    </div>
  );
};

import { Link } from "@/i18n/navigation";
import { RoomType, roomTypeIds } from "@/utils/data";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { GalleryCarousel } from "../gallery-carousel/index";
import { Button } from "../ui/button";
import { DetailsNavigation } from "./details-navigation";

const BOOKING_ROOMS_BASE_URL = process.env.BOOKING_ROOMS_BASE_URL;

type Props = {
  allAliases: string[];
  typeAlias: string;
  imagesLen: number;
  translationKey: string;
  folderName: string;
  disableButton?: boolean;
  additionalContent?: ReactNode;
};

export const DetailsView = ({
  allAliases,
  typeAlias,
  imagesLen,
  translationKey,
  folderName,
  disableButton,
  additionalContent,
}: Props) => {
  const t = useTranslations();

  const currentRoomId = roomTypeIds[typeAlias as RoomType];

  return (
    <div className="flex md:flex-row flex-col-reverse bg-white border-0 md:h-[calc(100vh-110px)]">
      <div className="md:w-1/2 w-full">
        <GalleryCarousel
          folderName={folderName}
          imagesLen={imagesLen}
          typeAlias={typeAlias}
        />
      </div>
      <div className="md:w-1/2 w-full flex-1 flex flex-col items-center md:p-11 p-5 md:overflow-y-auto">
        <div className="flex flex-col items-center justify-center gap-5 flex-1 mb-5">
          <h2 className="text-4xl">
            {t(`${translationKey}.${typeAlias}.title`)}
          </h2>
          <div className="w-8 h-[1px] bg-black"></div>

          <pre className="font-firago-regular mt-5 mb-8 text-wrap w-full">
            {t(`${translationKey}.${typeAlias}.description`)}
          </pre>

          {!disableButton && (
            <Link
              href={`${BOOKING_ROOMS_BASE_URL}#${currentRoomId}`}
              target="_blank"
            >
              <Button variant="ghost" size="lg" className="text-2xl">
                {t("common.book_now")}
              </Button>
            </Link>
          )}
          {additionalContent && (
            <div className="w-full mt-5">{additionalContent}</div>
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

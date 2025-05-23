import { IconCalendar } from "@/assets/icons";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export const BookNowButton = async () => {
  const t = await getTranslations();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href="/rooms" className="fixed bottom-8 right-5 z-50">
            <Button className="w-14 h-14 font-black bg-primary-main hover:bg-primary-main/90 text-xs flex-col">
              <IconCalendar className="size-5" />
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("common.book_now")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

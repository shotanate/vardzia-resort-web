import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  to: string;
  title: string;
  description: string;
};

export const SectionWrapper = ({ image, to, title, description }: Props) => {
  const t = useTranslations();

  return (
    <Link href={to}>
      <div className="w-screen h-screen flex flex-col items-center justify-center group relative shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
        <Image src={image} alt="Cover" fill className="w-screen h-screen" />

        <div className="flex flex-col gap-3 items-center z-1">
          <h2 className="text-3xl text-white">{title}</h2>
          <div className="w-6 h-[1px] bg-white"></div>
          <p className="text-white text-center max-w-1/2 font-firago-regular">
            {description}
          </p>
        </div>

        <p
          className="text-xl text-white z-1 absolute bottom-10 translate-y-full opacity-0
         group-hover:translate-y-0 group-hover:opacity-100
         transition-all duration-500 ease-out hover:text-primary-main uppercase"
        >
          {t("common.more")}
        </p>
      </div>
    </Link>
  );
};

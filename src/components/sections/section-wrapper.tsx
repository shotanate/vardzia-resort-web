import { noto_serif_jp } from "@/assets/fonts";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Props = {
  image: string;
  to: string;
  title: string;
  description: string;
};

export const SectionWrapper = ({ image, to, title, description }: Props) => {
  const t = useTranslations();

  return (
    <Link
      href={to}
      className="w-screen h-screen flex flex-col items-center justify-center group relative details-section"
    >
      <Image
        src={image}
        alt="Cover"
        fill
        className="w-screen h-screen object-cover object-center"
      />

      <div className="flex flex-col gap-3 items-center z-30">
        <h2 className="md:text-3xl text-2xl text-white font-bold">{title}</h2>
        <div className="w-6 h-[1px] bg-white"></div>
        <pre
          className={`md:text-xl text-md text-white text-center md:max-w-1/2 max-w-full md:px-0 px-8 text-wrap ${noto_serif_jp.className}`}
        >
          {description}
        </pre>
      </div>

      <p
        className="text-md font-bold text-white z-30 absolute bottom-10 translate-y-full opacity-0
         group-hover:translate-y-0 group-hover:opacity-100
         transition-all duration-500 ease-out hover:text-primary-main uppercase"
      >
        {t("common.more")}
      </p>
    </Link>
  );
};

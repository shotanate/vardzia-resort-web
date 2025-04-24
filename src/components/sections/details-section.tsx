import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Props = {
  image: string;
  to: string;
  title: string;
  className?: string;
};

export const DetailsSection = ({ image, to, title, className }: Props) => {
  const t = useTranslations();

  return (
    <Link
      href={to}
      className={cn("md:flex-1 flex-auto h-full w-full", className)}
    >
      <div className="w-full md:h-full h-[600px] relative flex flex-col items-center justify-center group overflow-hidden details-section cursor-pointer p-5">
        <Image
          src={image}
          alt="title"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          priority={false}
        />

        <div className="z-30 flex flex-col items-center justify-center gap-5">
          <h2 className="text-3xl text-white text-center">{title}</h2>
          <div className="w-6 h-[1px] bg-white"></div>
        </div>

        <p
          className="text-xl text-white z-30 absolute bottom-10 translate-y-full opacity-0
         group-hover:translate-y-0 group-hover:opacity-100
         transition-all duration-150 ease-out hover:text-primary-main uppercase"
        >
          {t("common.more")}
        </p>
      </div>
    </Link>
  );
};

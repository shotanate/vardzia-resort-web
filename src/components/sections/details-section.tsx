import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  to: string;
  title: string;
};

export const DetailsSection = ({ image, to, title }: Props) => {
  return (
    <Link href={to} className="flex-1 h-full">
      <div className="w-full h-full relative flex flex-col items-center justify-center group overflow-hidden">
        <Image
          src={image}
          alt="title"
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />

        <div className="z-1 flex flex-col items-center justify-center gap-5">
          <h2 className="text-3xl text-white">{title}</h2>
          <div className="w-6 h-[1px] bg-white"></div>
        </div>

        <p
          className="text-xl text-white z-1 absolute bottom-10 translate-y-full opacity-0
         group-hover:translate-y-0 group-hover:opacity-100
         transition-all duration-500 ease-out"
        >
          მეტი
        </p>
      </div>
    </Link>
  );
};

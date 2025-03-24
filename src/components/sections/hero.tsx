import cover from "@/assets/images/hotel.jpg";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <Link href="/rooms">
      <div className="w-screen h-screen border flex flex-col items-center justify-center group relative">
        <Image
          src={cover}
          alt="Cover"
          fill
          className="w-screen h-screen opacity-90"
        />

        <div className="flex flex-col gap-3 items-center">
          <p className="text-3xl text-white z-1">სასტუმრო</p>
          <div className="w-8 border border-white"></div>
          <p className="text-white text-center z-1 max-w-1/2 font-firago-regular">
            Shota Rustaveli Boutique Hotel ორიგინალური სტილითა და კონცეფციით
            გამორჩეული სასტუმროა. თანამედროვე, სადა და დახვეწილი დიზაინი
            თავიდანვე მიიქცევს თქვენს ყურადღებას.
          </p>
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

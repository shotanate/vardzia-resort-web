import { noto_serif_jp } from "@/assets/fonts";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Carousel } from "../gallery-carousel/carousel";

export const CarouselSection = () => {
  const t = useTranslations();
  const galleryImages = ["cover", ...Array(14).keys()];

  return (
    <Link
      href="/about-us"
      className="w-screen h-screen details-section relative flex flex-col items-center justify-center group"
    >
      <div className="w-screen h-screen">
        <Carousel
          options={{
            infinite: true,
            Autoplay: {
              autoStart: true,
              showProgress: false,
              timeout: 3000,
              pauseOnHover: false,
            },
            Dots: false,
            Navigation: false,
          }}
        >
          {galleryImages.map((name) => {
            return (
              <div key={name} className="f-carousel__slide w-full h-full">
                <Image
                  src={`/images/about/MAIN/${name}.jpg`}
                  alt="Carousel item"
                  fill
                  className="w-full h-full object-center object-cover"
                />
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="flex flex-col gap-3 items-center z-30 absolute">
        <h2 className="md:text-3xl text-2xl text-white font-bold">
          {t("about.MAIN.title")}
        </h2>
        <div className="w-6 h-[1px] bg-white"></div>
        <pre
          className={`md:text-xl text-md text-white text-center md:max-w-1/2 max-w-full md:px-0 px-8 text-wrap ${noto_serif_jp.className}`}
        >
          {t("home.about")}
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

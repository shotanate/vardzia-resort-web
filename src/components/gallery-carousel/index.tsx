import Image from "next/image";
import { Carousel } from "./carousel";
import { Gallery } from "./gallery";

type Props = {
  folderName: string;
  imagesLen: number;
  typeAlias: string;
};

export const GalleryCarousel = ({
  folderName,
  imagesLen,
  typeAlias,
}: Props) => {
  const galleryImages = ["cover", ...Array(imagesLen).keys()];

  return (
    <div className="h-[calc(100vh-110px)]">
      <Gallery
        options={{
          Carousel: {
            infinite: true,
            Autoplay: true,
          },
        }}
      >
        <Carousel
          options={{
            infinite: true,
            Autoplay: {
              autoStart: true,
            },
            Navigation: false,
          }}
        >
          {galleryImages.map((name) => {
            return (
              <div
                key={name}
                className="f-carousel__slide border h-full w-full"
                data-fancybox="gallery"
                data-src={`/images/${folderName}/${typeAlias}/${name}.jpg`}
                data-thumb-src={`/images/${folderName}/${typeAlias}/${name}.jpg`}
              >
                <Image
                  src={`/images/${folderName}/${typeAlias}/${name}.jpg`}
                  alt="Carousel item"
                  fill
                  className="w-full h-full object-center object-cover"
                />
              </div>
            );
          })}
        </Carousel>
      </Gallery>
    </div>
  );
};

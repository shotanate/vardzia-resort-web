"use client";

import { PropsWithChildren, useEffect, useRef } from "react";

import { Carousel as NativeCarousel } from "@fancyapps/ui";
import "@fancyapps/ui/dist/carousel/carousel.css";

import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";

import type { OptionsType } from "@fancyapps/ui/types/Carousel/options";

type Props = {
  options?: Partial<OptionsType>;
};

const defaults: Partial<OptionsType> = {
  Dots: true,
  Thumbs: false,
};

export const Carousel = (props: PropsWithChildren<Props>) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const options = {
      ...defaults,
      ...(props.options || {}),
    };

    const instance = new NativeCarousel(container, options, { Thumbs });

    return () => {
      instance.destroy();
    };
  });

  return (
    <div className="f-carousel h-full" ref={containerRef}>
      {props.children}
    </div>
  );
};

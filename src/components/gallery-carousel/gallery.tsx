"use client";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import { ReactNode, useEffect, useRef } from "react";

import "@fancyapps/ui/dist/fancybox/fancybox.css";

import type { OptionsType } from "@fancyapps/ui/types/Fancybox/options";

type Props = {
  delegate?: string;
  options?: Partial<OptionsType>;
  children: ReactNode;
};

export const Gallery = (props: Props) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const delegate = props?.delegate || "[data-fancybox]";
    const options = props?.options || {};

    NativeFancybox.bind(container, delegate, options);

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  });

  return (
    <div ref={containerRef} className="h-full">
      {props.children}
    </div>
  );
};

import { ComponentProps } from "react";

export const IconArrow = ({
  direction = "left",
  ...props
}: ComponentProps<"svg"> & { direction?: "left" | "right" }) => {
  let rotateValue;

  switch (direction) {
    case "left": {
      rotateValue = "rotate(0deg)";
      break;
    }
    case "right": {
      rotateValue = "rotate(180deg)";
      break;
    }
  }
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      {...props}
      style={{ transform: rotateValue, ...props.style }}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m14 7l-5 5l5 5"
      />
    </svg>
  );
};

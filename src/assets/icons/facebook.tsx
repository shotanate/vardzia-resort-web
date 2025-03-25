import { ComponentProps } from "react";

export const IconFacebook = (props: ComponentProps<"svg">) => {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path
          strokeDasharray="24"
          strokeDashoffset="24"
          d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.4s"
            values="24;0"
          />
        </path>
        <path strokeDasharray="8" strokeDashoffset="8" d="M8 12h7">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.2s"
            values="8;0"
          />
        </path>
      </g>
    </svg>
  );
};

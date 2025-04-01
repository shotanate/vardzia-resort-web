import { ComponentProps } from "react";

export const IconMenu = (props: ComponentProps<"svg">) => {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        color="currentColor"
      >
        <path d="M20 18v-8c0-1.886 0-2.829-.586-3.414C18.828 6 17.886 6 16 6H4v12c0 1.885 0 2.828.586 3.414S6.114 22 8 22h8c1.886 0 2.828 0 3.414-.586S20 19.885 20 18" />
        <path d="M12 11a3 3 0 0 1 3 3m-3-3a3 3 0 0 0-3 3m3-3v-1m3 4H9m6 0h1m-7 0H8m0 4h8M4 6l7.385-3.094c1.649-.691 2.473-1.037 3.13-.86a2 2 0 0 1 1.07.717C16 3.305 16 4.203 16 6" />
      </g>
    </svg>
  );
};

export const IconBarMenu = (props: ComponentProps<"svg">) => {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        d="M10 19v4.5m0-4.5c0-4 3.167-9.806 7.063-13.053L18.5 4.75V4.5h-4.972M10 19c0-4-3.167-9.806-7.063-13.053L1.5 4.75V4.5h12.028M10 23.5H5m5 0h5m-9.5-15h9m3.5 1a4.5 4.5 0 1 0-4.472-5"
        strokeWidth="1.5"
      />
    </svg>
  );
};

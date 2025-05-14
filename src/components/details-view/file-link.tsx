import Link from "next/link";
import { ComponentProps, JSX } from "react";

export const FileLink = ({
  title,
  file,
  Icon,
}: {
  title: string;
  file: string;
  Icon: (props: ComponentProps<"svg">) => JSX.Element;
}) => {
  return (
    <Link
      href={`/files/${file}`}
      target="_blank"
      className="flex items-center gap-2"
    >
      <Icon className="h-6 w-6 text-primary-main" />

      <p className="mt-1 text-md hover:text-primary-main transition">{title}</p>
    </Link>
  );
};

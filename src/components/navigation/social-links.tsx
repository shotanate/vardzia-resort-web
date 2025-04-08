import { IconFacebook, IconInstagram } from "@/assets/icons";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Props = {
  isHomePage: boolean;
  iconClassName?: string;
};

export const SocialLinks = ({ isHomePage, iconClassName }: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <Link href="/" target="_blank">
        <IconFacebook
          className={cn(
            "transition duration-300 group-hover:opacity-50 hover:opacity-100",
            iconClassName,
            {
              "text-white": isHomePage,
            }
          )}
        />
      </Link>

      <Link href="/" target="_blank">
        <IconInstagram
          className={cn(
            "transition duration-300 group-hover:opacity-50 hover:opacity-100",
            iconClassName,
            {
              "text-white": isHomePage,
            }
          )}
        />
      </Link>
    </div>
  );
};

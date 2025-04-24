import { IconFacebook, IconInstagram } from "@/assets/icons";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Props = {
  isHomePage: boolean;
  iconClassName?: string;
  isScrolled?: boolean;
};

export const SocialLinks = ({
  isHomePage,
  iconClassName,
  isScrolled,
}: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <Link href="https://www.facebook.com/vardziaresort/" target="_blank">
        <IconFacebook
          className={cn(
            "transition delay-200 group-hover:opacity-50 hover:opacity-100 text-primary-main",
            iconClassName,
            {
              "text-white": isHomePage && !isScrolled,
            }
          )}
        />
      </Link>

      <Link href="https://www.instagram.com/vardziaresort/" target="_blank">
        <IconInstagram
          className={cn(
            "transition delay-200 group-hover:opacity-50 hover:opacity-100 text-primary-main",
            iconClassName,
            {
              "text-white": isHomePage && !isScrolled,
            }
          )}
        />
      </Link>
    </div>
  );
};

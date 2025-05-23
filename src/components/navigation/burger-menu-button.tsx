"use client";

import { cn } from "@/lib/utils";

interface BurgerMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  isHomePage: boolean;
  isScrolled: boolean;
}

export const BurgerMenuButton = ({
  isOpen,
  onToggle,
  isHomePage,
  isScrolled,
}: BurgerMenuButtonProps) => {
  const isWhite = isHomePage && !isScrolled && !isOpen;

  return (
    <div
      onClick={onToggle}
      className={cn(
        "relative w-10 h-7 cursor-pointer transition-all duration-500 ease-in-out z-30",
        "mx-auto",
        isOpen && "rotate-0"
      )}
    >
      <span
        className={cn(
          "absolute block w-full h-[2px] bg-primary-main rounded-[3px] opacity-100 left-0 delay-200",
          "transition-all duration-250 ease-in-out",
          "origin-left",
          isOpen && "rotate-45 -translate-y-0.5 translate-x-1",
          isWhite && "bg-white"
        )}
      />
      <span
        className={cn(
          "absolute block w-full h-[2px] bg-primary-main rounded-[3px] opacity-100 left-0 delay-200",
          "transition-all duration-250 ease-in-out",
          "origin-left top-3",
          isOpen && "w-0 opacity-0",
          isWhite && "bg-white"
        )}
      />
      <span
        className={cn(
          "absolute block w-full h-[2px] bg-primary-main rounded-[3px] opacity-100 left-0 delay-200",
          "transition-all duration-250 ease-in-out",
          "origin-left top-6",
          isOpen && "-rotate-45 translate-y-0.5 translate-x-1",
          isWhite && "bg-white"
        )}
      />
    </div>
  );
};

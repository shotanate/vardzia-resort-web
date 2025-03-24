"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import logo from "@/assets/images/vardzia-resort-logo.png";
import { cn } from "@/lib/utils";

// Navigation links data
const navLinks = [
  { href: "/", label: "ოთახები", isBold: true },
  { href: "/", label: "ბარი & რესტორანი" },
  { href: "/", label: "სერვისები" },
];

const languages = [
  { href: "/", label: "EN" },
  { href: "/", label: "ქა" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn("w-full fixed top-0 transition z-10", {
        "bg-black": isScrolled,
      })}
    >
      <nav className="container flex items-center justify-between py-5">
        <Image src={logo} alt="Vardzia resort logo" height={70} />

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg transition text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-2">
          {languages.map((lang) => (
            <Link
              key={lang.label}
              href={lang.href}
              className="text-lg transition text-white"
            >
              {lang.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

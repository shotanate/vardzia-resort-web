"use server";

import { noto_serif_jp } from "@/assets/fonts";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import "../styles/globals.css";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    // TODO update with valid url
    metadataBase: new URL("http://localhost:3000/en"),
    keywords: ["Vardzia", "Resort", "Hotel", "Reslax"],
    title: {
      absolute: "",
      default: t("about.MAIN.title"),
      template: `%s - ${t("about.MAIN.title")}`,
    },
    description: t("metadata.main_description"),
    openGraph: {
      description: t("metadata.main_description"),
      images: [], // TODO Add website images,
      url: "https://google.com",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="ka">
      <body className={`${noto_serif_jp.className} antialiased`}>
        <NextIntlClientProvider>
          <Navigation />

          {children}
          <Toaster />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

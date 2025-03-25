import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { archyedtBold, archyedtThin, firaGoRegular } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vardzia Resort",
  description:
    "Stay at Vardzia Resort — a cozy resort with beautiful views, great food, and unforgettable experiences. Book now!",
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
      <body
        className={`${archyedtBold.variable} ${archyedtThin.variable} ${firaGoRegular.variable} font-archyedt-bold antialiased`}
      >
        <NextIntlClientProvider>
          <Navigation />

          {children}

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

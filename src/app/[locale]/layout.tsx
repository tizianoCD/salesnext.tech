// src/app/[locale]/layout.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
//import "node_modules/react-modal-video/css/modal-video.css";
import "../../styles/index.css";
import { Providers } from "./providers";
import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/routing';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  // Validate the locale against available locales
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Load messages based on the locale
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
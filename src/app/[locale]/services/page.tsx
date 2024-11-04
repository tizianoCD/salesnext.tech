// app/[locale]/features/page.tsx

import Features from "@/components/Features"; // Adjust the path if needed
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore the features of our services.",
};

export const generateStaticParams = async () => {
  const locales = ['en', 'fr', 'es']; // Example locales; replace with your actual locales

  return locales.map((locale) => ({
    locale, // Return an object with the locale as a parameter
  }));
};

export default function FeaturesPage() {
  return <Features />;
}

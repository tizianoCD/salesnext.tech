// app/[locale]/page.tsx

import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

// Define your available locales
const locales = ["en", "es", "fr"]; // Add all supported locales here

export const metadata: Metadata = {
  title: "SalesNext Consulting",
  description: "Description",
  // other metadata
};

// This function generates static parameters for each locale
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <Contact />
    </>
  );
}

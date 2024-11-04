import AboutSectionOne from "@/components/About/AboutSectionOne";
import { locales } from "@/i18n/routing"; // Ensure this path is correct
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company and what we do.",
  // other metadata
};

// Generate static params for locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const AboutPage = () => {
  return (
    <>
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
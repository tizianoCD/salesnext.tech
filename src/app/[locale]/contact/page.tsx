// app/[locale]/contact/page.tsx

import Contact from "@/components/Contact"; // Adjust the path if needed
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
};

export const generateStaticParams = async () => {
  const locales = ['en', 'fr', 'es']; // Replace with your actual locales

  return locales.map((locale) => ({
    locale, // Return an object with the locale
  }));
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;

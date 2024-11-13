import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SalesNext - Expert Salesforce Consulting & Implementation",
  description: "SalesNext Consulting specializes in Salesforce consulting and implementation, helping businesses optimize CRM and drive growth with custom solutions."
};
  

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <Brands />
      <Contact />
    </>
  );
}

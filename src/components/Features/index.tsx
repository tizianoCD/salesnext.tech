"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import { useFeaturesData } from "./featuresData"; // Import the custom hook
import { useTranslations } from 'next-intl';
import { Feature } from "@/types/feature"; // Import the Feature type

const Features = () => {
  const t = useTranslations(); // Load translations for the current namespace
  const servicesSection = {
    title: t('servicesSection.title'), // Access title correctly
    paragraph: t('servicesSection.paragraph'), // Access paragraph correctly
  };
  
  const featuresData = useFeaturesData(); // Use the hook to get features data

  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title={servicesSection.title} // Use the title from the services section
          paragraph={servicesSection.paragraph} // Use the paragraph from the services section
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => {
            // Construct the feature object with all required properties
            const featureObject: Feature = {
              id: feature.id,
              icon: feature.icon,
              title: feature.title, // Using title from featuresData now
              paragraph: feature.paragraph, // Using paragraph from featuresData now
            };

            return <SingleFeature key={feature.id} feature={featureObject} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

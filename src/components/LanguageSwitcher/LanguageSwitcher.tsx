"use client";

import { useRouter } from 'next/navigation';
import { locales } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Add a mapping object for locale codes to full language names
const languageNames: Record<string, string> = {
  en: 'English',
  de: 'Deutsch',
  // Add more languages as needed
};

const LanguageSwitcher = () => {
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;
  const [selectedLocale, setSelectedLocale] = useState(currentLocale);

  // Debug logs
  console.log('Locales array:', locales);
  console.log('Language names mapping:', languageNames);
  console.log('Current locale:', currentLocale);

  useEffect(() => {
    setSelectedLocale(currentLocale);
  }, [currentLocale]);

  const handleChange = (newLocale: string) => {
    setSelectedLocale(newLocale);
    const currentPath = window.location.pathname;
    const segments = currentPath.split('/');
    segments[1] = newLocale; // Update the locale segment
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <select 
      value={selectedLocale} 
      onChange={(e) => handleChange(e.target.value)}
      className="border rounded px-2 py-1"
    >
      {locales.map((locale) => {
        console.log('Processing locale:', locale);
        console.log('Language name lookup:', languageNames[locale]);
        return (
          <option key={locale} value={locale}>
            {languageNames[locale] || locale.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
};

export default LanguageSwitcher;
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export async function getI18nProps(locale: string = 'en') {
  // Type guard to ensure locale is one of the allowed values ("en" | "de")
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // After this point, TypeScript knows `locale` is either "en" or "de"
  const typedLocale = locale as (typeof routing.locales)[number];

  // Wrap `locale` in an object to match the expected structure
  const messages = await getMessages({ locale: typedLocale });

  return {
    locale: typedLocale,
    messages,
  };
}

// layout.server.tsx
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export async function getI18nProps(locale = 'en') {
  // Ensure that the incoming `locale` is valid
  if (locale && !routing.locales.includes(locale as any)) {
    notFound();
  }

  // Get messages for the locale
  const messages = await getMessages();

  return { messages, locale };
}
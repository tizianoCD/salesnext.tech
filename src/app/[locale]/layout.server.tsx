import { locales } from '@/i18n/routing';  // Directly import `locales`
import { Link, redirect, usePathname, useRouter } from '@/i18n/routing';  // Import other functions if needed
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export async function getI18nProps(locale = 'en') {
  // Ensure that the incoming `locale` is valid
  if (locale && !locales.includes(locale as any)) {
    notFound();
  }
  // Additional code...
}

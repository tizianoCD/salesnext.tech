import { createSharedPathnamesNavigation } from 'next-intl/navigation';

// Export these as named exports
export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = 'en' as const;

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  defaultLocale
});
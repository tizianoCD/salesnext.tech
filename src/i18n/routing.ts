import { createSharedPathnamesNavigation } from 'next-intl/navigation';

// Define locales and default locale
export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = 'en' as const;

// Extract navigation utilities from next-intl
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  defaultLocale,
});

// Export a routing object with all necessary exports bundled
export const routing = { locales, defaultLocale, Link, redirect, usePathname, useRouter };

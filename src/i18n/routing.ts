import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = 'en' as const;

const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  defaultLocale
});

// Export these individually and as part of the `routing` object
export { Link, redirect, usePathname, useRouter };
export const routing = { Link, redirect, usePathname, useRouter };  // Add this line

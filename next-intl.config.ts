const locales = ['en', 'de'] as const; // Add your supported locales here

export default {
  locales,
  defaultLocale: 'en',
  messages: {
    en: './src/messages/en.json',
    de: './src/messages/de.json',
  },
} as const;

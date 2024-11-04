import { useTranslations } from 'next-intl';

// Define the MenuItem interface
export interface MenuItem {
  title: string;
  path: string;
}

const getMenuData = (t: (key: string) => string): MenuItem[] => {
  return [
    {
      title: t('home'),
      path: "/",
    },
    {
      title: t('services'),
      path: "/services",
    },
    {
      title: t('about'),
      path: "/about",
    },
  ];
};

// Export the menu data function as default
export default getMenuData;

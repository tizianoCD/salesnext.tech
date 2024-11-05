import { useTranslations } from 'next-intl';

// Define the MenuItem interface
export interface MenuItem {
  title: string;
  path: string;
}

// Create a function that returns the menu data based on the current locale
const getMenuData = () => {
  const t = useTranslations('menu'); // Load translations for the 'menu' namespace

  // Return the translated menu data
  return [
    {
      title: t('home'), // Access translation for 'home'
      path: "/", // Main page
    },
    {
      title: t('services'), // Access translation for 'services'
      path: "/services", // Services page
    },
    {
      title: t('about'), // Access translation for 'about'
      path: "/about", // About page
    },
  ];
};

// Export the menu data function as default
export default getMenuData;

// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://salesnext.tech'; // Update with your actual domain

module.exports = {
  siteUrl,
  generateRobotsTxt: true,  // Generates a robots.txt file
  changefreq: 'daily',
  priority: 0.7,
  async additionalPaths() {
    const locales = ['en', 'de'];  // Replace with your actual locales
    const paths = [
      '',           // Home page
      'about',      // About page
      'contact',    // Contact page
      'error',      // Error page
    ];

    // Generate paths with locales, e.g., /en/about, /de/about
    const localizedPaths = [];
    locales.forEach(locale => {
      paths.forEach(path => {
        localizedPaths.push(`/${locale}/${path}`);
      });
    });

    console.log('Localized Paths:', localizedPaths); // Debugging output to verify paths

    return localizedPaths.map(path => ({ loc: path }));
  },
};

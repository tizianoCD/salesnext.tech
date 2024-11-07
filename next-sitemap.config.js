// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://www.salesnext.tech'; // Use www in the base URL

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 1000, // Ensures all URLs in one file if desired
  async additionalPaths() {
    const locales = ['en', 'de'];
    const paths = ['', 'about', 'contact', 'error'];

    const localizedPaths = [];
    locales.forEach(locale => {
      paths.forEach(path => {
        localizedPaths.push(`/${locale}/${path}`);
      });
    });

    return localizedPaths.map(path => ({ loc: path }));
  },
};

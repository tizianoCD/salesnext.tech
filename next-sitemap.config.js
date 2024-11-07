// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://salesnext.tech';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 1000, // Increase this to include all URLs in one sitemap file
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

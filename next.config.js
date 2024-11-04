const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/webJs', // Replace with your repository name
  assetPrefix: '/webJs/', // Replace with your repository name
};


module.exports = withNextIntl(nextConfig);
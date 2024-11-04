const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This enables static export and creates an 'out' directory after build
};

module.exports = withNextIntl(nextConfig);

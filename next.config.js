/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Preserve SEO with redirects from old WordPress URLs (most slugs are
  // already preserved in the new app/ structure, but legacy variants live here).
  async redirects() {
    return [
      // Old root pumping URL used in some legacy nav (matches existing site)
      { source: '/septic-tank-pumping', destination: '/services/septic-tank-pumping', permanent: true },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  disable: process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? true : false,
  skipWaiting: true
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scspod.sgp1.digitaloceanspaces.com',
        port: '',
        pathname: '/POD/**',
      },
    ],
  },
});
module.exports = nextConfig;

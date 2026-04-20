/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "buyops-backend-production.up.railway.app",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;

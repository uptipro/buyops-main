/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.buyops.ng" }],
        destination: "https://buyops.ng/:path*",
        permanent: true,
      },
    ];
  },
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

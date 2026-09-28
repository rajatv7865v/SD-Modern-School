/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/faculty',
        destination: '/trust',
        permanent: true,
      },
      {
        source: '/fees',
        destination: '/fee-structure',
        permanent: true,
      },
      {
        source: '/committees',
        destination: '/governance',
        permanent: true,
      },
      {
        source: '/smc',
        destination: '/governance',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


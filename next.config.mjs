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
      {
        source: '/sanitation-certificate',
        destination: '/water-sanitation-certificate',
        permanent: true,
      },
      {
        source: '/water-certificate',
        destination: '/water-sanitation-certificate',
        permanent: true,
      },
      {
        source: '/drinking-water-certificate',
        destination: '/water-sanitation-certificate',
        permanent: true,
      },
      {
        source: '/building-safety',
        destination: '/building-safety-certificate',
        permanent: true,
      },
      {
        source: '/building-certificate',
        destination: '/building-safety-certificate',
        permanent: true,
      },
      {
        source: '/safety-certificate',
        destination: '/building-safety-certificate',
        permanent: true,
      },
      {
        source: '/nbc-certificate',
        destination: '/building-safety-certificate',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


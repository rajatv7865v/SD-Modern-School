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
      {
        source: '/fire-safety',
        destination: '/fire-safety-certificate',
        permanent: true,
      },
      {
        source: '/fire-certificate',
        destination: '/fire-safety-certificate',
        permanent: true,
      },
      {
        source: '/fire-noc',
        destination: '/fire-safety-certificate',
        permanent: true,
      },
      {
        source: '/recognition',
        destination: '/school-recognition-certificate',
        permanent: true,
      },
      {
        source: '/recognition-certificate',
        destination: '/school-recognition-certificate',
        permanent: true,
      },
      {
        source: '/rte',
        destination: '/school-recognition-certificate',
        permanent: true,
      },
      {
        source: '/rte-certificate',
        destination: '/school-recognition-certificate',
        permanent: true,
      },
      {
        source: '/pta',
        destination: '/pta-executive-committee',
        permanent: true,
      },
      {
        source: '/pta-committee',
        destination: '/pta-executive-committee',
        permanent: true,
      },
      {
        source: '/parent-teacher-association',
        destination: '/pta-executive-committee',
        permanent: true,
      },
      {
        source: '/appendix-ii',
        destination: '/cbse-appendix-ii',
        permanent: true,
      },
      {
        source: '/appendix-2',
        destination: '/cbse-appendix-ii',
        permanent: true,
      },
      {
        source: '/deo-certificate',
        destination: '/cbse-appendix-ii',
        permanent: true,
      },
      {
        source: '/cbse-affiliation',
        destination: '/cbse-appendix-ii',
        permanent: true,
      },
      {
        source: '/self-certification',
        destination: '/cbse-appendix-ii',
        permanent: true,
      },
      {
        source: '/appendix-ix',
        destination: '/mandatory-public-disclosure',
        permanent: true,
      },
      {
        source: '/appendix-9',
        destination: '/mandatory-public-disclosure',
        permanent: true,
      },
      {
        source: '/cbse-appendix-ix',
        destination: '/mandatory-public-disclosure',
        permanent: true,
      },
      {
        source: '/mandatory-disclosure',
        destination: '/mandatory-public-disclosure',
        permanent: true,
      },
      {
        source: '/saras',
        destination: '/mandatory-public-disclosure',
        permanent: true,
      },
      {
        source: '/mandatory-disclosure-details',
        destination: '/mandatory-disclosure-details-sdms',
        permanent: true,
      },
      {
        source: '/mandatory-disclosure-sdms',
        destination: '/mandatory-disclosure-details-sdms',
        permanent: true,
      },
      {
        source: '/disclosure-details-sdms',
        destination: '/mandatory-disclosure-details-sdms',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


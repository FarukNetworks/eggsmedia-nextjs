module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eggsmedia.com',
      },
      {
        protocol: 'http',
        hostname: 'eggsmedia.local',
      },
    ],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

const nextTranslate = require('next-translate');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  nextTranslate({
    webpack: (config, { isServer }) => {
      if (isServer) {
        // eslint-disable-next-line global-require
        // require('./scripts/generate-sitemap');
      }

      return config;
    },
  })
);

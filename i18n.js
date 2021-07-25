const nextTranslateConfig = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
  pages: {
    '*': ['appheader', 'appheaderdrawer'],
    '/': ['homepage'],
    '/about': ['about'],
  },
};

module.exports = nextTranslateConfig;

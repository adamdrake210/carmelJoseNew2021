const nextTranslateConfig = {
  locales: ['en', 'ca', 'es'],
  defaultLocale: 'en',
  pages: {
    '*': ['appheader', 'appheaderdrawer'],
    '/': ['homepage'],
    '/about': ['about'],
  },
};

module.exports = nextTranslateConfig;

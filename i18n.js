const nextTranslateConfig = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
  pages: {
    '*': ['appheader', 'appheaderdrawer'],
    '/': ['homepage'],
    '/about': ['about'],
    '/travel': ['travelpage'],
    '/accommodation': ['accommodationpage'],
  },
};

module.exports = nextTranslateConfig;

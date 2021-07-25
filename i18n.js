const nextTranslateConfig = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
  pages: {
    '*': ['appheader', 'appheaderdrawer'],
    '/': ['homepage'],
    '/about': ['about'],
    '/travel': ['travelpage'],
    '/accommodation': ['accommodationpage'],
    '/preboda': ['prebodapage'],
    '/wedding': ['weddingpage'],
    '/logistics': ['logisticspage'],
    '/dresscode': ['dresscodepage'],
    '/giftlist': ['giftlistpage'],
  },
};

module.exports = nextTranslateConfig;

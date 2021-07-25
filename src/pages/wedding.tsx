import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import AppShell from 'containers/AppShell';
import WeddingPage from 'WeddingPage';

const Wedding = () => {
  const { t } = useTranslation();

  return (
    <AppShell title={t('weddingpage:weddingtitle')}>
      <WeddingPage />
    </AppShell>
  );
};

export default Wedding;

import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import AppShell from 'containers/AppShell';
import PrebodaPage from 'components/PrebodaPage';

const Preboda = () => {
  const { t } = useTranslation();

  return (
    <AppShell title={t('prebodapage:prebodatitle')}>
      <PrebodaPage />
    </AppShell>
  );
};

export default Preboda;

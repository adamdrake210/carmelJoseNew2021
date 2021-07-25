import React from 'react';
import AppShell from 'containers/AppShell';
import Homepage from 'components/Homepage';
import useTranslation from 'next-translate/useTranslation';

const Home = () => {
  const { t } = useTranslation();
  return (
    <AppShell title={t('appheader:home')}>
      <Homepage />
    </AppShell>
  );
};

export default Home;

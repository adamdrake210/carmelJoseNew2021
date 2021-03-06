import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import AppShell from 'containers/AppShell';
import Homepage from 'components/Homepage';

const Home = () => {
  const { t } = useTranslation();
  return (
    <AppShell title={t('appheader:home')}>
      <Homepage />
    </AppShell>
  );
};

export default Home;

import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import AppShell from 'containers/AppShell';
import DresscodePage from 'components/DresscodePage';

const Dresscode = () => {
  const { t } = useTranslation();

  return (
    <AppShell title={t('dresscodepage:dresscodetitle')}>
      <DresscodePage />
    </AppShell>
  );
};

export default Dresscode;

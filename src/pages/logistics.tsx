import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import AppShell from 'containers/AppShell';
import LogisticsPage from 'components/LogisticsPage';

const Wedding = () => {
  const { t } = useTranslation();

  return (
    <AppShell title={t('logisticspage:logisticsstitle')}>
      <LogisticsPage />
    </AppShell>
  );
};

export default Wedding;

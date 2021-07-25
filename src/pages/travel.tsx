import React from 'react';
import AppShell from 'containers/AppShell';
import Travelpage from 'components/TravelPage';
import useTranslation from 'next-translate/useTranslation';

const Travel = () => {
  const { t } = useTranslation();
  return (
    <AppShell title={t('travelpage:traveltitle')}>
      <Travelpage />
    </AppShell>
  );
};

export default Travel;

import React from 'react';
import AppShell from 'containers/AppShell';
import AccommodationPage from 'components/AccommodationPage';
import useTranslation from 'next-translate/useTranslation';

const Accommodation = () => {
  const { t } = useTranslation();
  return (
    <AppShell title={t('accommodationpage:accomtitle')}>
      <AccommodationPage />
    </AppShell>
  );
};

export default Accommodation;

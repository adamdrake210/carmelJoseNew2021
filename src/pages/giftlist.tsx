import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import AppShell from 'containers/AppShell';
import GiftlistPage from 'components/GiftlistPage';

const Giftlist = () => {
  const { t } = useTranslation();

  return (
    <AppShell title={t('giftlistpage:giftlisttitle')}>
      <GiftlistPage />
    </AppShell>
  );
};

export default Giftlist;

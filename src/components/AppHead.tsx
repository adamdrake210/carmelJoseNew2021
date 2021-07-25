import NextHead from 'next/head';
import * as React from 'react';
import useTranslation from 'next-translate/useTranslation';

type Props = {
  title: string;
};

export default function AppHead({ title }: Props) {
  const { t, lang } = useTranslation();

  return (
    <NextHead>
      <meta
        name="viewport"
        content="maximum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <title>{`${title} - ${t('appheader:title')}`}</title>
      <meta name="og:title" content={`${title} - ${t('appheader:title')}`} />
      <meta name="og:image" content="https://carmelandjose.com/static/weddingvenue.jpg" />
      <meta name="og:url" content={`https://carmelandjose.com`} />
      <meta name="og:description" content={t('appheader:description')} />
      <meta name="og:site_name" content="https://carmelandjose.com" />
      <meta name="og:locale" content={lang} />
      <meta name="og:type" content="website" />
      <link rel="alternate" hrefLang="es" href={`https://carmelandjose.com/es`} />
      <link rel="alternate" hrefLang="en" href={`https://carmelandjose.com`} />
    </NextHead>
  );
}

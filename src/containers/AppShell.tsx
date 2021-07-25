import PageLayout from 'containers/PageLayout';
import React from 'react';
import AppHead from 'components/AppHead';
import AppHeader from 'components/AppHeader/AppHeader';
import Footer from 'components/Footer';

type Props = {
  children: React.ReactNode;
  title: string;
};

const AppShell = ({ children, title }: Props) => (
  <>
    <AppHead title={title} />
    <AppHeader />
    <PageLayout>{children}</PageLayout>
    <Footer />
  </>
);

export default AppShell;

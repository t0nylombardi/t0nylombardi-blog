import React from 'react';
import App from 'next/app';
import { useRouter } from 'next/router';
import MainLayout from '../components/Layouts/main';
import '../styles/index.css';
import '../styles/pages/main.css';
class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <MainLayout route={router.pathname}>
          <Component {...pageProps} />
        </MainLayout>
        <style jsx global>{`
          body {
            margin: 0 !important;
            overflow: hidden;
          }
        `}</style>
      </>
    );
  }
}

export default MyApp;

export const getStaticProps = async () => {
  const router = useRouter();

  return {
    props: { router },
  };
};

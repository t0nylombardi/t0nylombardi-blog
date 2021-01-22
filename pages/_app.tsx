import React from 'react';
import App from 'next/app';
import MainLayout from '../components/Layouts/main';
import '../styles/index.css';
import '../styles/pages/main.css'
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}

export default MyApp;

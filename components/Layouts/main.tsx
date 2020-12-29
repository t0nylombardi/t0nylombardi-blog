import { error } from 'console';
import Head from 'next/head';
import React from 'react';
import Container from '../Container';
import SidePanel from '../SidePanel/SidePanel';

const MainLayout = ({ children }) => {
  return (
    <div className="Layout">
      <Head key="main">
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        {/* <meta name="msapplication-TileColor" content="#ffc40d" /> */}
        <meta name="description" content="t0nylombardi.com blog" />
        <meta name="author" content="t0nylombardi" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>T0nyLombardi | BLOG</title>
      </Head>

      <div className="flex flex-wrap flex-col h-screen">
        <div className="w-2/5 lg:w-1/5">
          <SidePanel />
        </div>

        <div className="w-2/5 lg:w-4/5 flex overflow-hidden">
          <div className="blog-wrapper w-full overflow-y-scroll">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

import { error } from 'console';
import Head from 'next/head';
import React from 'react';
import Container from '../Container';
import SidePanel from '../SidePanel/SidePanel';

const MainLayout = ({ children }) => {
  return (
    <div className="Layout">
      <Head>
        <title>T0nyLombardi | BLOG</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
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

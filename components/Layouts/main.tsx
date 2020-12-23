import Head from 'next/head';

const MainLayout = ({ children }) => {
  return (
    <div className="Layout">
      <Head>
        <title>T0nyLombardi | BLOG</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <div className="main-container">
        <div className="content-wrapper">{children}</div>
      </div>
      <style jsx global>{`
        .main-container: {
          width: 100vw;
          height: 100vh;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default MainLayout;

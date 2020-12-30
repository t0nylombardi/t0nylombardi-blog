import Head from 'next/head';
import { useState } from 'react';
import SidePanel from '../SidePanel/SidePanel';
import { useSpring, animated, config } from 'react-spring';

const MainLayout = ({ children }) => {
  console.log(
    "is this a picture me? I don't know. I can't remember. Pepperidge Farms remembers"
  );

  const [isExpanded, setExpanded] = useState(true);
  const style = useSpring({
    width: isExpanded ? '100vw' : '25%',
    config: config.wobbly,
  });

  const setButtonHandler = () => {
    setExpanded(false);
  };

  return (
    <div className="Layout">
      <Head key="main">
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <meta name="description" content="t0nylombardi.com blog" />
        <meta name="author" content="t0nylombardi" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>T0nyLombardi | BLOG</title>
      </Head>

      <div className="flex flex-wrap flex-col h-screen">
        <div className="z-10">
          <animated.div style={style}>
            <SidePanel onChildClick={setButtonHandler} />
          </animated.div>
        </div>

        <div className="w-2/5 lg:w-3/4 flex overflow-hidden">
          <div className="blog-wrapper w-full overflow-y-scroll">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

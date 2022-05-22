import React, { useContext } from 'react';
import Head from 'next/head';
import ThemeContext from '../theme/ThemeContext';

const Header = (props) => {
  const { title } = props;
  const { dark, _ } = useContext(ThemeContext);
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content={!dark ? '#ffffff' : '#000000'} />
      <meta
        name="description"
        content="Developer. Designer. Tech Enthusiast."
      />
      <meta property="og:title" content="knp soda website" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:image" content="" />
      <meta
        property="og:description"
        content=" I'm a software developer from Phitsanulok Thailand. 🔥"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:image" content="" />
      <meta
        name="google-site-verification"
        content="6zN_DV-uihM3ghNKdbtKIDTZXlcdQv9WFH5BHz8wnyE"
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <title>{title !== null ? title : 'kannapong Aiamtip'}</title>
    </Head>
  );
};

export default Header;

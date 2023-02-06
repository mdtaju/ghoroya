import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.css';
import Head from "next/head";
import { useEffect } from "react";
import '../component/i18next';
import Messenger from "../component/Messenger";
import Logo from '../public/Images/ghoroya_logo.jpg';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    AOS.init({
      once: true
    });

  }, []);
  return (
    <>
      <Head>
        <title>Ghoroya Foods, Arts & Crafts gellary</title>
        <meta name="description" content="Number One Platform for Ghoroya Foods, Arts & Crafts and Experts" key='desc' />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Ghoroya Foods, Arts & Crafts" />
        <meta
          property="og:description"
          content="Number One Platform for Ghoroya Foods, Arts & Crafts and Experts"
        />
        <meta name="keywords" content="ghoroya, app, food" />
        <meta name="author" content="Abdur Rahim" />
        <meta
          property="og:image"
          content={Logo}
        />
      </Head>
      <Messenger />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

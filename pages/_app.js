import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    AOS.init();
    
  }, []);
  return <Component {...pageProps} />
}

export default MyApp

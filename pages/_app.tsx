import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className="pt-5 container">
      <Component {...pageProps} />
    </div>
  </>
}

export default MyApp

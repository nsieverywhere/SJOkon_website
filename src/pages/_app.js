import "/styles/globals.css";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return (
    <>
      <Head>
        <title>S.J Okon Enterprise</title>
        <meta name="description" content="Engineering Excellence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

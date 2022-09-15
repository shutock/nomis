import Head from "next/head";

import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/nomisIcon.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

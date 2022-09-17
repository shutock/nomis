import Head from "next/head";

import Header from "../components/general/Header";
import Footer from "../components/general/Footer";

export default function MainLayout({ children, title = "Sample" }) {
  const pageTitle = `${title} | Nomis`;
  return (
    <>
      <Head>
        <link rel="icon" href="/nomisIcon.svg" type="image/svg+xml" />
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="twitter:title" content={pageTitle} />
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}

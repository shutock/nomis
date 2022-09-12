import Head from 'next/head'
import '../styles/global.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href='./public/favicon.ico' type="image/icon" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

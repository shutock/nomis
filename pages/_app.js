import Head from 'next/head'
import '../styles/global.scss'
import favicon from '../public/favicon.ico'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href={favicon} type="image/icon" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>Dominika Bobik</title>
      <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
    </Head>
    <Component {...pageProps} />
    <Analytics />
  </>)
}

export default MyApp
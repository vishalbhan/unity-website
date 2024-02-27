import { Archivo } from 'next/font/google'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '@/components/Footer'

const archivo = Archivo({
  weight: ['200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'block'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main id="main" className={archivo.className}>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
import { Archivo } from 'next/font/google'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SmoothScrolling from '@/components/SmoothScrolling'
import Navbar from '@/components/Navbar'

const archivo = Archivo({
  weight: ['200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'block'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={archivo.className}>
        <SmoothScrolling>
          <Navbar />
          <Component {...pageProps} />
        </SmoothScrolling>
      </main>
    </>
  )
}

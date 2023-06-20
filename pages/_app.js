import '@/styles/globals.css'

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: 'variable',
  subsets: ['latin'],
})
export default function App({ Component, pageProps }) {
  return (
  <div className={montserrat.className}>
  <Component {...pageProps} />
  </div>

  )
}

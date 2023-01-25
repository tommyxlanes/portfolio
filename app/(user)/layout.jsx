import '../../styles/globals.css'

import Header from '../../components/Header'

import { Pacifico } from '@next/font/google'
import Footer from '../../components/Footer'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico'
})

export default function RootLayout({ children }) {
  return (
    <html className={`${pacifico.variable}`}>
      <head />
      <body className='bg-[#1e1e1e] relative'>
        <Header />
        {children}
      </body>
    </html>
  )
}

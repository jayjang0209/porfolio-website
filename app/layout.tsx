import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ActiveSectionContextProvider from '@/context/active-section-context'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jay Jang | Portfolio',
  description: 'Software developer based in Vancouver, BC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* background gradient */}
        <div className='main'>
          <div className="gradient" />
        </div>

        {/* content */}
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />

          <Toaster position='bottom-right' />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}

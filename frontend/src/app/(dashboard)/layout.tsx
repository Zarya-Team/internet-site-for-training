'use client'
import Providers from '@/queries/providers'
import Header from '../_components/header'
import Footer from '../_components/footer'
import '../globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
              
  )
}

'use client'
import Providers from '@/queries/providers'
import Header from './_components/header'
import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <body>
            <Providers>
              {children}
              </Providers>
      </body>
    </html>
    </>
  )
}

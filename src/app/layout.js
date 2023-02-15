
import Footer from '@/components/components/Footer'
import Hero from '@/components/components/Hero'
import Navbar from '@/components/components/Navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>

        {children}
        <Navbar />
        <Hero />

        <Footer />
      </body>
    </html>
  )
}

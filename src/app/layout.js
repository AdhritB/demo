
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Login from '@/components/Login'
import Navbar from '@/components/Navbar'
import Prompt from '@/components/Prompt'
import Team from '@/components/Team'
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
        <Team />
        <Login />
        <Prompt />
        <Footer />
      </body>
    </html>
  )
}

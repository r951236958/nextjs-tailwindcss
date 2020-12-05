import Head from 'next/head'
import Footer from './footer'
//import Simple from './simple'
//import Hero from './Hero'
//import Header from './header'
import TopBar from './TopBar'

const Layout = ({ children }) => (
  <>
    <div className="rounded-md bg-paper bg-opacity-20">
      <Head>
        <title>Next Auth App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />

      <main className="container min-h-full max-h-screen">{children}</main>
      <Footer />
    </div>
  </>
)

export default Layout

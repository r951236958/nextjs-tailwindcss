//import Head from 'next/head'
import Footer from './footer'
//import Simple from './simple'
//import Hero from './Hero'
//import Header from './header'
//import TopBar from './TopBar'
//import Nav from './nav'
import Navbar from './navbar'
//import Menu from './menu'

const Layout = ({ children }) => (
  <>
    <div className="rounded-md bg-paper bg-opacity-20">
      <Navbar />

      <main className="md:container md:mx-auto p-4 mx-4 border-2 border-dashed border-gray-300 border-opacity-20 rounded-lg">
        <div className="max-w-8xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  </>
)

export default Layout

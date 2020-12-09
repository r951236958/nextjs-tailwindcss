import Head from 'next/head'
import React from 'react'
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
    <Head>
        <title>My page</title>
        
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"
          rel="stylesheet"
        />

        <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
        <script src="prism.js"></script>
      </Head>
      <Navbar transparent />

      <main>
      <section className="absolute w-full h-full">
      <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
              backgroundImage:
                "url(assets/img/register_bg_2.png)",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
        <div className="container mx-auto py-16 px-4 h-full">
        
          {children}
          
        </div>
        <Footer absolute />
        </section>
      </main>
     

  </>
)

export default Layout

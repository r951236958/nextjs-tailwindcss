import Head from 'next/head'
import React from 'react'
//import Menu from './menu'
import { ThemeProvider } from '../src/context/themeContext'
import Footer from './footer'
//import Simple from './simple'
//import Hero from './Hero'
//import Header from './header'
//import TopBar from './TopBar'
//import Nav from './nav'
import Navbar from './navbar'

const Layout = ({ children }) => (
  <ThemeProvider>
    <Head>
      <title>My page</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta name="theme-color" content="#ffffff" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
        crossOrigin="anonymous"
      />
      <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
      <script src="/prism.js"></script>
    </Head>
    <Navbar transparent />

    <main>
      <section className="absolute w-full h-full">
        <div
          className="absolute top-0 w-full h-full bg-gray-900 bg-scroll bg-cover bg-no-repeat"
          style={{backgroundImage: 'url(assets/img/register_bg_2.png)'}}></div>
        <div className="container mx-auto py-16 px-4 h-full">{children}</div>
      </section>
    </main>
    <Footer absolute />
    </ThemeProvider>
)

export default Layout

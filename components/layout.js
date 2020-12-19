//import Menu from './menu'
import Footer from '@components/footer'
//import Simple from './simple'
//import Hero from './Hero'
//import Header from './header'
//import TopBar from './TopBar'
//import Nav from './nav'
import Fab from '@material-ui/core/Fab';
import Navbar2 from '@components/navbar2'
import Icons from '@components/icons'
//import { ThemeProvider } from '@src/context/themeContext'
import Head from 'next/head'
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

const Layout = ({children}) => {
  const trigger = useScrollTrigger();
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  
  
  return (
  <>
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
    <div
        className="bg-white dark:bg-gray-800 dark:text-gray-100 bg-contain bg-center bg-fixed bg-no-repeat"
        style={{backgroundImage: 'url(assets/img/register_bg_2.png)'}}>
    <div ref={myRef} />
    <Navbar2 />
    <div className="container min-h-screen pt-20">
    <main>
      {children}
    </main>
    </div>
      
    <div className="fixed right-10 bottom-10">
    <Zoom in={trigger}>
      <Fab onClick={executeScroll} color="secondary" size="small" aria-label="scroll back to top">
          <Icons icon="keyboard_arrow_up" />
        </Fab>
        </Zoom>
        </div>
        <Footer absolute />
    </div>
    </>
)
  }
Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout

//import { Provider } from 'next-auth/client'
import Head from 'next/head'
//import * as firebaseui from 'firebaseui'
//import 'firebaseui/dist/firebaseui.css'
import Prism from 'prismjs'
import 'prismjs/components/prism-core'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markup'
import 'prismjs/plugins/autoloader/prism-autoloader'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/themes/prism-okaidia.css'
//import App from 'next/App'
import PropTypes from 'prop-types'
import React from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'
//import '../styles/index.css'
import '../styles/tailwind.css'
//import '../styles/material_color.css'
import '../styles/app.scss'
import '../styles/prism.css'
//import 'material-components-web/dist/material-components-web.min.css'

function MyApp(props) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="theme-color" content="#37474f" />
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

      <Component {...pageProps} />
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp

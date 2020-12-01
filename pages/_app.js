import '../styles/index.css'
import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import React from 'react'
//import * as firebaseui from 'firebaseui'
//import 'firebaseui/dist/firebaseui.css'
import Prism from 'prismjs'
import 'prismjs/components/prism-core'
import 'prismjs/plugins/autoloader/prism-autoloader'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/themes/prism-okaidia.css'
//import App from 'next/App'
import PropTypes from 'prop-types'
import Head from 'next/head'

function MyApp(props) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
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

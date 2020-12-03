import { Provider } from 'next-auth/client'
import Head from 'next/head'
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
import React from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import '../styles/index.css'

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
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <body className=" bg-gray-100 dark:bg-gray-800 dark:text-white">
      <Provider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      options={{
        // Client Max Age controls how often the useSession in the client should
        // contact the server to sync the session state. Value in seconds.
        // e.g.
        // * 0  - Disabled (always use cache value)
        // * 60 - Sync session state with server if it's older than 60 seconds
        clientMaxAge: 0,
        // Keep Alive tells windows / tabs that are signed in to keep sending
        // a keep alive request (which extends the current session expiry) to
        // prevent sessions in open windows from expiring. Value in seconds.
        //
        // Note: If a session has expired when keep alive is triggered, all open
        // windows / tabs will be updated to reflect the user is signed out.
        keepAlive: 0
      }}
      session={pageProps.session} >
      <Component {...pageProps} />
      </Provider>
      </body>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp

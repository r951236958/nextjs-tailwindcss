//import { Provider } from 'next-auth/client'
//import * as firebaseui from 'firebaseui'
//import 'firebaseui/dist/firebaseui.css'
//import 'material-components-web/dist/material-components-web.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-core'
import 'prismjs/components/prism-markup'
import 'prismjs/plugins/autoloader/prism-autoloader'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/themes/prism-okaidia.css'
//import App from 'next/App'
import PropTypes from 'prop-types'
import React from 'react'
import '../src/styles/compiled-tailwind.css'
import '../src/styles/index.css'
import '../src/styles/tailwind.css'
//import '../styles/index.css'
//import 'tailwindcss/tailwind.css'
//import '../styles/global.css'
//import '../src/styles/tailwind.css'
//import '../styles/material_color.css'
//import '../styles/app.scss'
import '../styles/prism.css'


function MyApp(props) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp

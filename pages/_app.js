import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-core'
import 'prismjs/components/prism-markup'
import 'prismjs/plugins/autoloader/prism-autoloader'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/themes/prism-okaidia.css'
import React from 'react'
import '../styles/prism.css'
import '../styles/tailwind.css'


function App(props) {
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

export default App

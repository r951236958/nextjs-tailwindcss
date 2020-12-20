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
import '../styles/global.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ffeb3b',
		},
		secondary: {
			main: '#d81b60',
		},
	},
})

function MyApp(props) {
	const { Component, pageProps } = props

	React.useEffect(() => {
		Prism.highlightAll()
	}, [])

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</React.Fragment>
	)
}

export default MyApp

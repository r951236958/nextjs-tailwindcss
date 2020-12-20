//import Menu from './menu'
import Footer from 'components/footer'
//import Simple from './simple'
//import Hero from './Hero'
//import Header from './header'
//import TopBar from './TopBar'
//import Nav from './nav'
import Fab from '@material-ui/core/Fab'
import Navbar2 from 'components/navbar2'
import Icons from 'components/icons'
//import { ThemeProvider } from 'context/themeContext'
import Head from 'next/head'
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Zoom from '@material-ui/core/Zoom'

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

const Layout = ({ children }) => {
	const trigger = useScrollTrigger()
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
				className="dark:text-gray-100 dark:bg-gray-800 bg-white bg-contain bg-center bg-no-repeat bg-fixed"
				style={{ backgroundImage: 'url(assets/img/register_bg_2.png)' }}
			>
				<div ref={myRef} />
				<Navbar2 />
				<div className="container pt-20 min-h-screen">
					<main>{children}</main>
				</div>

				<div className="fixed bottom-10 right-10">
					<Zoom in={trigger}>
						<Fab
							onClick={executeScroll}
							color="secondary"
							size="small"
							aria-label="scroll back to top"
						>
							<svg
								className="svg-inline--fa fa-arrow-up fa-w-14 w-4 h-4 text-gray-100 fill-current"
								viewBox="0 0 448 512"
							>
								<path
									fill="currentColor"
									d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
								/>
							</svg>
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

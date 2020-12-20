//import Prism from 'prismjs'
import React from 'react'
//import Hero from "components/Hero"
import Layout from 'components/layout'
import Icons from 'components/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'utils/fontawesome'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const MyIcons = () => {
	//React.useEffect(() => {
	//  Prism.highlightAll()
	//}, [])

	return (
		<Layout>
			<section className="text-center">
				<LazyLoadImage
					className="block mb-8 mx-auto w-1/2"
					alt="Cat and human sitting on a couch"
					height="300"
					src="https://raw.githubusercontent.com/r951236958/tailwind-app/50603d4af985951e082461abc2511a033d3f5341/src/images/cat-and-human-illustration.svg"
					width="300"
				/>
				<h2 className="inline-block mb-4 p-3 text-2xl font-bold bg-yellow-400">
					Hey there! Welcome to your first Gatsby site.
				</h2>
				<div className="flix inline-flex mx-auto py-2">
					<i className="material-icons">
						<span className="text-red-500 text-8xl">move_to_inbox</span>
					</i>
				</div>
				<div className="grid gap-4 grid-cols-3 justify-center mx-auto my-6 p-4 w-full text-center text-xl bg-gray-600 bg-opacity-50 lg:grid-cols-10 lg:w-2/3">
					<FontAwesomeIcon icon="play" />
					<svg
						className="svg-inline--fa fa-arrow-up fa-w-14 fill-current"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
						/>
					</svg>
				</div>
				<div className="grid gap-4 grid-cols-3 justify-center mx-auto my-6 p-4 w-full text-center text-xl bg-gray-600 bg-opacity-50 lg:grid-cols-10 lg:w-2/3">
					<Icons iconstyle="text-3xl text-green-600" icon="move_to_inbox" />
					<Icons icon="palette" />
					<Icons iconstyle="text-5xl text-yellow-400" icon="description" />
					<Icons icon="get_app" />
					<Icons iconstyle="text-2xl text-blue-400" icon="favorite_border" />
					<Icons icon="favorite" />
					<Icons icon="delete" />
					<Icons icon="edit" />
					<Icons icon="done" />
					<Icons icon="close" />
					<Icons icon="add" />
					<Icons icon="keyboard_arrow_up" />
					<Icons icon="login" />
					<Icons icon="format_list_bulleted" />
					<Icons icon="toggle_off" />
					<Icons icon="toggle_on" />
					<Icons icon="security" />

					<Icons iconstyle="w-6 h-6 text-blue-400" icon="info" />
				</div>
				<p className="leading-loose">
					This is a barebones starter for Gatsby styled using{` `}
					<a
						className="text-gray-900 no-underline font-bold"
						href="https://tailwindcss.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Tailwind CSS
					</a>
					, a utility-first CSS framework.
				</p>
			</section>
		</Layout>
	)
}

export default MyIcons

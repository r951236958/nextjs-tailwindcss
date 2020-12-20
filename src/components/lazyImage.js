import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const LazyImage = () => (
	<div>
		<div className="max-w-xs border border-gray-300 rounded-xl shadow-xl overflow-hidden">
			<LazyLoadImage
				className="w-full h-52 object-cover"
				alt="Card Image"
				height="300"
				src="https://github.com/r951236958/gatsby-starter-default/blob/main/src/images/gatsby-astronaut.png?raw=true"
				width="300"
			/>

			<div className="px-6 py-4">
				<h4 className="mb-3 text-xl font-semibold tracking-tight">
					Hello Lazy Image
				</h4>
				<p className="text-gray-300 leading-normal">
					Welcome to your new Gatsby site. Now go build something great.
				</p>
			</div>
		</div>
	</div>
)

export default LazyImage

import React from 'react'

export const Hero = () => (
	<div className="lg:grid lg:gap-12 lg:grid-cols-2 lg:items-center">
		<div>
			<p className="text-teal-400 text-base font-semibold tracking-wider uppercase">
				Now in early access
			</p>
			<h2 className="font-display mt-2 text-white text-4xl font-semibold">
				Beautiful UI components, crafted
				<br className="hidden sm:inline lg:hidden xl:inline" />
				<span className="text-teal-400">by the creators of Tailwind CSS.</span>
			</h2>
			<p className="mt-4 max-w-3xl text-gray-300 text-lg">
				Tailwind UI is a collection of professionally designed, pre-built, fully
				responsive HTML snippets you can drop into your Tailwind projects. Get
				started by checking out our free preview components, or browsing the PNG
				previews in the categories you're most curious about.
			</p>
			<div className="flex mt-6">
				<a
					href="https://vimeo.com/393580241/82c6d7c5f6"
					target="_blank"
					className="inline-flex items-start hover:text-teal-300 text-teal-400 text-lg font-medium leading-6 transition duration-150 ease-in-out"
				>
					<svg
						className="flex-shrink-0 mr-3 w-9 h-9 transition duration-150 ease-in-out"
						stroke="currentColor"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							vectorEffect="non-scaling-stroke"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
						/>
						<circle
							vectorEffect="non-scaling-stroke"
							cx={12}
							cy={12}
							r={9}
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
						/>
					</svg>
					<span className="mt-1.5 transition duration-150 ease-in-out sm:hidden">
						Watch a demo
					</span>
					<span className="hidden mt-1.5 transition duration-150 ease-in-out sm:inline">
						Watch the creator of Tailwind CSS build a page with Tailwind UI
					</span>
				</a>
			</div>
		</div>
		<div className="mt-8 lg:mt-0">
			<div className="max-w-lg lg:ml-auto lg:max-w-xl">
				<a
					href="/preview"
					className="flex items-start px-5 py-4 text-white text-lg font-medium leading-6 hover:bg-gray-800 border border-teal-400 rounded-lg transition duration-150 ease-in-out"
				>
					<svg
						className="mr-3 w-6 h-6 text-teal-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
						/>
					</svg>
					Browse the free sample components
					<div className="ml-auto mt-0.5 pl-4">
						<svg
							className="w-5 h-5 text-teal-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				</a>
				<a
					href="#product-marketing"
					className="flex items-start mt-3 px-5 py-3 text-white text-base font-medium hover:bg-gray-800 border border-gray-700 rounded-lg transition duration-150 ease-in-out"
				>
					<svg
						className="mr-4 mt-0.5 w-5 h-5 text-gray-500"
						textviewbox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
							clipRule="evenodd"
						/>
					</svg>
					Preview all the Marketing components
					<div className="ml-auto mt-0.5 pl-4">
						<svg
							className="w-5 h-5 text-gray-500"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				</a>
				<a
					href="#product-application-ui"
					className="flex items-start mt-3 px-5 py-3 text-white text-base font-medium hover:bg-gray-800 border border-gray-700 rounded-lg transition duration-150 ease-in-out"
				>
					<svg
						className="mr-4 mt-0.5 w-5 h-5 text-gray-500"
						textviewbox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
					</svg>
					Preview all the Application UI components
					<div className="ml-auto mt-0.5 pl-4">
						<svg
							className="w-5 h-5 text-gray-500"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				</a>
			</div>
		</div>
	</div>
)

export default Hero

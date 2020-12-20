import React from 'react'

const CardHero = () => {
	return (
		<div class="flex flex-col justify-center p-10 min-w-full min-h-screen bg-gray-100">
			<div class="relative mx-auto w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl">
				<div class="absolute inset-0 -mr-3.5 bg-gradient-to-r shadow-lg from-red-100 to-purple-500 transform -skew-y-6 sm:rounded-3xl sm:rotate-3 sm:skew-y-0"></div>
				<div class="relative bg-white shadow-lg sm:rounded-3xl">
					<div class="flex items-center justify-start pl-6 pt-6">
						<span class="mr-2 w-3 h-3 bg-red-400 rounded-full"></span>
						<span class="mr-2 w-3 h-3 bg-yellow-400 rounded-full"></span>
						<span class="mr-2 w-3 h-3 bg-green-400 rounded-full"></span>
					</div>

					<div class="px-20 py-6">
						{/*<!-- nav -->*/}
						<div class="flex items-center justify-between">
							<div class="flex items-center justify-center">
								<div class="text-true-gray-800 flex items-center justify-center text-3xl font-bold">
									<svg
										class="mr-1 w-10 h-10 text-blue-700"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
										></path>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
										></path>
									</svg>
									AR
								</div>
								<div class="hidden items-center justify-center pt-1 antialiased lg:flex lg:ml-20">
									<a
										href="#"
										class="hover:text-cool-gray-600 flex items-center justify-center mr-10 text-gray-700 text-opacity-90 text-base font-medium tracking-tight transition duration-150 ease-in-out"
									>
										Product
										<svg
											class="ml-2 w-3.5 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="3"
												d="M19 9l-7 7-7-7"
											></path>
										</svg>
									</a>
									<a
										href="#"
										class="hover:text-cool-gray-600 flex items-center justify-center mr-10 text-gray-700 text-opacity-90 text-base font-medium tracking-tight transition duration-150 ease-in-out"
									>
										Community
										<svg
											class="ml-2 w-3.5 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="3"
												d="M19 9l-7 7-7-7"
											></path>
										</svg>
									</a>
									<a
										href="#"
										class="hover:text-cool-gray-600 flex items-center justify-center mr-10 text-gray-700 text-opacity-90 text-base font-medium tracking-tight transition duration-150 ease-in-out"
									>
										Plans
									</a>
								</div>
							</div>
							<div class="hidden items-center justify-center md:flex">
								<a
									href="#"
									class="text-true-gray-800 hover:text-cool-gray-700 mr-5 text-lg font-medium transition duration-150 ease-in-out"
								>
									Login
								</a>
								<button class="hover:from-true-gray-900 px-6 py-3 text-white font-medium bg-gradient-to-b rounded-3xl outline-none focus:outline-none hover:shadow-md from-gray-900 to-black transition duration-200 ease-in-out">
									Sign Up
								</button>
							</div>
						</div>
						{/*<!-- /nav -->*/}

						{/*<!-- hero section -->*/}
						<div class="lg:2/6 mt-20 text-left lg:ml-16 lg:mt-40 xl:w-2/4">
							<div class="text-gray-900 text-6xl font-semibold leading-none">
								Bring all your work together
							</div>
							<div class="text-true-gray-500 mt-6 text-xl antialiased font-light">
								A better experience for yout attendees and less stress yout
								team.
							</div>
							<button class="mt-6 px-8 py-4 text-white font-normal tracking-wide bg-gradient-to-b rounded-full outline-none focus:outline-none hover:shadow-lg from-blue-600 hover:from-blue-700 to-blue-700 transition duration-200 ease-in-out">
								Download for Free
							</button>
						</div>
						<div class="mt-12 text-left lg:ml-20 lg:mt-32">
							<bottom
								type="button"
								class="bg-cool-gray-100 hover:bg-cool-gray-50 flex items-center justify-center w-12 h-12 text-gray-800 hover:text-gray-900 rounded-full cursor-pointer animate-bounce transition duration-300 ease-in-out"
							>
								<svg
									class="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 14l-7 7m0 0l-7-7m7 7V3"
									></path>
								</svg>
							</bottom>
						</div>

						{/*<!-- /hero section -->*/}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardHero

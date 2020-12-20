import React from 'react'

const Card = () => {
	return (
		<div>
			<section class="text-gray-200 bg-gray-900">
				<div class="mx-auto px-5 py-24 max-w-6xl">
					<div class="flex flex-col flex-wrap items-center mb-20 w-full text-center">
						<h1 class="title-font mb-2 text-left text-4xl font-extrabold tracking-tight leading-10 sm:text-5xl sm:leading-none md:text-6xl">
							{' '}
							DERNIER COURS
						</h1>
						<p class="w-full text-base leading-relaxed lg:w-1/2">
							Enseigner c'est apprendre deux fois. J'aime partager mes
							connaissances et mes découvertses.
						</p>
					</div>
					<div class="flex flex-wrap -m-4">
						<div class="p-4 md:w-1/2 xl:w-1/3">
							<div class="p-6 border border-gray-300 rounded-lg">
								<div class="inline-flex items-center justify-center mb-4 w-10 h-10 text-indigo-500 bg-indigo-100 rounded-full">
									<svg
										class="w-6 h-6 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 384 512"
									>
										<path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
									</svg>
								</div>
								<h2 class="title-font mb-2 text-lg font-medium">
									L'essentiel du HTML5{' '}
								</h2>
								<p class="text-base leading-relaxed">
									Fingerstache flexitarian street art 8-bit waist co, subway
									tile poke farm.
								</p>

								<div class="flex justify-between mt-2 w-full text-center leading-none">
									<span class="inline-flex items-center mr-3 py-1 text-sm leading-none">
										<svg
											class="mr-2 w-4 h-4 text-blue-500 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
										</svg>
										40 min
									</span>
									<span class="inline-flex items-center text-sm leading-none">
										<svg
											width="22"
											height="22"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g fill="none" fill-rule="evenodd">
												<path
													fill="#D8D8D8"
													d="M9.2 6.583v11.08h3.5V6.583zm6.4 11.084h3.5V3h-3.5z"
												/>
												<path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z" />
											</g>
										</svg>
										Débutant
									</span>
								</div>
							</div>
						</div>

						<div class="p-4 md:w-1/2 xl:w-1/3">
							<div class="p-6 border border-gray-300 rounded-lg">
								<div class="inline-flex items-center justify-center mb-4 w-10 h-10 text-indigo-500 italic bg-indigo-100 rounded-full">
									<span class="text-sm font-bold">Php</span>
								</div>
								<h2 class="title-font mb-2 text-lg font-medium">
									Guide complet des dates en PHP
								</h2>
								<p class="text-base leading-relaxed">
									Fingerstache flexitarian street art 8-bit waist co, subway
									tile poke farm.
								</p>

								<div class="flex justify-between mt-2 w-full text-center leading-none">
									<span class="inline-flex items-center mr-3 py-1 text-sm leading-none">
										<svg
											class="mr-2 w-4 h-4 text-blue-500 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
										</svg>
										40 min
									</span>
									<span class="inline-flex items-center text-sm leading-none">
										<svg
											width="22"
											height="22"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g fill="none" fill-rule="evenodd">
												<path
													fill="#D8D8D8"
													d="M9.2 6.583v11.08h3.5V6.583zm6.4 11.084h3.5V3h-3.5z"
												/>
												<path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z" />
											</g>
										</svg>
										Débutant
									</span>
								</div>
							</div>
						</div>
						<div class="p-4 md:w-1/2 xl:w-1/3">
							<div class="p-6 border border-gray-300 rounded-lg">
								<div class="inline-flex items-center justify-center mb-4 w-10 h-10 text-indigo-500 bg-indigo-100 rounded-full">
									<svg
										class="w-6 h-6 fill-current"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>CSS3 icon</title>
										<path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
									</svg>
								</div>
								<h2 class="title-font mb-2 text-lg font-medium">CSS avancé</h2>
								<p class="text-base leading-relaxed">
									Fingerstache flexitarian street art 8-bit waist co, subway
									tile poke farm.
								</p>

								<div class="flex justify-between mt-2 w-full text-center leading-none">
									<span class="inline-flex items-center mr-3 py-1 text-sm leading-none">
										<svg
											class="mr-2 w-4 h-4 text-blue-500 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
										>
											<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
										</svg>
										2h 40 min
									</span>
									<span class="inline-flex items-center text-sm leading-none">
										<svg
											width="22"
											height="22"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g fill="none" fill-rule="evenodd">
												<path fill="#D8D8D8" d="M15.6 17.667h3.5V3h-3.5z" />
												<path fill="#667EEA" d="M9.2 6.583v11.08h3.5V6.583z" />
												<path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z" />
											</g>
										</svg>
										Débutant
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Card

import React from 'react'
import Layout from 'components/layout.js'

export default function Landing() {
	return (
		<Layout>
			<div
				className="relative flex content-center items-center justify-center pb-32 pt-16"
				style={{
					minHeight: '75vh',
				}}
			>
				<div
					className="absolute top-0 w-full h-full bg-cover bg-center"
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
					}}
				>
					<span
						id="blackOverlay"
						className="absolute w-full h-full bg-black opacity-75"
					></span>
				</div>
				<div className="container relative mx-auto">
					<div className="flex flex-wrap items-center">
						<div className="ml-auto mr-auto px-4 w-full text-center lg:w-6/12">
							<div className="pr-12">
								<h1 className="text-white text-5xl font-semibold">
									Your story starts with us.
								</h1>
								<p className="mt-4 text-gray-300 text-lg">
									This is a simple example of a Landing Page you can build using
									Tailwind Starter Kit. It features multiple CSS components
									based on the Tailwindcss design system.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className="absolute bottom-0 left-0 right-0 top-auto w-full pointer-events-none overflow-hidden"
					style={{ height: '70px', transform: 'translateZ(0)' }}
				>
					<svg
						className="absolute bottom-0 overflow-hidden"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						version="1.1"
						viewBox="0 0 2560 100"
						x="0"
						y="0"
					>
						<polygon
							className="text-gray-300 fill-current"
							points="2560 0 2560 100 0 100"
						></polygon>
					</svg>
				</div>
			</div>

			<section className="-mt-24 pb-20 bg-gray-300">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap">
						<div className="pt-6 px-4 w-full text-center md:w-4/12 lg:pt-12">
							<div className="relative flex flex-col mb-8 w-full min-w-0 break-words bg-white rounded-lg shadow-lg">
								<div className="flex-auto px-4 py-5">
									<div className="inline-flex items-center justify-center mb-5 p-3 w-12 h-12 text-center text-white bg-red-400 rounded-full shadow-lg">
										<i className="fas fa-award"></i>
									</div>
									<h6 className="text-xl font-semibold">Awarded Agency</h6>
									<p className="mb-4 mt-2 text-gray-600">
										Divide details about your product or agency work into parts.
										A paragraph describing a feature will be enough.
									</p>
								</div>
							</div>
						</div>

						<div className="px-4 w-full text-center md:w-4/12">
							<div className="relative flex flex-col mb-8 w-full min-w-0 break-words bg-white rounded-lg shadow-lg">
								<div className="flex-auto px-4 py-5">
									<div className="inline-flex items-center justify-center mb-5 p-3 w-12 h-12 text-center text-white bg-blue-400 rounded-full shadow-lg">
										<i className="fas fa-retweet"></i>
									</div>
									<h6 className="text-xl font-semibold">Free Revisions</h6>
									<p className="mb-4 mt-2 text-gray-600">
										Keep you user engaged by providing meaningful information.
										Remember that by this time, the user is curious.
									</p>
								</div>
							</div>
						</div>

						<div className="pt-6 px-4 w-full text-center md:w-4/12">
							<div className="relative flex flex-col mb-8 w-full min-w-0 break-words bg-white rounded-lg shadow-lg">
								<div className="flex-auto px-4 py-5">
									<div className="inline-flex items-center justify-center mb-5 p-3 w-12 h-12 text-center text-white bg-green-400 rounded-full shadow-lg">
										<i className="fas fa-fingerprint"></i>
									</div>
									<h6 className="text-xl font-semibold">Verified Company</h6>
									<p className="mb-4 mt-2 text-gray-600">
										Write a few lines about each one. A paragraph describing a
										feature will be enough. Keep you user engaged!
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap items-center mt-32">
						<div className="ml-auto mr-auto px-4 w-full md:w-5/12">
							<div className="inline-flex items-center justify-center mb-6 p-3 w-16 h-16 text-center text-gray-600 bg-gray-100 rounded-full shadow-lg">
								<i className="fas fa-user-friends text-xl"></i>
							</div>
							<h3 className="mb-2 text-3xl font-semibold leading-normal">
								Working with us is a pleasure
							</h3>
							<p className="mb-4 mt-4 text-gray-700 text-lg font-light leading-relaxed">
								Don't let your uses guess by attaching tooltips and popoves to
								any element. Just make sure you enable them first via
								JavaScript.
							</p>
							<p className="mb-4 mt-0 text-gray-700 text-lg font-light leading-relaxed">
								The kit comes with three pre-built pages to help you get started
								faster. You can change the text and images and you're good to
								go. Just make sure you enable them first via JavaScript.
							</p>
							<a
								href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
								className="mt-8 text-gray-800 font-bold"
							>
								Check Tailwind Starter Kit!
							</a>
						</div>

						<div className="ml-auto mr-auto px-4 w-full md:w-4/12">
							<div className="relative flex flex-col mb-6 w-full min-w-0 break-words bg-pink-600 rounded-lg shadow-lg">
								<img
									alt="..."
									src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
									className="align-middle w-full rounded-t-lg"
								/>
								<blockquote className="relative mb-4 p-8">
									<svg
										preserveAspectRatio="none"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 583 95"
										className="absolute left-0 block w-full"
										style={{
											height: '95px',
											top: '-94px',
										}}
									>
										<polygon
											points="-30,95 583,95 583,65"
											className="text-pink-600 fill-current"
										></polygon>
									</svg>
									<h4 className="text-white text-xl font-bold">
										Top Notch Services
									</h4>
									<p className="text-md mt-2 text-white font-light">
										The Arctic Ocean freezes every winter and much of the
										sea-ice then thaws every summer, and that process will
										continue whatever happens.
									</p>
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative py-20">
				<div
					className="absolute bottom-auto left-0 right-0 top-0 -mt-20 w-full pointer-events-none overflow-hidden"
					style={{ height: '80px', transform: 'translateZ(0)' }}
				>
					<svg
						className="absolute bottom-0 overflow-hidden"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						version="1.1"
						viewBox="0 0 2560 100"
						x="0"
						y="0"
					>
						<polygon
							className="text-white fill-current"
							points="2560 0 2560 100 0 100"
						></polygon>
					</svg>
				</div>

				<div className="container mx-auto px-4">
					<div className="flex flex-wrap items-center">
						<div className="ml-auto mr-auto px-4 w-full md:w-4/12">
							<img
								alt="..."
								className="max-w-full rounded-lg shadow-lg"
								src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
							/>
						</div>
						<div className="ml-auto mr-auto px-4 w-full md:w-5/12">
							<div className="md:pr-12">
								<div className="inline-flex items-center justify-center mb-6 p-3 w-16 h-16 text-center text-pink-600 bg-pink-300 rounded-full shadow-lg">
									<i className="fas fa-rocket text-xl"></i>
								</div>
								<h3 className="text-3xl font-semibold">A growing company</h3>
								<p className="mt-4 text-gray-600 text-lg leading-relaxed">
									The extension comes with three pre-built pages to help you get
									started faster. You can change the text and images and you're
									good to go.
								</p>
								<ul className="mt-6 list-none">
									<li className="py-2">
										<div className="flex items-center">
											<div>
												<span className="inline-block mr-3 px-2 py-1 text-pink-600 text-xs font-semibold bg-pink-200 rounded-full uppercase">
													<i className="fas fa-fingerprint"></i>
												</span>
											</div>
											<div>
												<h4 className="text-gray-600">
													Carefully crafted components
												</h4>
											</div>
										</div>
									</li>
									<li className="py-2">
										<div className="flex items-center">
											<div>
												<span className="inline-block mr-3 px-2 py-1 text-pink-600 text-xs font-semibold bg-pink-200 rounded-full uppercase">
													<i className="fab fa-html5"></i>
												</span>
											</div>
											<div>
												<h4 className="text-gray-600">Amazing page examples</h4>
											</div>
										</div>
									</li>
									<li className="py-2">
										<div className="flex items-center">
											<div>
												<span className="inline-block mr-3 px-2 py-1 text-pink-600 text-xs font-semibold bg-pink-200 rounded-full uppercase">
													<i className="far fa-paper-plane"></i>
												</span>
											</div>
											<div>
												<h4 className="text-gray-600">Dynamic components</h4>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="pb-48 pt-20">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap justify-center mb-24 text-center">
						<div className="px-4 w-full lg:w-6/12">
							<h2 className="text-4xl font-semibold">Here are our heroes</h2>
							<p className="m-4 text-gray-600 text-lg leading-relaxed">
								According to the National Oceanic and Atmospheric
								Administration, Ted, Scambos, NSIDClead scentist, puts the
								potentially record maximum.
							</p>
						</div>
					</div>
					<div className="flex flex-wrap">
						<div className="mb-12 px-4 w-full md:w-6/12 lg:mb-0 lg:w-3/12">
							<div className="px-6">
								<img
									alt="..."
									src="assets/img/team-1-800x800.jpg"
									className="mx-auto max-w-full rounded-full shadow-lg"
									style={{ maxWidth: '120px' }}
								/>
								<div className="pt-6 text-center">
									<h5 className="text-xl font-bold">Ryan Tompson</h5>
									<p className="mt-1 text-gray-500 text-sm font-semibold uppercase">
										Web Developer
									</p>
									<div className="mt-6">
										<button
											className="mb-1 mr-1 w-8 h-8 text-white bg-blue-400 rounded-full outline-none focus:outline-none"
											type="button"
										>
											<i className="fab fa-twitter"></i>
										</button>
										<button
											className="mb-1 mr-1 w-8 h-8 text-white bg-blue-600 rounded-full outline-none focus:outline-none"
											type="button"
										>
											<i className="fab fa-facebook-f"></i>
										</button>
										<button
											className="mb-1 mr-1 w-8 h-8 text-white bg-pink-500 rounded-full outline-none focus:outline-none"
											type="button"
										>
											<i className="fab fa-dribbble"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="mb-12 px-4 w-full md:w-6/12 lg:mb-0 lg:w-3/12">
							<div className="px-6">
								<img
									alt="..."
									src="assets/img/team-2-800x800.jpg"
									className="mx-auto max-w-full rounded-full shadow-lg"
									style={{ maxWidth: '120px' }}
								/>
								<div className="pt-6 text-center">
									<h5 className="text-xl font-bold">Romina Hadid</h5>
									<p className="mt-1 text-gray-500 text-sm font-semibold uppercase">
										Marketing Specialist
									</p>
									<div className="mt-6">
										<button
											className="mb-1 mr-1 w-8 h-8 text-white bg-red-600 rounded-full outline-none focus:outline-none"
											type="button"
										>
											<i className="fab fa-google"></i>
										</button>
										<button
											className="mb-1 mr-1 w-8 h-8 text-white bg-blue-600 rounded-full outline-none focus:outline-none"
											type="button"
										>
											<i className="fab fa-facebook-f"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="mb-12 px-4 w-full md:w-6/12 lg:mb-0 lg:w-3/12">
							<div className="px-6">
								<img
									alt="..."
									src="assets/img/team-3-800x800.jpg"
									className="mx-auto max-w-full rounded-full shadow-lg"
									style={{ maxWidth: '120px' }}
								/>
								<div className="pt-6 text-center">
									<h5 className="text-xl font-bold">Alexa Smith</h5>
									<p className="mt-1 text-gray-500 text-sm font-semibold uppercase">
										UI/UX Designer
									</p>
									<div className="mt-6">
										<button
											className="mb-1 mr-1 w-8 h-8 text-white bg-red-600 rounded-full outline-none focus:outline-none"
											type="button"
										>
											<i className="fab fa-google"></i>
										</button>
										<button
											className="mb-1 mr-1 w-8 h-8 text-white bg-blue-400 rounded-full outline-none focus:outline-none"
											type="button"
										>
											<i className="fab fa-twitter"></i>
										</button>
										<button
											className="mb-1 mr-1 w-8 h-8 text-white bg-gray-800 rounded-full outline-none focus:outline-none"
											type="button"
										>
											<i className="fab fa-instagram"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="mb-12 px-4 w-full md:w-6/12 lg:mb-0 lg:w-3/12">
							<div className="px-6">
								<img
									alt="..."
									src="assets/img/team-4-470x470.png"
									className="mx-auto max-w-full rounded-full shadow-lg"
									style={{ maxWidth: '120px' }}
								/>
								<div className="pt-6 text-center">
									<h5 className="text-xl font-bold">Jenna Kardi</h5>
									<p className="mt-1 text-gray-500 text-sm font-semibold uppercase">
										Founder and CEO
									</p>
									<div className="mt-6">
										<button
											className="mb-1 mr-1 w-8 h-8 text-white bg-pink-500 rounded-full outline-none focus:outline-none"
											type="button"
										>
											<i className="fab fa-dribbble"></i>
										</button>
										<button
											className="mb-1 mr-1 w-8 h-8 text-white bg-red-600 rounded-full outline-none focus:outline-none"
											type="button"
										>
											<i className="fab fa-google"></i>
										</button>
										<button
											className="mb-1 mr-1 w-8 h-8 text-white bg-blue-400 rounded-full outline-none focus:outline-none"
											type="button"
										>
											<i className="fab fa-twitter"></i>
										</button>
										<button
											className="mb-1 mr-1 w-8 h-8 text-white bg-gray-800 rounded-full outline-none focus:outline-none"
											type="button"
										>
											<i className="fab fa-instagram"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="relative block pb-20 bg-gray-900">
				<div
					className="absolute bottom-auto left-0 right-0 top-0 -mt-20 w-full pointer-events-none overflow-hidden"
					style={{ height: '80px', transform: 'translateZ(0)' }}
				>
					<svg
						className="absolute bottom-0 overflow-hidden"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						version="1.1"
						viewBox="0 0 2560 100"
						x="0"
						y="0"
					>
						<polygon
							className="text-gray-900 fill-current"
							points="2560 0 2560 100 0 100"
						></polygon>
					</svg>
				</div>

				<div className="container mx-auto px-4 lg:pb-64 lg:pt-24">
					<div className="flex flex-wrap justify-center text-center">
						<div className="px-4 w-full lg:w-6/12">
							<h2 className="text-white text-4xl font-semibold">
								Build something
							</h2>
							<p className="mb-4 mt-4 text-gray-500 text-lg leading-relaxed">
								Put the potentially record low maximum sea ice extent tihs year
								down to low ice. According to the National Oceanic and
								Atmospheric Administration, Ted, Scambos.
							</p>
						</div>
					</div>
					<div className="flex flex-wrap justify-center mt-12">
						<div className="px-4 w-full text-center lg:w-3/12">
							<div className="inline-flex items-center justify-center p-3 w-12 h-12 text-gray-900 bg-white rounded-full shadow-lg">
								<i className="fas fa-medal text-xl"></i>
							</div>
							<h6 className="mt-5 text-white text-xl font-semibold">
								Excelent Services
							</h6>
							<p className="mb-4 mt-2 text-gray-500">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
						<div className="px-4 w-full text-center lg:w-3/12">
							<div className="inline-flex items-center justify-center p-3 w-12 h-12 text-gray-900 bg-white rounded-full shadow-lg">
								<i className="fas fa-poll text-xl"></i>
							</div>
							<h5 className="mt-5 text-white text-xl font-semibold">
								Grow your market
							</h5>
							<p className="mb-4 mt-2 text-gray-500">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
						<div className="px-4 w-full text-center lg:w-3/12">
							<div className="inline-flex items-center justify-center p-3 w-12 h-12 text-gray-900 bg-white rounded-full shadow-lg">
								<i className="fas fa-lightbulb text-xl"></i>
							</div>
							<h5 className="mt-5 text-white text-xl font-semibold">
								Launch time
							</h5>
							<p className="mb-4 mt-2 text-gray-500">
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="relative block py-24 bg-gray-900 lg:pt-0">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap justify-center -mt-48 lg:-mt-64">
						<div className="px-4 w-full lg:w-6/12">
							<div className="relative flex flex-col mb-6 w-full min-w-0 break-words bg-gray-300 rounded-lg shadow-lg">
								<div className="flex-auto p-5 lg:p-10">
									<h4 className="text-2xl font-semibold">
										Want to work with us?
									</h4>
									<p className="mb-4 mt-1 text-gray-600 leading-relaxed">
										Complete this form and we will get back to you in 24 hours.
									</p>
									<div className="relative mb-3 mt-8 w-full">
										<label
											className="block mb-2 text-gray-700 text-xs font-bold uppercase"
											htmlFor="full-name"
										>
											Full Name
										</label>
										<input
											type="text"
											className="placeholder-gray-400 focus:shadow-outline px-3 py-3 w-full text-gray-700 text-sm bg-white rounded focus:outline-none shadow"
											placeholder="Full Name"
											style={{ transition: 'all .15s ease' }}
										/>
									</div>

									<div className="relative mb-3 w-full">
										<label
											className="block mb-2 text-gray-700 text-xs font-bold uppercase"
											htmlFor="email"
										>
											Email
										</label>
										<input
											type="email"
											className="placeholder-gray-400 focus:shadow-outline px-3 py-3 w-full text-gray-700 text-sm bg-white rounded focus:outline-none shadow"
											placeholder="Email"
											style={{ transition: 'all .15s ease' }}
										/>
									</div>

									<div className="relative mb-3 w-full">
										<label
											className="block mb-2 text-gray-700 text-xs font-bold uppercase"
											htmlFor="message"
										>
											Message
										</label>
										<textarea
											rows="4"
											cols="80"
											className="placeholder-gray-400 focus:shadow-outline px-3 py-3 w-full text-gray-700 text-sm bg-white rounded focus:outline-none shadow"
											placeholder="Type a message..."
										/>
									</div>
									<div className="mt-6 text-center">
										<button
											className="mb-1 mr-1 px-6 py-3 text-white text-sm font-bold active:bg-gray-700 bg-gray-900 rounded outline-none focus:outline-none shadow hover:shadow-lg uppercase"
											type="button"
											style={{ transition: 'all .15s ease' }}
										>
											Send Message
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

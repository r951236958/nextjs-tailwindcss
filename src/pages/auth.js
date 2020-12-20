import FirebaseAuth from 'components/FirebaseAuth'
import Layout from 'components/layout'
import React from 'react'

const Auth = () => {
	return (
		<Layout>
			<div className="flex items-center p-4 min-h-screen bg-gray-100 bg-opacity-10 rounded-lg lg:justify-center">
				<div className="max flex flex-col bg-white rounded-md shadow-lg overflow-hidden md:flex-1 md:flex-row lg:max-w-screen-md">
					<div className="p-4 py-6 text-white bg-blue-500 md:flex md:flex-col md:flex-shrink-0 md:items-center md:justify-evenly md:w-80">
						<div className="my-3 text-center text-4xl font-bold tracking-wider">
							<a href="#">K-WD</a>
						</div>
						<p className="mt-6 text-center text-gray-300 font-normal md:mt-0">
							With the power of K-WD, you can now focus only on functionaries
							for your digital products, while leaving the UI design on us!
						</p>
						<p className="flex flex-col items-center justify-center mt-10 text-center">
							<span>Don't have an account?</span>
							<a href="#" className="underline">
								Get Started!
							</a>
						</p>
						<p className="mt-6 text-center text-gray-300 text-sm">
							Read our{' '}
							<a href="#" className="underline">
								terms
							</a>{' '}
							and{' '}
							<a href="#" className="underline">
								conditions
							</a>
						</p>
					</div>
					<div className="p-5 bg-white md:flex-1">
						<h3 className="my-4 text-gray-700 text-2xl font-semibold">
							Account Login
						</h3>
						<form action="#" className="flex flex-col space-y-5">
							<div className="flex flex-col space-y-1">
								<label
									htmlFor="email"
									className="text-gray-500 text-sm font-semibold"
								>
									Email address
								</label>
								<input
									type="email"
									id="email"
									autofocus
									className="px-4 py-2 border border-gray-300 focus:border-transparent rounded focus:outline-none transition duration-300 focus:ring-blue-200 focus:ring-4"
								/>
							</div>
							<div className="flex flex-col space-y-1">
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="text-gray-500 text-sm font-semibold"
									>
										Password
									</label>
									<a
										href="#"
										className="text-blue-600 focus:text-blue-800 hover:underline text-sm"
									>
										Forgot Password?
									</a>
								</div>
								<input
									type="password"
									id="password"
									className="px-4 py-2 border border-gray-300 focus:border-transparent rounded focus:outline-none transition duration-300 focus:ring-blue-200 focus:ring-4"
								/>
							</div>
							<div className="flex items-center space-x-2">
								<input
									type="checkbox"
									id="remember"
									className="w-4 h-4 rounded focus:outline-none transition duration-300 focus:ring-blue-200 focus:ring-offset-0 focus:ring-2"
								/>
								<label
									htmlFor="remember"
									className="text-gray-500 text-sm font-semibold"
								>
									Remember me
								</label>
							</div>
							<div>
								<button
									type="submit"
									className="px-4 py-2 w-full text-white text-lg font-semibold bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none shadow transition-colors duration-300 focus:ring-blue-200 focus:ring-4"
								>
									Log in
								</button>
							</div>
							<div className="flex flex-col space-y-5">
								<span className="flex items-center justify-center space-x-2">
									<span className="w-14 h-px bg-gray-400" />
									<span className="text-gray-500 font-normal">
										or login with
									</span>
									<span className="w-14 h-px bg-gray-400" />
								</span>
								<div className="flex flex-col space-y-4">
									<FirebaseAuth />
									<a
										href="#"
										className="group flex items-center justify-center px-4 py-2 hover:bg-gray-800 border border-gray-800 rounded-md focus:outline-none space-x-2 transition-colors duration-300"
									>
										<span>
											<svg
												className="w-5 h-5 text-gray-800 group-hover:text-white fill-current"
												viewBox="0 0 16 16"
												version="1.1"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
												/>
											</svg>
										</span>
										<span className="text-gray-800 group-hover:text-white text-sm font-medium">
											Github
										</span>
									</a>
									<a
										href="#"
										className="group flex items-center justify-center px-4 py-2 hover:bg-blue-500 border border-blue-500 rounded-md focus:outline-none space-x-2 transition-colors duration-300"
									>
										<span>
											<svg
												className="text-blue-500 group-hover:text-white"
												width={20}
												height={20}
												fill="currentColor"
											>
												<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
											</svg>
										</span>
										<span className="text-blue-500 group-hover:text-white text-sm font-medium">
											Twitter
										</span>
									</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Auth

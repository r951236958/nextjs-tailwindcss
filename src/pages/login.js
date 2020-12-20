import FirebaseAuth from 'components/FirebaseAuth'
import Layout from 'components/layout.js'
import React from 'react'

export default function Login() {
	return (
		<Layout>
			<div className="flex content-center items-center justify-center pt-20 h-full">
				<div className="px-4 w-full lg:w-4/12">
					<div className="relative flex flex-col mb-6 w-full min-w-0 break-words bg-gray-300 border-0 rounded-lg shadow-lg">
						<div className="mb-0 px-6 py-6 rounded-t">
							<div className="mb-3 text-center">
								<h6 className="text-gray-600 text-sm font-bold">
									Sign in with
								</h6>
							</div>
							<div className="btn-wrapper text-center">
								<FirebaseAuth />
								<button
									className="inline-flex items-center mb-1 mr-2 px-4 py-2 text-gray-800 text-xs font-bold active:bg-gray-100 bg-white rounded outline-none focus:outline-none shadow hover:shadow-md uppercase"
									type="button"
									style={{ transition: 'all .15s ease' }}
								>
									<img
										alt="..."
										className="mr-1 w-5"
										src="assets/img/github.svg"
									/>
									Github
								</button>
								<button
									className="inline-flex items-center mb-1 mr-1 px-4 py-2 text-gray-800 text-xs font-bold active:bg-gray-100 bg-white rounded outline-none focus:outline-none shadow hover:shadow-md uppercase"
									type="button"
									style={{ transition: 'all .15s ease' }}
								>
									<img
										alt="..."
										className="mr-1 w-5"
										src="assets/img/google.svg"
									/>
									Google
								</button>
							</div>
							<hr className="mt-6 border-b-1 border-gray-400" />
						</div>
						<div className="flex-auto pt-0 px-4 py-10 lg:px-10">
							<div className="mb-3 text-center text-gray-500 font-bold">
								<small>Or sign in with credentials</small>
							</div>
							<form>
								<div className="relative mb-3 w-full">
									<label
										className="block mb-2 text-gray-700 text-xs font-bold uppercase"
										htmlFor="grid-password"
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
										htmlFor="grid-password"
									>
										Password
									</label>
									<input
										type="password"
										className="placeholder-gray-400 focus:shadow-outline px-3 py-3 w-full text-gray-700 text-sm bg-white rounded focus:outline-none shadow"
										placeholder="Password"
										style={{ transition: 'all .15s ease' }}
									/>
								</div>
								<div>
									<label className="inline-flex items-center cursor-pointer">
										<input
											id="customCheckLogin"
											type="checkbox"
											className="form-checkbox ml-1 w-5 h-5 text-gray-800"
											style={{ transition: 'all .15s ease' }}
										/>
										<span className="ml-2 text-gray-700 text-sm font-semibold">
											Remember me
										</span>
									</label>
								</div>

								<div className="mt-6 text-center">
									<button
										className="mb-1 mr-1 px-6 py-3 w-full text-white text-sm font-bold active:bg-gray-700 bg-gray-900 rounded outline-none focus:outline-none shadow hover:shadow-lg uppercase"
										type="button"
										style={{ transition: 'all .15s ease' }}
									>
										Sign In
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="flex flex-wrap mt-6">
						<div className="w-1/2">
							<a
								href="#pablo"
								onClick={e => e.preventDefault()}
								className="text-gray-300"
							>
								<small>Forgot password?</small>
							</a>
						</div>
						<div className="w-1/2 text-right">
							<a
								href="#pablo"
								onClick={e => e.preventDefault()}
								className="text-gray-300"
							>
								<small>Create new account</small>
							</a>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

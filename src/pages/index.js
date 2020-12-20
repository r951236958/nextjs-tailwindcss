import Layout from 'components/layout'
import Icons from 'components/icons'
//import Button from 'components/Button'
import Button from '@material-ui/core/Button'
import Switches from 'components/switches'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useUser } from 'utils/auth/useUser'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url, token) =>
	fetch(url, {
		method: 'GET',
		headers: new Headers({ 'Content-Type': 'application/json', token }),
		credentials: 'same-origin',
	}).then(res => res.json())

export default function Index() {
	const { user, logout } = useUser()
	const { data, error } = useSWR(
		user ? ['/api/getFood', user.token] : null,
		fetcher
	)
	if (!user) {
		return (
			<Layout>
				<div className="relative mx-auto pb-32 pt-16">
					<div className="flex flex-col items-center justify-center h-full">
						<div className="px-4 w-full lg:w-4/12">
							<div className="relative px-4 w-full">
								<div className="py-10">
									<h1 className="text-white text-5xl">Hi there!</h1>
								</div>
								<p className="flex flex-row my-4 text-white">
									You are not signed in.{' '}
								</p>

								<p className="flex flex-col items-start text-white space-y-4">
									<Link href={'/login'}>
										<a className="btn-teal-outline flex-auto">Sign in</a>
									</Link>
									<button
										className="flex px-3 py-3 border border-teal-400 rounded-md"
										href="https://github.com/r951236958/nextjs-tailwindcss/"
										target="_blank"
										rel="noreferrer"
									>
										<FontAwesomeIcon
											icon={faGithub}
											className="inline-block justify-center mr-2 h-6"
										/>
										Button
									</button>
									<Button
										className="flex-auto"
										variant="outlined"
										color="primary"
										to="/about"
									>
										primary
									</Button>
									<Button
										className="flex-auto"
										variant="contained"
										color="secondary"
										startIcon={<FontAwesomeIcon icon={faGithub} />}
									>
										Delete
									</Button>
								</p>
							</div>
						</div>
						<div className="block w-full">
							<div className="grid gap-4 grid-cols-3 justify-center mx-auto my-6 p-4 w-full text-center bg-gray-600 bg-opacity-50 lg:grid-cols-10 lg:w-2/3">
								<Icons
									iconstyle="text-3xl text-green-600"
									icon="move_to_inbox"
								/>
								<Icons icon="palette" />
								<Icons
									iconstyle="text-5xl text-yellow-400"
									icon="description"
								/>
								<Icons icon="get_app" />
								<Icons
									iconstyle="text-2xl text-blue-400"
									icon="favorite_border"
								/>
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
							<div className="justify-center mx-auto my-6 p-4 w-full h-auto text-center bg-gray-600 bg-opacity-50 lg:w-2/3">
								<Switches />
								<div>
									<Button variant="outlined" color="primary">
										primary
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
	return (
		<Layout>
			<div className="flex content-center items-center justify-center h-full">
				<div className="px-4 w-full lg:w-1/2">
					<div className="relative px-4 w-full">
						<div className="mx-auto my-4 h-96">
							<div className="py-10">
								<h1 className="text-white text-3xl">
									Firebase authentication with a serverless API
								</h1>
							</div>
							<p className="my-4 text-white">
								Go to{' '}
								<a
									className="text-yellow-400 hover:text-yellow-500 hover:underline text-xl"
									href={`https://github.com/vercel/next.js/tree/canary/examples/with-firebase-authentication`}
								>
									Example
								</a>{' '}
								how to use.
							</p>
						</div>

						<div>
							<div className="my-4">
								<p className="flex items-start my-4 text-white">
									You're signed in. Email: {user.email}
								</p>
								<div className="flex items-end xs:ml-auto max-w-xs xs:max-w-xs">
									<a
										className="px-3 py-2 text-center text-white text-lg font-medium leading-6 hover:bg-gray-800 border border-teal-400 rounded-lg transition duration-150 ease-in-out"
										onClick={() => logout()}
									>
										Log out
									</a>
								</div>
							</div>
							<div className="my-4">
								{error && (
									<p className="flex items-start my-4 text-white">
										Failed to fetch food!
									</p>
								)}
								{data && !error ? (
									<div className="flex items-start my-4">
										{' '}
										<p className="text-white">
											Your favorite food is{' '}
											<span className="font-xl text-secondart m-2 px-2 font-extrabold bg-gray-100 bg-opacity-20 rounded uppercase">
												{data.food}
											</span>
											.
										</p>
									</div>
								) : (
									<div>Loading...</div>
								)}
								<div className="flex items-end xs:ml-auto max-w-xs xs:max-w-xs">
									<Link href={'/example'}>
										<a className="px-3 py-2 text-center text-white text-lg font-medium leading-6 hover:bg-gray-800 border border-teal-400 rounded-lg transition duration-150 ease-in-out">
											Another example page
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

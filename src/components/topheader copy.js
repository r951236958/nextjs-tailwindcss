import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'

// The approach used in this component shows how to built a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
const TopHeader = () => {
	const [session, loading] = useSession()

	return (
		<header>
			<div className="min-h-1/4 block w-full">
				<div className="opacity-1 top-0">
					<p className={` ${!session && loading ? `loading` : `loaded`}`}>
						{!session && (
							<>
								<span className="notSignedInText">You are not signed in</span>
								<button className="button xs:ml-auto max-w-xs xs:max-w-xs">
									<a
										href={`/api/auth/signin`}
										className="px-3 py-2 text-center text-white text-lg font-medium leading-6 hover:bg-gray-800 border border-teal-400 rounded-lg transition duration-150 ease-in-out"
										onClick={e => {
											e.preventDefault()
											signIn()
										}}
									>
										Sign in
									</a>
								</button>
							</>
						)}
						{session && (
							<>
								{session.user.image && (
									<span
										style={{ backgroundImage: `url(${session.user.image})` }}
										className="float-left bg-gray-100 bg-cover border-2 border-gray-200 rounded-3xl"
									/>
								)}
								<span className="signedInText">
									<small>Signed in as</small>
									<br />
									<strong>{session.user.email || session.user.name}</strong>
								</span>
								<a
									href={`/api/auth/signout`}
									className="button signOutButton"
									onClick={e => {
										e.preventDefault()
										signOut()
									}}
								>
									Sign out
								</a>
							</>
						)}
					</p>
				</div>
			</div>
			<nav className="my-4">
				<ul className="space-x-4">
					<li className="inline-block p-0">
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li className="inline-block p-0">
						<Link href="/client">
							<a>Client</a>
						</Link>
					</li>
					<li className="inline-block p-0">
						<Link href="/server">
							<a>Server</a>
						</Link>
					</li>
					<li className="inline-block p-0">
						<Link href="/protected">
							<a>Protected</a>
						</Link>
					</li>
					<li className="inline-block p-0">
						<Link href="/api-example">
							<a className="inline-flex items-start hover:text-teal-300 text-teal-400 text-lg font-medium leading-6 transition duration-150 ease-in-out">
								API
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default TopHeader

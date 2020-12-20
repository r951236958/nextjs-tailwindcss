import React from 'react'
import Link from 'next/link'

const Header = () => {
	return (
		<header className="min-h-1/4 mt-6 w-full">
			<nav className="my-4 pt-4">
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

export default Header

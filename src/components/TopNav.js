import React from 'react'
import Nav from './nav'

function Header({ title }) {
	const classes = useStyles()

	return (
		<div>
			<h2 style={{ align: 'center' }}>{title}</h2>
		</div>
	)
}

export const TopNav = () => (
	<div>
		<nav className="bg-gray-800">
			<div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<img
								className="w-8 h-8"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
								alt="Workflow"
							/>
						</div>
						<div className="hidden md:block">
							<div className="flex items-baseline ml-10 space-x-4">
								<a
									href="#"
									className="px-3 py-2 text-white text-sm font-medium bg-gray-900 rounded-md"
								>
									Dashboard
								</a>
								<a
									href="#"
									className="px-3 py-2 text-gray-300 hover:text-white text-sm font-medium hover:bg-gray-700 rounded-md"
								>
									Team
								</a>
								<a
									href="#"
									className="px-3 py-2 text-gray-300 hover:text-white text-sm font-medium hover:bg-gray-700 rounded-md"
								>
									Projects
								</a>
								<a
									href="#"
									className="px-3 py-2 text-gray-300 hover:text-white text-sm font-medium hover:bg-gray-700 rounded-md"
								>
									Calendar
								</a>
								<a
									href="#"
									className="px-3 py-2 text-gray-300 hover:text-white text-sm font-medium hover:bg-gray-700 rounded-md"
								>
									Reports
								</a>
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="flex items-center ml-4 md:ml-6">
							<button className="p-1 text-gray-400 hover:text-white bg-gray-800 rounded-full focus:outline-none focus:ring-white focus:ring-offset-gray-800 focus:ring-offset-2 focus:ring-2">
								<span className="sr-only">View notifications</span>
								{/* Heroicon name: bell */}
								<svg
									className="w-6 h-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/>
								</svg>
							</button>
							{/* Profile dropdown */}
							<div className="relative ml-3">
								<div>
									<button
										className="flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-white focus:ring-offset-gray-800 focus:ring-offset-2 focus:ring-2"
										id="user-menu"
										aria-haspopup="true"
									>
										<span className="sr-only">Open user menu</span>
										<img
											className="w-8 h-8 rounded-full"
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt
										/>
									</button>
								</div>
								{/*
          Profile dropdown panel, show/hide based on dropdown state.

          Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        */}
								<div
									className="absolute right-0 mt-2 py-1 w-48 bg-white rounded-md shadow-lg origin-top-right ring-black ring-opacity-5 ring-1"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="user-menu"
								>
									<a
										href="#"
										className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100"
										role="menuitem"
									>
										Your Profile
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100"
										role="menuitem"
									>
										Settings
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100"
										role="menuitem"
									>
										Sign out
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="flex -mr-2 md:hidden">
						{/* Mobile menu button */}
						<button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 bg-gray-800 rounded-md focus:outline-none focus:ring-white focus:ring-offset-gray-800 focus:ring-offset-2 focus:ring-2">
							<span className="sr-only">Open main menu</span>
							{/*
        Heroicon name: menu

        Menu open: "hidden", Menu closed: "block"
      */}
							<svg
								className="block w-6 h-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							{/*
        Heroicon name: x

        Menu open: "block", Menu closed: "hidden"
      */}
							<svg
								className="hidden w-6 h-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			{/*
Mobile menu, toggle classes based on menu state.

Open: "block", closed: "hidden"
    */}
			<div className="hidden md:hidden">
				<div className="pb-3 pt-2 px-2 space-y-1 sm:px-3">
					<a
						href="#"
						className="block px-3 py-2 text-white text-base font-medium bg-gray-900 rounded-md"
					>
						Dashboard
					</a>
					<a
						href="#"
						className="block px-3 py-2 text-gray-300 hover:text-white text-base font-medium hover:bg-gray-700 rounded-md"
					>
						Team
					</a>
					<a
						href="#"
						className="block px-3 py-2 text-gray-300 hover:text-white text-base font-medium hover:bg-gray-700 rounded-md"
					>
						Projects
					</a>
					<a
						href="#"
						className="block px-3 py-2 text-gray-300 hover:text-white text-base font-medium hover:bg-gray-700 rounded-md"
					>
						Calendar
					</a>
					<a
						href="#"
						className="block px-3 py-2 text-gray-300 hover:text-white text-base font-medium hover:bg-gray-700 rounded-md"
					>
						Reports
					</a>
				</div>
				<div className="pb-3 pt-4 border-t border-gray-700">
					<div className="flex items-center px-5">
						<div className="flex-shrink-0">
							<img
								className="w-10 h-10 rounded-full"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt
							/>
						</div>
						<div className="ml-3">
							<div className="text-white text-base font-medium leading-none">
								Tom Cook
							</div>
							<div className="text-gray-400 text-sm font-medium leading-none">
								tom@example.com
							</div>
						</div>
						<button className="flex-shrink-0 ml-auto p-1 text-gray-400 hover:text-white bg-gray-800 rounded-full focus:outline-none focus:ring-white focus:ring-offset-gray-800 focus:ring-offset-2 focus:ring-2">
							<span className="sr-only">View notifications</span>
							{/* Heroicon name: bell */}
							<svg
								className="w-6 h-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								/>
							</svg>
						</button>
					</div>
					<div className="mt-3 px-2 space-y-1">
						<a
							href="#"
							className="block px-3 py-2 text-gray-400 hover:text-white text-base font-medium hover:bg-gray-700 rounded-md"
						>
							Your Profile
						</a>
						<a
							href="#"
							className="block px-3 py-2 text-gray-400 hover:text-white text-base font-medium hover:bg-gray-700 rounded-md"
						>
							Settings
						</a>
						<a
							href="#"
							className="block px-3 py-2 text-gray-400 hover:text-white text-base font-medium hover:bg-gray-700 rounded-md"
						>
							Sign out
						</a>
					</div>
				</div>
			</div>
		</nav>
		<Nav />
		<header className="bg-white shadow">
			<div className="mx-auto px-4 py-6 max-w-7xl sm:px-6 lg:px-8">
				<h1 className="text-gray-900 text-3xl font-bold leading-tight">
					Dashboard
				</h1>
			</div>
		</header>
		<main>
			<div className="mx-auto py-6 max-w-7xl sm:px-6 lg:px-8">
				{/* Replace with your content */}
				<div className="px-4 py-6 sm:px-0">
					<div className="h-96 border-4 border-dashed border-gray-200 rounded-lg">
						test
					</div>
				</div>
				{/* /End replace */}
			</div>
		</main>
	</div>
)

export default TopNav

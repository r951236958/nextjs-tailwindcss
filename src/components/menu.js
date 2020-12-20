import React from 'react'

export default function Menu({ fixed }) {
	const [menuOpen, setMenuOpen] = React.useState(false)

	return (
		<>
			<div className="flex flex-wrap py-2">
				<div className="px-4 w-full">
					<nav className="navbar-expand-lg relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 rounded">
						<div className="container flex flex-wrap items-center justify-between mx-auto px-4">
							<div className="relative flex justify-between px-4 w-full lg:static lg:block lg:justify-start lg:w-auto">
								<a
									className="whitespace-no-wrap inline-block mr-4 py-2 text-white text-sm font-bold leading-relaxed uppercase"
									href="#pablo"
								>
									gray Starter Menu
								</a>
								<button
									className="block px-3 py-1 text-white text-xl leading-none bg-transparent border border-solid border-transparent rounded outline-none focus:outline-none cursor-pointer lg:hidden"
									type="button"
									onClick={() => setMenuOpen(!menuOpen)}
								>
									<i className="material-icons">menu</i>
								</button>
							</div>
							<div
								className={
									'lg:flex flex-grow items-center' +
									(menuOpen ? ' flex' : ' hidden')
								}
								id="example-navbar-info"
							>
								<ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
									<li className="nav-item">
										<a
											className="flex items-center px-3 py-2 text-white text-xs font-bold leading-snug hover:opacity-75 uppercase"
											href="#pablo"
										>
											<i className="material-icons leading-lg text-white text-lg opacity-75">
												language
											</i>
										</a>
									</li>
									<li className="nav-item">
										<a
											className="flex items-center px-3 py-2 text-white text-xs font-bold leading-snug hover:opacity-75 uppercase"
											href="#pablo"
										>
											<i className="material-icons leading-lg text-white text-lg opacity-75">
												person
											</i>
										</a>
									</li>
									<li className="nav-item">
										<a
											className="flex items-center px-3 py-2 text-white text-xs font-bold leading-snug hover:opacity-75 uppercase"
											href="#pablo"
										>
											<i className="material-icons leading-lg text-white text-lg opacity-75">
												settings
											</i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	)
}

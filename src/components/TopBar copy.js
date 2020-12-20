import Link from 'next/link'

const links = [
	{
		primary: 'Home',
		href: '/',
	},
	{
		primary: 'About',
		href: '/about',
	},
	{
		primary: 'Team',
		href: '/team',
	},
	{
		href: 'https://github.com/vercel/next.js',
		primary: 'GitHub',
	},
	{
		href: 'https://nextjs.org/docs',
		primary: 'Docs',
	},
]

class TopBar extends React.Component {
	constructor() {
		super()

		this.state = {
			setOpen: false,
		}

		this.setOpen = this.setOpen.bind(this)
		this.menuClose = this.menuClose.bind(this)
	}

	setOpen(event) {
		event.preventDefault()

		this.setState({ setOpen: true }, () => {
			document.addEventListener('click', this.menuClose)
		})
	}

	menuClose(event) {
		if (!this.dropdownMenu.contains(event.target)) {
			this.setState({ setOpen: false }, () => {
				document.removeEventListener('click', this.menuClose)
			})
		}
	}
	render() {
		return (
			<nav className="bg-gray-800">
				<div className="px-4 w-full">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<img className="w-8 h-8" src="/logo.svg" alt="react" />
							</div>
							<div className="hidden md:block">
								<div className="flex items-baseline ml-10 space-x-4">
									{links.map(({ href, primary }, key) => (
										<Link href={href} key={key}>
											<a className="px-3 py-2 text-gray-300 hover:text-white text-sm font-medium hover:bg-gray-700 focus:bg-gray-900 rounded-md">
												{primary}
											</a>
										</Link>
									))}
								</div>
							</div>
						</div>
						{/* 右側圖示按鈕 */}
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
											onClick={this.setOpen}
										>
											<span className="sr-only">Open user menu</span>
											<i className="material-icons text-gray-400 hover:text-white focus:outline-none focus:ring-white focus:ring-offset-gray-800 focus:ring-offset-2 focus:ring-2">
												account_circle
											</i>
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
									{/* 個人資訊選單 */}
									{this.state.setOpen ? (
										<div
											className="menu dropdown absolute right-0 mt-2 py-1 w-48 bg-white rounded-md shadow-lg origin-top-right ring-black ring-opacity-5 ring-1"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="user-menu"
											ref={element => {
												this.dropdownMenu = element
											}}
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
									) : null}
								</div>
							</div>
						</div>
						{/* Menu Button */}
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
			</nav>
		)
	}
}

export default TopBar

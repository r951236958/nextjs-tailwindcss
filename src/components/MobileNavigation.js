const links = [
	{
		href:
			'https://translate.google.com/?hl=zh-TW&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN',
		primary: 'Google翻譯',
		icon: (
			<i className="material-icons inline-block -mt-1 mx-3 w-6 h-6">
				g_translate
			</i>
		),
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1ugnB8DEgdhT5E8YbIidNcF4AI4rObaMCdSjT4qG9lp0/edit#gid=2106039647',
		primary: '日報',
		icon: (
			<i className="material-icons inline-block -mt-1 mx-3 w-6 h-6">today</i>
		),
	},
	{
		href:
			'https://docs.google.com/document/d/1v-Ttj7IFEgzA0Bo_WclSQp1nc-Ek7GPQrHZCerHK8hM/edit#heading=h.d23ii4u9uy4r',
		primary: '批注詞',
		icon: (
			<i className="material-icons inline-block -mt-1 mx-3 w-6 h-6">
				history_edu
			</i>
		),
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1cCY030BQSbDku2rkaoIjxMFN3U3ePLJSsnWG6qNHR8w/edit#gid=0',
		primary: '數據計算',
		icon: (
			<i className="material-icons inline-block -mt-1 mx-3 w-6 h-6">
				calculate
			</i>
		),
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1rcSdSl6M-ruV4bHOlzOmHvYEJFsbOxRjqVr0KXcQdCc/edit#gid=184557706',
		primary: '篩選總表',
		icon: (
			<i className="material-icons inline-block -mt-1 mx-3 w-6 h-6">
				filter_alt
			</i>
		),
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1_uNZrvOgcgTYnTA97Ygv3jJEAMCkjmTlCd4KWaeb2V8/edit#gid=0',
		primary: '匯入處理',
		icon: (
			<i className="material-icons inline-block -mt-1 mx-3 w-6 h-6">source</i>
		),
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1k9zLpIV5fNq66qujBc8cWxpvCa2nTqWScxlTmowG7Ws',
		primary: '採購部共用',
		icon: (
			<i className="material-icons inline-block -mt-1 mx-3 w-6 h-6">
				folder_shared
			</i>
		),
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1gqruDNC_8Dp3r5BEuD-lDiL8jlvb4rZMfvXWk1hrYHA',
		primary: 'Jayden共用',
		icon: (
			<i className="material-icons inline-block -mt-1 mx-3 w-6 h-6">
				folder_shared{' '}
			</i>
		),
	},
]

class MobileNavigation extends React.Component {
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
			<div className="flex items-center justify-center min-h-screen">
				<div className="flex flex-col items-center justify-center py-20 w-full">
					<nav className="bg-papaer w-84 mobile-wrap mt-4 px-4 py-4 rounded">
						<div className="navheader bg-bk p-4 w-full rounded">
							<div className="relative flex items-center justify-between">
								<div className="flex items-center justify-center">
									<i className="material-icons text-white text-2xl">menu</i>
								</div>
								<div
									className="absolute inset-y-0 flex items-center justify-center text-white font-bold"
									style={{ left: '50%', transform: 'translateX(-50%)' }}
								>
									Abstract UI
								</div>
								<div className="relative inline-block text-left">
									<div className="flex items-center justify-center">
										<i className="bx bxs-envelope material-icons text-white text-2xl">
											business_center
										</i>
										<button
											type="button"
											className="flex items-center mx-2 max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-white focus:ring-offset-gray-800 focus:ring-offset-2 focus:ring-2"
											id="dropdown-menu"
											aria-haspopup="true"
											aria-expanded="true"
											onClick={this.setOpen}
										>
											<span className="sr-only">Open user menu</span>
											<i className="material-icons text-gray-400 hover:text-white text-2xl focus:outline-none focus:ring-white focus:ring-offset-gray-800 focus:ring-offset-2 focus:ring-2">
												account_circle
											</i>
										</button>
									</div>
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
						<div className="hidden mt-4">
							<input
								type="search"
								placeholder="Search"
								className="px-4 py-2 w-full bg-white rounded"
							/>
						</div>
						<div
							className="my-5"
							style={{ marginLeft: '2.5rem', marginRight: '2.5rem' }}
						>
							<ul className="">
								{links.map(({ href, primary, icon }) => (
									<li
										key={`${href}${primary}`}
										className="hover:bg-white hover:bg-opacity-10 rounded-md"
									>
										<a
											href={href}
											target="_blank"
											rel="noopener"
											underline="none"
											className="text-md inline-block mx-2 my-1 py-2 w-full h-full hover:text-gray-200 text-white"
										>
											{icon}
											{primary}
										</a>
									</li>
								))}
							</ul>
						</div>
					</nav>
				</div>
			</div>
		)
	}
}

export default MobileNavigation

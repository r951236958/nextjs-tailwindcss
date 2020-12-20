import Layout from 'components/layout'
import React from 'react'

const links = [
	{
		href:
			'https://translate.google.com/?hl=zh-TW&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN',
		primary: 'Google翻譯',
		icon: <i className="material-icons -mt-1 mx-3 w-6 h-6">g_translate</i>,
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1ugnB8DEgdhT5E8YbIidNcF4AI4rObaMCdSjT4qG9lp0/edit#gid=2106039647',
		primary: '日報',
		icon: <i className="material-icons -mt-1 mx-3 w-6 h-6">today</i>,
	},
	{
		href:
			'https://docs.google.com/document/d/1v-Ttj7IFEgzA0Bo_WclSQp1nc-Ek7GPQrHZCerHK8hM/edit#heading=h.d23ii4u9uy4r',
		primary: '批注詞',
		icon: <i className="material-icons -mt-1 mx-3 w-6 h-6">history_edu</i>,
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1cCY030BQSbDku2rkaoIjxMFN3U3ePLJSsnWG6qNHR8w/edit#gid=0',
		primary: '數據計算',
		icon: <i className="material-icons -mt-1 mx-3 w-6 h-6">calculate</i>,
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1rcSdSl6M-ruV4bHOlzOmHvYEJFsbOxRjqVr0KXcQdCc/edit#gid=184557706',
		primary: '篩選總表',
		icon: <i className="material-icons -mt-1 mx-3 w-6 h-6">filter_alt</i>,
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1_uNZrvOgcgTYnTA97Ygv3jJEAMCkjmTlCd4KWaeb2V8/edit#gid=0',
		primary: '匯入處理',
		icon: <i className="material-icons -mt-1 mx-3 w-6 h-6">source</i>,
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1k9zLpIV5fNq66qujBc8cWxpvCa2nTqWScxlTmowG7Ws',
		primary: '採購部共用',
		icon: <i className="material-icons -mt-1 mx-3 w-6 h-6">folder_shared</i>,
	},
	{
		href:
			'https://docs.google.com/spreadsheets/d/1gqruDNC_8Dp3r5BEuD-lDiL8jlvb4rZMfvXWk1hrYHA',
		primary: 'Jayden共用',
		icon: <i className="material-icons -mt-1 mx-3 w-6 h-6">folder_shared</i>,
	},
]

class Mobile extends React.Component {
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
			<Layout>
				<div className="mobile-wrap flex content-center items-center justify-center h-full">
					<div className="px-2 w-full lg:w-4/12">
						<div className="relative flex flex-col mb-6 w-full min-w-0 break-words border-0 rounded-lg shadow-lg">
							<div className="flex items-center justify-center min-h-screen">
								<div className="flex flex-col items-center justify-center w-full">
									<ul className="py-10 bg-gray-700 bg-opacity-60 rounded-xl divide-y">
										{links.map(({ href, primary, icon }) => (
											<li key={`${href}${primary}`} className="mx-6">
												<a
													href={href}
													target="_blank"
													rel="noopener"
													underline="none"
													className="text-md flex items-center px-4 py-3 w-full h-full text-gray-100 hover:text-yellow-400 hover:bg-gray-100 hover:bg-opacity-10 rounded-md"
												>
													{icon}
													{primary}
												</a>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}

export default Mobile

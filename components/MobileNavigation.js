const links = [
  {
    href:
      'https://translate.google.com/?hl=zh-TW&tab=TT#view=home&op=translate&sl=auto&tl=zh-CN',
    primary: 'Google翻譯',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mx-3">
        g_translate
      </i>
    ),
  },
  {
    href:
      'https://docs.google.com/spreadsheets/d/1ugnB8DEgdhT5E8YbIidNcF4AI4rObaMCdSjT4qG9lp0/edit#gid=2106039647',
    primary: '日報',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mx-3">today</i>
    ),
  },
  {
    href:
      'https://docs.google.com/document/d/1v-Ttj7IFEgzA0Bo_WclSQp1nc-Ek7GPQrHZCerHK8hM/edit#heading=h.d23ii4u9uy4r',
    primary: '批注詞',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mx-3">
        history_edu
      </i>
    ),
  },
  {
    href:
      'https://docs.google.com/spreadsheets/d/1cCY030BQSbDku2rkaoIjxMFN3U3ePLJSsnWG6qNHR8w/edit#gid=0',
    primary: '數據計算',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mx-3">
        calculate
      </i>
    ),
  },
  {
    href:
      'https://docs.google.com/spreadsheets/d/1rcSdSl6M-ruV4bHOlzOmHvYEJFsbOxRjqVr0KXcQdCc/edit#gid=184557706',
    primary: '篩選總表',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mx-3">
        filter_alt
      </i>
    ),
  },
  {
    href:
      'https://docs.google.com/spreadsheets/d/1_uNZrvOgcgTYnTA97Ygv3jJEAMCkjmTlCd4KWaeb2V8/edit#gid=0',
    primary: '匯入處理',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mx-3">source</i>
    ),
  },
  {
    href:
      'https://docs.google.com/spreadsheets/d/1k9zLpIV5fNq66qujBc8cWxpvCa2nTqWScxlTmowG7Ws',
    primary: '採購部共用',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mx-3">
        folder_shared
      </i>
    ),
  },
  {
    href:
      'https://docs.google.com/spreadsheets/d/1gqruDNC_8Dp3r5BEuD-lDiL8jlvb4rZMfvXWk1hrYHA',
    primary: 'Jayden共用',
    icon: (
      <i className="material-icons inline-block h-6 w-6 -mt-1 mx-3">
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col justify-center items-center w-full py-20">
          <nav className="bg-papaer px-4 py-4 rounded mt-4 w-84 mobile-wrap">
            <div className="navheader w-full p-4 bg-bk rounded">
              <div className="relative flex items-center justify-between">
                <div className="flex items-center justify-center">
                  <i className="text-white text-2xl material-icons">menu</i>
                </div>
                <div
                  className="font-bold text-white absolute inset-y-0 flex items-center justify-center"
                  style={{ left: '50%', transform: 'translateX(-50%)' }}
                >
                  Abstract UI
                </div>
                <div className="relative inline-block text-left">
                <div className="flex items-center justify-center">
                  <i className="bx bxs-envelope text-white text-2xl material-icons">
                    business_center
                  </i>
                  <button
                  type="button"
                      className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white  mx-2"
                      id="dropdown-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                      onClick={this.setOpen}
                    >
                      <span className="sr-only">Open user menu</span>
                      <i className="material-icons text-2xl text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        account_circle
                      </i>
                    </button>
                </div>
                {this.state.setOpen ? (
                    <div
                      className="menu origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 dropdown"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                      ref={(element) => {
                        this.dropdownMenu = element
                      }}
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Settings
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </div>
                    
                  ) : null}
              </div>
              </div>
              
            </div>
            <div className="mt-4 hidden ">
              <input
                type="search"
                placeholder="Search"
                className="bg-white px-4 py-2 w-full rounded"
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
                      className="inline-block w-full h-full text-white hover:text-gray-200 text-md py-2 mx-2 my-1"
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

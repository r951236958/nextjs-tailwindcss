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
                <img className="h-8 w-8" src="/logo.svg" alt="react" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {links.map(({ href, primary }, key) => (
                    <Link href={href} key={key}>
                      <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-900">
                        {primary}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* 右側圖示按鈕 */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  {/* Heroicon name: bell */}
                  <svg
                    className="h-6 w-6"
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
                <div className="ml-3 relative">
                  <div>
                    <button
                      className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-haspopup="true"
                      onClick={this.setOpen}
                    >
                      <span className="sr-only">Open user menu</span>
                      <i className="material-icons text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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
            {/* Menu Button */}
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {/*
        Heroicon name: menu

        Menu open: "hidden", Menu closed: "block"
      */}
                <svg
                  className="block h-6 w-6"
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
                  className="hidden h-6 w-6"
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

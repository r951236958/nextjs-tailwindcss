import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="min-h-1/4 w-full mt-6">
      <nav className="my-4 pt-4">
        <ul className="space-x-4">
          <li className="p-0 inline-block">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="p-0 inline-block">
            <Link href="/client">
              <a>Client</a>
            </Link>
          </li>
          <li className="p-0 inline-block">
            <Link href="/server">
              <a>Server</a>
            </Link>
          </li>
          <li className="p-0 inline-block">
            <Link href="/protected">
              <a>Protected</a>
            </Link>
          </li>
          <li className="p-0 inline-block">
            <Link href="/api-example">
              <a className="inline-flex items-start text-lg leading-6 font-medium text-teal-400 hover:text-teal-300 transition ease-in-out duration-150">
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

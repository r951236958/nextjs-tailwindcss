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
      <div className="block min-h-1/4 w-full">
        <div className="opacity-1 top-0">
          <p className={` ${!session && loading ? `loading` : `loaded`}`}>
            {!session && (
              <>
                <span className="notSignedInText">You are not signed in</span>
                <button className="button max-w-xs xs:ml-auto xs:max-w-xs">
                  <a
                    href={`/api/auth/signin`}
                    className=" text-center rounded-lg border border-teal-400 px-3 py-2 text-lg leading-6 font-medium text-white hover:bg-gray-800 transition ease-in-out duration-150"
                    onClick={(e) => {
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
                    className="rounded-3xl float-left bg-gray-100 bg-cover border-2 border-gray-200"
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
                  onClick={(e) => {
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

export default TopHeader

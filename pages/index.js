import React from 'react'
import Layout from '../components/layout'
import useSWR from 'swr'
import Link from 'next/link'
import { useUser } from '../utils/auth/useUser'

const fetcher = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  }).then((res) => res.json())

export default function Index() {
  const { user, logout } = useUser()
  const { data, error } = useSWR(
    user ? ['/api/getFood', user.token] : null,
    fetcher
  )
  if (!user) {
    return (
      <Layout>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="py-10">
              <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
                Hi there!
              </h1>
            </div>
            <p className="text-white my-4">You are not signed in. </p>
            <Link href={'/login'}>
              <a className="btn-outline">Sign in</a>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
  return (
    <Layout>
      <div className="relative max-w-7xl mx-auto pt-16 pb-32 sm:px-6 lg:px-8">
        <div className="w-full lg:w-6/12 ml-auto mr-auto mx-auto px-4 h-96">
          <div className="py-10">
            <h1 className="text-white text-3xl">
              Firebase authentication with a serverless API
            </h1>
          </div>
          <p className="text-white my-4">
            Go to{' '}
            <a
              className="text-gold hover:text-yellow-200 hover:underline text-xl"
              href={`https://github.com/vercel/next.js/tree/canary/examples/with-firebase-authentication`}
            >
              Example
            </a>{' '}
            how to use.
          </p>
        </div>

        <div>
          <div className="my-4">
            <p className="flex items-start text-white my-4">
              You're signed in. Email: {user.email}
            </p>
            <div className="flex items-end max-w-xs xs:ml-auto xs:max-w-xs ">
              <a className="btn-outline" onClick={() => logout()}>
                Log out
              </a>
            </div>
          </div>
          <div className="my-4">
            {error && (
              <p className="flex items-start text-white my-4">
                Failed to fetch food!
              </p>
            )}
            {data && !error ? (
              <div className="flex items-start my-4">
                {' '}
                <p className="text-white">
                  Your favorite food is{' '}
                  <span className="uppercase font-extrabold font-xl text-secondart bg-gray-100 bg-opacity-20 m-2 px-2 rounded">
                    {data.food}
                  </span>
                  .
                </p>
              </div>
            ) : (
              <div>Loading...</div>
            )}
            <div className="flex items-end max-w-xs xs:ml-auto xs:max-w-xs">
              <Link href={'/example'}>
                <a className="btn-outline">Another example page</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

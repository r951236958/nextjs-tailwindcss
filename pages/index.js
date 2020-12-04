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

export default function Page() {
  const { user, logout } = useUser()
  const { data, error } = useSWR(
    user ? ['/api/getFood', user.token] : null,
    fetcher
  )
  if (!user) {
    return (
      <Layout>
        <h1 className="text-white text-3xl">Hi there!</h1>
        <p className="text-white my-4">
          You are not signed in.{' '}
          <Link href={'/auth'}>
            <a className="btn-outline">Sign in</a>
          </Link>
        </p>
      </Layout>
    )
  }
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 border-4 border-dashed border-gray-200 rounded-lg">
        <div className="my-4 mx-auto  h-96">
          <h1 className="text-white text-3xl">
            Firebase authentication with a serverless API
          </h1>

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

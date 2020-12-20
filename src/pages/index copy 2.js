import Layout from 'components/layout'
import { useUser } from 'utils/auth/useUser'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url, token) =>
	fetch(url, {
		method: 'GET',
		headers: new Headers({ 'Content-Type': 'application/json', token }),
		credentials: 'same-origin',
	}).then(res => res.json())

export default function Page() {
	const { user, logout } = useUser()
	const { data, error } = useSWR(
		user ? ['/api/getFood', user.token] : null,
		fetcher
	)
	if (!user) {
		return (
			<>
				<p>Hi there!</p>
				<p>
					You are not signed in.{' '}
					<Link href={'/auth'}>
						<a>Sign in</a>
					</Link>
				</p>
			</>
		)
	}
	return (
		<Layout>
			<div className="mx-auto py-6 max-w-7xl border-4 border-dashed border-gray-200 rounded-lg sm:px-6 lg:px-8">
				<div className="mx-auto my-4 h-96">
					<h1 className="text-white text-3xl">
						Firebase authentication with a serverless API
					</h1>

					<p className="my-4 text-white">
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
			</div>
		</Layout>
	)
}

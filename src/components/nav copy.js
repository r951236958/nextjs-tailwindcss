import Link from 'next/link'
import Button from './Button'

const links = [
	{
		href: 'https://github.com/vercel/next.js',
		primary: 'GitHub',
	},
	{
		href: 'https://nextjs.org/docs',
		primary: 'Docs',
	},
	{
		primary: 'Home',
		href: '/',
	},
	{
		primary: 'About',
		href: '/about',
	},
]

export default function Nav() {
	return (
		<nav>
			<ul className="flex items-center justify-between p-8">
				<li>
					<Link href="/">
						<a className="text-accent-1 dark:text-blue-300 text-blue-500 no-underline">
							Home
						</a>
					</Link>
				</li>
				<ul className="flex items-center justify-between space-x-4">
					{links.map(({ href, primary }) => (
						<li key={`${href}${primary}`}>
							<a href={href} className="btn-blue no-underline">
								{primary}
							</a>
						</li>
					))}
					{links.map(({ href, primary }) => (
						<li key={`${href}${primary}`}>
							<Button href={href} primary={primary} />
						</li>
					))}
				</ul>
			</ul>
		</nav>
	)
}

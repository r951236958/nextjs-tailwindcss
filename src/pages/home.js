//import Nav from '../components/nav'
import Button from 'components/Button'
import Hero from 'components/Hero'
import Layout from 'components/layout'
import Link from 'next/link'

const links = [
	{
		home: {
			href: '/',
			primary: 'Home',
		},
	},
	{
		about: {
			href: '/about',
			primary: 'About',
		},
	},
]

export default function Home() {
	return (
		<Layout>
			<div className="py-10">
				<h1 className="text-center dark:text-gray-100 text-gray-700 text-5xl">
					Next.js + Tailwind CSS 2.0
				</h1>
			</div>
			<div className="my-10">
				<div className="my-10">
					<div className="my-6 text-center rounded-xl">
						<div className="xs:ml-auto max-w-xs xs:max-w-xs">
							<Link href="/about">
								<a className="px-3 py-2 text-center text-white text-lg font-medium leading-6 hover:bg-gray-800 border border-teal-400 rounded-lg transition duration-150 ease-in-out">
									About
								</a>
							</Link>
						</div>
					</div>
					<div className="m-5 text-center">
						<Button href="/" primary="Home" />
					</div>
				</div>
				<div className="mdc-component mdc-component__buttons mt-10">
					<p>Buttons</p>

					<div className="mdc-component__containers">
						<div className="mdc-component__containers__primary">
							<button className="mdc-button mdc-button--raised">
								<div className="mdc-button__ripple"></div>
								<span className="mdc-button__label">Button</span>
							</button>
							<button className="mdc-fab material-icons" aria-label="Add">
								<span className="mdc-fab__icon">add</span>
							</button>
							<button
								id="add-to-favorites"
								className="mdc-icon-button"
								aria-label="Add to favorites"
								aria-pressed="false"
							>
								<i className="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">
									favorite
								</i>
								<i className="material-icons mdc-icon-button__icon">
									favorite_border
								</i>
							</button>
						</div>
					</div>
				</div>
			</div>
			<Hero />
		</Layout>
	)
}

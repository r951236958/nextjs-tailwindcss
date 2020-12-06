//import Nav from '../components/nav'
import Link from 'next/link'
import Button from '../components/Button'
import Hero from '../components/Hero'
import Layout from '../components/layout'

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
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Next.js + Tailwind CSS 2.0
        </h1>
      </div>
      <div className="my-10">
        <div className="my-10">
          <div className="my-6 rounded-xl text-center">
            <div className="max-w-xs xs:ml-auto xs:max-w-xs">
              <Link href="/about">
                <a className="text-center rounded-lg border border-teal-400 px-3 py-2 text-lg leading-6 font-medium text-white hover:bg-gray-800 transition ease-in-out duration-150">
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

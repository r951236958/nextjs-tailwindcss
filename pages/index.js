import Nav from '../components/nav'
import Hero from '../components/Hero'
import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Next.js + Tailwind CSS 2.0
        </h1>
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
        </div>
      </div>
      <Hero />
    </div>
  )
}

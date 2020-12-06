import Link from 'next/link'
import { version } from '../package.json'

export default function Footer() {
  return (
    <footer className="mt-8 ">
      <hr />
      <ul className="space-x-4 px-5 py-1 my-4">
        <li className="my-2 p-0 inline-block nav-item">
          <a
            className="px-3 py-2 flex items-center uppercase leading-snug text-white hover:opacity-75"
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars"
          >
            tailwind starter kit
          </a>
        </li>
        <li className="my-2 p-0 inline-block nav-item">
          <a href="https://www.npmjs.com/package/next-auth">NPM</a>
        </li>
        <li className="my-2 p-0 inline-block">
          <a href="https://github.com/nextauthjs/next-auth-example">GitHub</a>
        </li>
        <li className="my-2 p-0 inline-block nav-item">
          <Link href="/policy">
            <a>Policy</a>
          </Link>
        </li>
        <li className="my-2 p-0 inline-block">
          <em>{version}</em>
        </li>
      </ul>
    </footer>
  )
}

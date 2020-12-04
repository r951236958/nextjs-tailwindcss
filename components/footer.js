import Link from 'next/link'
import { version } from '../package.json'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className="mt-8 ">
      <hr />
      <ul className="space-x-4 px-5 py-1 my-4">
        <li className="my-2 p-0 inline-block">
          <a href="https://next-auth.js.org">Documentation</a>
        </li>
        <li className="my-2 p-0 inline-block">
          <a href="https://www.npmjs.com/package/next-auth">NPM</a>
        </li>
        <li className="my-2 p-0 inline-block">
          <a href="https://github.com/nextauthjs/next-auth-example">GitHub</a>
        </li>
        <li className="my-2 p-0 inline-block">
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

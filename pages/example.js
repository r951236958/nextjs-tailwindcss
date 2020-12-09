import Link from 'next/link'
import Layout from '../components/layout'

const Example = (props) => {
  return (
    <Layout>
      <div className="flex content-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full px-4">
            <h1 className="text-5xl text-center text-gray-700 dark:text-white py-10">
              Example
            </h1>
         

          <p className="my-4 text-white w-full p-4">
            This page is static because it does not fetch any data or include
            the authed user info.
          </p>

          <Link href={'/'}>
            <a className="text-center rounded-lg border border-teal-400 px-3 py-2 text-lg leading-6 font-medium text-white hover:bg-gray-800 transition ease-in-out duration-150">
              Home
            </a>
          </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Example

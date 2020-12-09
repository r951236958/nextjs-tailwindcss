import Link from 'next/link'
import Layout from '../components/layout'

const Example = (props) => {
  return (
    <Layout>
      <div className="py-10">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          Example
        </h1>
      </div>
      <p className="my-4">
        This page is static because it does not fetch any data or include the
        authed user info.
      </p>
      <Link href={'/'}>
        <a className="text-center rounded-lg border border-teal-400 px-3 py-2 text-lg leading-6 font-medium text-white hover:bg-gray-800 transition ease-in-out duration-150">Home</a>
      </Link>
    </Layout>
  )
}

export default Example

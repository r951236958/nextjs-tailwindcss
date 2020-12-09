import Link from 'next/link'
import Layout from '../components/layout'

const Example = (props) => {
  return (
    <Layout>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div className="py-10">
            <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
              Example
            </h1>
          </div>
          <p className="my-4">
            This page is static because it does not fetch any data or include
            the authed user info.
          </p>
          <Link href={'/'}>
            <a className="btn-dark">Home</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Example

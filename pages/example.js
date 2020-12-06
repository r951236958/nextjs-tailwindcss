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
        <a className="btn-dark">Home</a>
      </Link>
    </Layout>
  )
}

export default Example

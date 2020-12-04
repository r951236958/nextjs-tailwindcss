import Layout from '../components/layout'

export default function Page() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 border-4 border-dashed border-gray-200 rounded-lg">
        <div className="my-4 mx-auto  h-96">
          <h1 className="text-white text-3xl">NextAuth.js Example</h1>

          <p className="text-white my-4">
            This is an example site to demonstrate how to use{' '}
            <a
              className="text-gold hover:text-yellow-200 hover:underline text-xl"
              href={`https://next-auth.js.org`}
            >
              NextAuth.js
            </a>{' '}
            for authentication.
          </p>
        </div>
      </div>
    </Layout>
  )
}

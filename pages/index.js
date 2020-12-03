import Layout from '../components/layout'

export default function Page () {
  return (
    <Layout>
    <h1 className="text-white text-2xl">NextAuth.js Example</h1>

      <p className="text-white my-4">
        This is an example site to demonstrate how to use <a className="text-gold hover:text-yellow-200 hover:underline text-xl" href={`https://next-auth.js.org`}>NextAuth.js</a> for authentication.
      </p>
    </Layout>
  )
}
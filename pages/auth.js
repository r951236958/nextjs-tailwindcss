import FirebaseAuth from '@components/FirebaseAuth'
import Layout from '@components/layout'

const Auth = () => {
  return (
    <Layout>
      <div className="text-white my-4">
        <h1 className="text-white text-3xl">Sign in</h1>
        <div className="text-white my-4">
          <FirebaseAuth />
        </div>
      </div>
    </Layout>
  )
}

export default Auth

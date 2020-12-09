import { useSession } from 'next-auth/client'
import Layout from '../components/layout'

const Profile = () => {
  const [session, loading] = useSession()

  if (loading) return <div>loading...</div>
  if (!session) return <div>no session</div>

  return (
    <Layout>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
        {session && (
          <>
            <img src={session.user.image} className="avatar" />
            <h1>{session.user.name}</h1>
          </>
        )}
      </div>
      <style jsx>{`
        .avatar {
          width: 220px;
          border-radius: 10px;
        }
      `}</style>
    </Layout>
  )
}

export default Profile

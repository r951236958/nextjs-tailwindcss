//import Nav from '../components/nav'
//import Link from 'next/link'
//import Button from '../components/Button'
//import Hero from '../components/Hero'
//import TopBar from '../components/TopBar'
//import SideBar from '../components/SideBar'
import { signIn, signOut, useSession } from 'next-auth/client'
import MobileNavigation from '../components/MobileNavigation'

const links = [
  {
    home: {
      href: '/',
      primary: 'Home',
    },
  },
  {
    about: {
      href: '/about',
      primary: 'About',
    },
  },
]

export default function IndexPage() {
  const [ session, loading ] = useSession()

  return (
    <>
    <MobileNavigation />
    {!session && <>
      Not signed in <br/>
      <button onClick={signIn}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={signOut}>Sign out</button>
    </>}
    </>
  )
}
  




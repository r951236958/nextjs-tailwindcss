//import Nav from '../components/nav'
//import Link from 'next/link'
//import Button from '../components/Button'
//import Hero from '../components/Hero'
//import TopBar from '../components/TopBar'
import MobileNavigation from '../components/MobileNavigation'
//import SideBar from '../components/SideBar'

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

  return (
    <>
    <MobileNavigation />
    </>
  )
}
  




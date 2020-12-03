import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Next Auth App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className="container">{children}</main>
    <Footer/>
  </div>
);

export default Layout;
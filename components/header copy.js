import { signin, signout, useSession } from 'next-auth/client';
import Link from 'next/link';

const Header = () => {
  const [session, loading] = useSession();

  return (
    <header>
      <nav>
        <Link href="/">
          <a className="logo">
            <span className="text-mdcpink">N</span>
            <span className="text-lightblue">A</span>
            <span className="text-lightgreen">A</span>
          </a>
        </Link>

        <p>
          {!session && (
            <a
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signin();
              }}
            >
              <button className="signInButton">Sign in</button>
            </a>
          )}
          {session && (
            <>
              <Link href="/profile">
                <a>
                  <span
                    style={{ backgroundImage: `url(${session.user.image})` }}
                    className="avatar"
                  />
                </a>
              </Link>
              <span className="email">{session.user.email}</span>
              <a
                href="/api/auth/signout"
                onClick={(e) => {
                  e.preventDefault();
                  signout();
                }}
              >
                <button className="signOutButton">Sign out</button>
              </a>
            </>
          )}
        </p>
      </nav>

      
    </header>
  );
};

export default Header;
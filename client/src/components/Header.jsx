import { Link } from 'react-router-dom';
import Auth from "../utils/auth";
import "./Header.css"

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }

  return (
    <>
    <header className="header">
      <a href="/" className="home"> Shopping </a>
      <section className="links">
        {Auth.loggedIn() ? (
              <>
                <Link to="/me">
                  <button>
                    My Profile
                  </button>              
                </Link>
                <button onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  Login
                </Link>
                <Link to="/signup">
                  Signup
                </Link>
              </>
            )}
      </section>
    </header>
    </>
  )
};
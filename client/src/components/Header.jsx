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
              <section className="loggedIn-btn">
                <Link to="/me" >
                  <button className="profile" > 👤 </button>
                </Link>

                {/* Logout needs to redirect to homepage */}
                <button onClick={logout} className="logout">
                  ➡️
                </button>
              </section>
              </>
            ) : (
              <>
                <Link to="/login" className="login">
                  Login
                </Link>
                <Link to="/signup" className="signup">
                  Signup
                </Link>
              </>
            )}
      </section>
    </header>
    </>
  )
};
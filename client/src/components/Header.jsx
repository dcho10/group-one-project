import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Auth from "../utils/auth";
import "./Header.css"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    setIsLoggedIn(false);
    navigate("/");
  }
  
  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(Auth.loggedIn());
    };

    window.addEventListener("authChange", handleAuthChange);
    
    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  return (
    <>
    <header className="header">
      <a href="/" className="home"> Vintage Vault </a>
      <section className="links">
        {isLoggedIn ? (
              <section className="loggedIn-btn">
                <Link to="/profiles/me">
                  <button className="profile">👤</button>
                </Link>

                <button onClick={logout} className="logout">
                  ➡️
                </button>
              </section>
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
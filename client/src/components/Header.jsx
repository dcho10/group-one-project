import { Link } from 'react-router-dom';
import Auth from "../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
   <header>
    <div>
          {Auth.loggedIn() ? (
            <>
            {Auth.getProfile().data.username}'s profile
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
        </div> 
       </header>
  );
};

export default Header;

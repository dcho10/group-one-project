import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer >
       <div>
        {location.pathname !== '/' && (
          <button onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
          
        )}
         <h4>&copy; {new Date().getFullYear()}</h4>
        </div>
    </footer>
  );
};

export default Footer;

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
        </div>
    </footer>
  );
};

export default Footer;

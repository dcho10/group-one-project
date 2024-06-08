import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer >
       <section>
        {location.pathname !== '/' && (
          <button onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        </section>
    </footer>
  );
};

export default Footer;

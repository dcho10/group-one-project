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
<<<<<<< HEAD
        </section>
=======
         <h4>&copy; {new Date().getFullYear()}</h4>
        </div>
>>>>>>> 336665a8eccfb0986299742caced15298fd65336
    </footer>
  );
};

export default Footer;

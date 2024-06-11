import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations'; 
import Auth from '../utils/auth'; 
import "./Login.css"
 
const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const navigate = useNavigate(); 
 
  const handleChange = (event) => {
    const { name, value } = event.target;
 
    setFormState({
      ...formState,
      [name]: value,
    });
  };
 
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)
    
    try {
      const { data } = await login({
        variables: { ...formState },
      });
 
      Auth.login(data.login.token);

      navigate("/confirm");
    } catch (e) {
      console.error(e);
    }
    
   
    setFormState({
      email: '',
      password: ''
    });
  };
 
  return (
    <main>
      <section className="login-container">
        <section className="login-content">
          <h4>Login</h4>
          <section>
            <form onSubmit={handleFormSubmit} className="login-form">
              <h5> Email </h5>
              <input
                className="form-input"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <h5> Password </h5>
              <input
                className="form-input"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <section className="buttons">
                <button
                  className="login-btn"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Login
                </button>

                <Link to="/signup">
                  <button
                    className="signup-btn"
                    style={{ cursor: 'pointer' }}
                    type="button"
                  >
                    Signup
                  </button>
                </Link>
              </section>
            </form>

            {error && (
              <section className="form-error">
                {error.message}
              </section>
            )}
          </section>
        </section>
      </section>
    </main>
  );};

export default Login;

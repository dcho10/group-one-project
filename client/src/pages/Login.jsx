import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import "./Login.css"

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
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
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
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
            )}

            {error && (
              <section>
                {error.message}
              </section>
            )}
          </section>
        </section>
      </section>
    </main>
  );
};

export default Login;

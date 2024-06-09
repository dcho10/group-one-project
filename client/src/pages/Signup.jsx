import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import "./Signup.css"

const Signup = () => {
  const [formState, setFormState] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <section className="signup-container">
        <section className="signup-content">
          <h4>Sign Up</h4>
          <section>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit} className="signup-card">
                <h5> Username </h5>
                <input
                  placeholder="Username"
                  name="userName"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <h5> Email </h5>
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <h5> Password </h5>
                <input
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <section className="buttons">
                  <button
                    className="submit-signup"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Sign Up
                  </button>

                  <Link to="/login">
                    <button
                      className="login-btn"
                      style={{ cursor: 'pointer' }}
                      type="submit"
                    >
                      Go Back
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

export default Signup;

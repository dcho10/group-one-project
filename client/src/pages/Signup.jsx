import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import "./Signup.css";

const Signup = () => {
  const [formState, setFormState] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);
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

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      
      navigate("/confirm");
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
            <form onSubmit={handleFormSubmit} className="signup-card">
              <h5> Username </h5>
              <input
                className="form-input"
                placeholder="Username"
                name="userName"
                type="text"
                value={formState.userName}
                onChange={handleChange}
              />
              <h5> Email </h5>
              <input
                className="form-input"
                placeholder="Email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <h5> Password </h5>
              <input
                className="form-input"
                placeholder="Password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />

              <section className="signup-login">
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
                    type="button"
                  >
                    Login
                  </button>
                </Link>
              </section>
              {error && (
                <section className="form-error">
                  {error.message}
                </section>
              )}
            </form>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Signup;

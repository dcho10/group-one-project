import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import Checkbox from "../components/Checkbox"

import "./Signup.css"

const Signup = () => {
  const [formState, setFormState] = useState({
    userName: '',
    email: '',
    password: '',
    isSeller: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

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
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);

      // Condition to navigate based on what the user has selected (i.e. seller = "/sell", buyer = "/buy")
      navigate("/")
    } catch (e) {
      console.error(e);
    }
  };

  const handleCheckboxChangeOne = () => {
    setCheckedOne(!checkedOne)
    setCheckedTwo(false)
  };

  const handleCheckboxChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
    setCheckedOne(false);
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
                  value={formState.name}
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
                <section className="checkbox">
                  <section>
                    <Checkbox
                      label="Buyer"
                      value={checkedOne}
                      onChange={handleCheckboxChangeOne}
                    />
                  </section>
                  
                  <section>
                    <Checkbox
                      label="Seller"
                      value={checkedTwo}
                      onChange={handleCheckboxChangeTwo}
                    />
                  </section>
                </section>

                <section className="signup-login">
                  <button
                    className="submit-signup"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Sign Up
                  </button>

                  {/* After signup the user should be redirected to confirmation page */}
                  <Link to="/login">
                    <button
                      className="login-btn"
                      style={{ cursor: 'pointer' }}
                      type="submit"
                    >
                      Login
                    </button>
                  </Link>

                </section>
              </form>
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

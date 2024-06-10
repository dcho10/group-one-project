import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Checkbox from "../components/Checkbox";
import "./Signup.css";

const Signup = () => {
  const [formState, setFormState] = useState({
    userName: '',
    email: '',
    password: '',
    isSeller: null,
  });
  const [addUser, { error }] = useMutation(ADD_USER);
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [formError, setFormError] = useState(null);
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

    if (formState.isSeller === null) {
      setFormError("Please select whether you are a buyer or seller.");
      return;
    }

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      
      if (formState.isSeller) {
        navigate("/sell");
      } else {
        navigate("/buy");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleCheckboxChangeOne = () => {
    setCheckedOne(!checkedOne);
    setCheckedTwo(false);
    setFormState({ ...formState, isSeller: false });
    setFormError(null);
  };

  const handleCheckboxChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
    setCheckedOne(false);
    setFormState({ ...formState, isSeller: true });
    setFormError(null);
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
              {formError && (
                <section className="form-error">
                  {formError}
                </section>
              )}
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

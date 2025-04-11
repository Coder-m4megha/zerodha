// frontend/src/landing_page/auth/Signup.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signup } from "../../utils/authUtils";
import { useCookies } from "react-cookie";

const Signup = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['token']);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

    // In frontend/src/landing_page/auth/Signup.js, update the handleSubmit function:

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const data = await signup(email, password, username);
    const { success, message } = data;

    if (success) {
      // Save the token in cookies if it's included in the response
      if (data.token) {
        setCookie('token', data.token, { path: '/', maxAge: 3600 * 24 * 7 }); // 7 days expiry
      }

      handleSuccess(message);
      setTimeout(() => {
        // Redirect to dashboard login after successful signup
        console.log('Redirecting to dashboard login page...');
        window.location.href = "http://localhost:3000/login";

        // Show a message to the user about the redirection
        toast.info('Redirecting to dashboard login page...', {
          position: "top-center",
          autoClose: 1000
        });
      }, 1500);
    } else {
      handleError(message);
    }
  } catch (error) {
    console.log(error);
    handleError("An error occurred. Please try again.");
  }

  setInputValue({
    ...inputValue,
    email: "",
    password: "",
    username: "",
  });
};




  return (
    <div className="form_container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
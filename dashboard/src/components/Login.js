// dashboard/src/components/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../utils/authUtils";
import { useCookies } from "react-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['token']);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      const { success, message, token } = data;

      if (success) {
        // Save the token in both cookies and localStorage
        if (token) {
          setCookie('token', token, { path: '/', maxAge: 3600 * 24 * 7 }); // 7 days expiry
          localStorage.setItem('token', token);
          console.log('Token saved:', token);
        } else {
          console.warn('No token received from server');
        }

        handleSuccess(message);
        console.log('Login successful, redirecting to dashboard...');

        // Use window.location for a full page refresh to ensure the token is used
        setTimeout(() => {
          console.log('Redirecting to dashboard home...');
          // Show a message to the user about the redirection
          toast.info('Login successful! Opening dashboard...', {
            position: "top-center",
            autoClose: 1000
          });

          // Force a full page reload to ensure the token is used
          window.location.href = window.location.origin + '/';
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
    });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to Dashboard</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
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
          <div className="form-group">
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
          <button type="submit" className="login-button">Login</button>
          <div className="form-footer">
            <span>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </span>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
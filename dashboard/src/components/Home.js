// dashboard/src/components/Home.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { verifyUser } from "../utils/authUtils";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['token']);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      console.log('Checking authentication...');
      // Check for token in cookies or localStorage
      const token = cookies.token || localStorage.getItem('token');
      console.log('Token found:', !!token);

      if (!token) {
        console.log('No token found, redirecting to login');
        setLoading(false);
        navigate("/login");
        return;
      }

      // If token is in localStorage but not in cookies, set it in cookies
      if (!cookies.token && localStorage.getItem('token')) {
        console.log('Setting token from localStorage to cookies');
        setCookie('token', localStorage.getItem('token'), { path: '/', maxAge: 3600 * 24 * 7 });
      }

      try {
        console.log('Verifying user with token...');
        const data = await verifyUser();
        console.log('Verification response:', data);
        const { status, user } = data;

        if (status) {
          console.log('User authenticated:', user);
          setIsAuthenticated(true);
          setUsername(user);
          localStorage.setItem('username', user);
        } else {
          console.log('Authentication failed, redirecting to login');
          navigate("/login");
        }
      } catch (error) {
        console.error("Authentication error:", error);
        toast.error('Authentication failed. Please log in again.', {
          position: "top-center",
          autoClose: 5000
        });
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [cookies.token, navigate, setCookie]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // If authenticated, render the dashboard
  if (isAuthenticated) {
    console.log('User is authenticated, rendering Dashboard');
    return (
      <>
        <TopBar />
        <Dashboard />
        <ToastContainer />
      </>
    );
  }

  // If not authenticated and not loading, show a message
  console.log('User is not authenticated, showing login message');
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Please log in to access the dashboard</h2>
        <button
          onClick={() => navigate('/login')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3f7ee8',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Go to Login
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
import React, { createContext, useState, useEffect } from 'react';
import api from '../../utils/api';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(['token']);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verify user authentication status on component mount
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await api.post(
          "/",
          {}
        );

        const { status, user } = data;
        if (status) {
          setUser(user);
        } else {
          removeCookie("token");
        }
      } catch (error) {
        console.error("Authentication error:", error);
        removeCookie("token");
      }

      setLoading(false);
    };

    verifyUser();
  }, [cookies.token, removeCookie]);

  // Login function
  // const login = async (email, password) => {
  //   try {
  //     const { data } = await api.post(
  //       "/login",
  //       { email, password }
  //     );

  //     return data;
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     throw error;
  //   }
  // };

  // Signup function
  const signup = async (email, password, username) => {
    try {
      const { data } = await api.post(
        "/signup",
        { email, password, username }
      );

      return data;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  // Logout function
  // const logout = () => {
  //   removeCookie("token");
  //   setUser(null);
  //   navigate("/");
  // };

  return (
    <AuthContext.Provider
      value={{
        user,
        // login,
        signup,
        // logout,
        isAuthenticated: !!cookies.token,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

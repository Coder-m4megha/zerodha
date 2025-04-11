// frontend/src/utils/authUtils.js
import axios from 'axios';

// Create an axios instance for authentication
const authAPI = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const login = async (email, password) => {
  try {
    const { data } = await authAPI.post('/login', { email, password });
    // If the server returns a token, store it in localStorage as a backup
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const signup = async (email, password, username) => {
  try {
    const { data } = await authAPI.post('/signup', { email, password, username });
    // If the server returns a token, store it in localStorage as a backup
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    return data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};

export const verifyUser = async () => {
  try {
    const { data } = await authAPI.post('/', {});
    return data;
  } catch (error) {
    console.error('Verification error:', error);
    throw error;
  }
};

export default authAPI;
// dashboard/src/utils/authUtils.js
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
    // Get token from localStorage as a backup
    const token = localStorage.getItem('token');
    console.log('Token from localStorage:', token ? 'exists' : 'not found');

    // Add token to headers if it exists in localStorage but not in cookies
    const headers = token ? { 'Authorization': `Bearer ${token}` } : {};

    console.log('Sending verification request with token...');
    const { data } = await authAPI.post('/', {}, { headers });
    console.log('Verify user response:', data);

    // If verification was successful, ensure token is in localStorage
    if (data.status && token) {
      console.log('User verified successfully, ensuring token is saved');
      localStorage.setItem('token', token);
    }

    return data;
  } catch (error) {
    console.error('Verification error:', error);
    throw error;
  }
};

export default authAPI;
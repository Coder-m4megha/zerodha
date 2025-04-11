import axios from 'axios';

// Create an axios instance with retry logic
const authAPI = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000 // 5 second timeout
});

// Add interceptor to handle errors
authAPI.interceptors.response.use(
  response => response,
  error => {
    console.log('API Error:', error.message);
    if (error.message === 'Network Error') {
      console.log('Server may not be running. Please check if the server is started on port 4000.');
    }
    return Promise.reject(error);
  }
);

export const signup = async (username, email, password) => {
  try {
    const { data } = await authAPI.post('/signup', { username, email, password });
    return data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const { data } = await authAPI.post('/login', { email, password });
    return data;
  } catch (error) {
    console.error('Login error:', error);
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

import axios from 'axios';
import { toast } from 'react-toastify';

/**
 * Checks if the authentication server is running
 * @returns {Promise<boolean>} True if server is running, false otherwise
 */
export const checkServerRunning = async () => {
  try {
    await axios.get('http://localhost:4000', { timeout: 2000 });
    return true;
  } catch (error) {
    if (error.message === 'Network Error' || error.code === 'ECONNREFUSED') {
      toast.error(
        'Authentication server is not running. Please start the server with the following steps:',
        { position: 'top-center', autoClose: false }
      );
      
      toast.info(
        '1. Open a terminal/command prompt\n2. Navigate to the server folder\n3. Run: npm start',
        { position: 'top-center', autoClose: false }
      );
      
      return false;
    }
    return true; // Server is running but returned an error
  }
};

export default checkServerRunning;

const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  console.log('Cookies received:', req.cookies);
  console.log('Headers:', req.headers);

  // Check for token in cookies
  let token = req.cookies.token;

  // If not in cookies, check Authorization header
  if (!token && req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1];
    console.log('Token found in Authorization header');
  }

  if (!token) {
    console.log('No token found in cookies or headers');
    return res.json({ status: false, message: 'No token provided' });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      console.error('Token verification error:', err.message);
      return res.json({ status: false, message: 'Invalid token' });
    } else {
      try {
        const user = await User.findById(data.id);
        if (user) {
          console.log('User authenticated:', user.username);
          return res.json({ status: true, user: user.username });
        } else {
          console.log('User not found with ID:', data.id);
          return res.json({ status: false, message: 'User not found' });
        }
      } catch (error) {
        console.error('Database error:', error.message);
        return res.json({ status: false, message: 'Database error' });
      }
    }
  })
}
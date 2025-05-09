import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate import करें

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate हुक का उपयोग करें

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/signup', { username, email, password }) // Replace with your client URL
            .then(res => {
                // Handle successful signup
                console.log(res.data);
                // Redirect to dashboard
                navigate('/dashboard'); // डैशबोर्ड पर रीडायरेक्ट करें
            })
            .catch(err => {
                // Handle signup error
                console.error(err);
                // Show error message to the user
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;
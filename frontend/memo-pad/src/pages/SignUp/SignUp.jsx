import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Password from '../../components/inputpassword/Password';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';
import './signup.css';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError('Please enter your name');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    if (!password) {
      setError('Please enter your password');
      return;
    }

    setError('');

    // Signup API call
    try {
      const response = await axiosInstance.post('/create-account', {
        fullName: name,
        email: email,
        password: password,
      });

      // Handle successful registration
      if (response.data && response.data.error) {
        setError(response.data.message);
        return;
      }

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate('/dashboard');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className='signup-container'>
        <div className='signup-card'>
          <form onSubmit={handleSignUp}>
            <h4 className='signup-title'>Sign Up</h4>
            <input
              type='text'
              placeholder='Name'
              className='input-box'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='text'
              placeholder='Email'
              className='input-box'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className='error-message'>{error}</p>}
            <button type='submit' className='btn-primary'>Register</button>
            <p className='signup-link'>
              Already registered? {' '}
              <Link to="/login" className='signup-link-highlight'>Login here</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp;

import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Password from '../../components/inputpassword/Password'
import { validateEmail } from '../../utils/helper'
import axiosInstance from '../../utils/axiosInstance'
import './login.css'; // Import custom CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter a password")
      return;
    }
    setError("");

    // login API call
    try {
      const response = await axiosInstance.post('/login', {
        email: email,
        password: password,
      });

      // handle successful login 
      if (response.data && response.data.accessToken) {
        localStorage.setItem('token', response.data.accessToken);
        navigate('/dashboard')
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message)
      } else {
        setError("Something went wrong, Please try again. ")
      }
    }

  };

  return (
    <>
      <Navbar />

      <div className='login-container'>
        <div className='login-box'>
          <form onSubmit={handleLogin}>
            <h4 className='login-title'>Login</h4>
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
            <button type='submit' className='btn-primary'>Login</button>
            <p className='signup-link'>
              Not registered yet? {""}
              <Link to="/signup" className='signup-link-highlight'>Create an Account</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login

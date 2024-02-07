import React, { useState } from 'react';
import { JoblyApi } from '../api';
import axios  from 'axios';

const LoginForm = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = async (event, handleLogin) => {
    event.preventDefault();
    if (!formData.username || !formData.password) {
      console.error('Missing username or password');
      return;
    }
    console.log('Form data:', formData);
    try {
      const payload = {
        username: formData.username,
        password: formData.password,
      };
      console.log('Request payload:', payload);
      const response = await JoblyApi.login(payload);
      console.log('Request headers:', axios.defaults.headers);
      console.log('API response:', response);
      handleLogin();
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, handleLogin)}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;




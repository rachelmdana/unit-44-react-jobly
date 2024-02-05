import React, { useState } from 'react';
import { JoblyApi } from '../api';

const LoginForm = ({ handleLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event, handleLogin) => {
    event.preventDefault();
    try {
      await JoblyApi.login(formData.username, formData.password);
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
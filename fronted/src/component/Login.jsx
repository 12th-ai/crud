import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [credentials, setCredentials] = useState({
    name: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/login', credentials)
      .then((res) => {
        console.log('login');
        // Redirect or perform any necessary actions upon successful login
      })
      .catch((err) => {
        console.error('Login failed:', err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>login form </h1>
        <input
          type="text"
          name="name"
          placeholder="Username"
          value={credentials.name}
          onChange={handleChange}
        /> <br /> <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        /> <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import { backendUrl } from '../App';
import axios from "axios"

const Login = ({setToken}) => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("")


  const handleSubmit =async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin",  {email , password})
      if(response.data.success){
        setToken(response.data.token)
      }else{
        console.log(response.data.message)
      }
    } catch (error) {
      
    }
  };

  useEffect(()=>{
    console.log(email , password)
  } , [email , password])

  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>Please enter your credentials to login</p>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Log In</button>
      </form>
      <div className="links">
        <Link to="/forgot-password" className="link">Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Login;
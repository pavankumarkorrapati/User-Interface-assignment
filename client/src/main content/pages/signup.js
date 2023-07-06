import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import {useContext} from "react";
import UserContext from "../context/usercontext"



const fetchData = async (url, data, method) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (method !== 'GET' && method !== 'HEAD') {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  return await response.json();
};

const REGISTER = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: '',
    email:''
  });

  const { username, password,email } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => { 
    e.preventDefault();
    console.log(user);
    fetchData("/user/register", {
      username,
      email,
      password
    }, "POST")
      .then((data) => {
        if (!data.message) {
          console.log(data);
          navigate("/Profile");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="register">
      <form onSubmit={onSubmit}>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            name='username'
            onChange={onChange}
            value={username}
            required
          />
          <label htmlFor="floatingInput">Username</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            name="email"
            onChange={onChange}
            value={email}
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            name="password"
            onChange={onChange}
            value={password}
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <input type="submit" className="btn btn-primary" value="Register" />

      </form>
    </div>
  );
}

export default REGISTER;

import { fetchData } from "../../main";
import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";

const Signin= () => {
 const navigate = useNavigate();

 const [user,setUser] = useState({
username:'',
password:''

 });

 const {username,password} = user;

 const onchange = (e) => setUser({...user,[e.target.name]: e.target.value});

 const onSubmit = (e) => {
  e.preventDefault();
  console.log(user)
  fetchData("/user/login",
  {
    username,
    password
  },
  "POST")
  .then((data) => {
    if(!data.message) {
      console.log(data)
      storeInlocalStorage(data);
      navigate("/postcomment")
    }
  })
  .catch((err) => {
    console.log(err)
  })
}

 const storeInlocalStorage = (data) => {
  localStorage.setItem('user', JSON.stringify(data));
  navigate("/postcomment")
 }

  return (
    <div id="signin">
      <form onSubmit={onSubmit}>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Username"
            onChange={onchange}
            value={username}
            required
          />
          <label htmlFor="floatingInput">Username</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="Password"
            placeholder="Password"
            name="password"
            onChange={onchange}
            value={password}
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <input type="submit" className="btn btn-primary" value="Signin" />
      </form>
    </div>
  );
}

export default Signin;

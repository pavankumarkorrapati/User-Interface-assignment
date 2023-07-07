import { useState } from "react";
import React from 'react';
import {fetchData} from "../../main"
import { useNavigate } from "react-router-dom";
import {useContext} from "react";
import UserContext from "../context/usercontext"

const Profile= () => {
  const navigate = useNavigate();

  const [user,setUser] = useState({
 comment:''
 
 
  });
 
  
 
  const onchange = (e) => setUser({...user,[e.target.name]: e.target.value});
 
  const onSubmit = (e) => {
   e.preventDefault();
   fetchData("/user/delete", { id: user.id }, "DELETE")


   .then((data) => {
     if(!data.message) {
       console.log(data)
       
       navigate("/signup")
     }
   })
   .catch((err) => {
     console.log(err)
   })
 }

   return (
            <div>
        <div class="center-box w-25 m-auto mt-5">
          <div class="form-box border p-3">
          <form onSubmit={onSubmit}>
          <label for="description">DELETE ACCOUNT</label>
       <div class="form-groupone">
         
        <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" />
       </div>
       <input
  type="submit"
  className="btn btn-primary"
  value="DeleteUser"
  onChange={onchange}
/>

     </form>

        </div>
        </div>
        </div>
    );
}

export default Profile;
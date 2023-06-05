import React from 'react';
import {useParams,useLocation,useNavigate} from 'react-router-dom'


const User = () => {
  const {fname,lname}=useParams();
  const location=useLocation();
  const navigate= useNavigate();
  console.log(navigate);
  return (
    <>
      <h1>This is {fname} {lname} page</h1>
      <p>My current location is {location.pathname}</p>
      {location.pathname===`/user/shafaat/hussain`?
      <button onClick={()=> navigate("/about")}>Click Me</button>: null
      }
    </>
  )
}

export default User

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Login() {
  const navigate=useNavigate();
  const [input,setInput]=useState({
  
    email:"",
    password:""

});
const verify=()=>{
  const details=JSON.parse(localStorage.getItem('user1'));
  if(details.email===input.email && details.password===input.password){
      navigate("/");
      
  }
  else{
    alert("please leave");
  }

}
  return (
    <div>
      <input name='email'  value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})} type="email" placeholder='Your name'/>
      <input name='password' value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})} type="password" placeholder='password'/>
      <button onClick={verify}>login</button>
    </div>
  )
}

export default Login

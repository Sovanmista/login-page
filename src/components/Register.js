import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
function Register() {
  const navigate=useNavigate();
    const [input,setInput]=useState({
        name:"",
        email:"",
        password:""

    });

    const save=()=>{
      localStorage.setItem("user1",JSON.stringify(input));
      navigate("/Login");
    }
  return (
    <div>
      <input type="text" name='name' value={input.name} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})} placeholder='your name'/>
      <input type="text" name='email' value={input.email} onChange={(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
      }} id="" placeholder='your email'/>
      <input name='password' value={input.password}  type="password" onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}  id="" placeholder='password'/>
      <button onClick={save}>Register</button>
     
    </div>
  )
}

export default Register

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from '../redux/actions';
import {toast, ToastContainer} from "react-toastify"

const Signup = () => {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const formData={
        username,email,password
    }

    const dispatch =useDispatch();

    const handleClick =()=>{
        dispatch(registerRequest(formData))
    }

    const message = useSelector(state=>state.register.message);
    if(message==="User Saved Sucessfully"){
       toast.success(message) 
    }else{
        toast.error(message)
    }
  return (
    <>
    <ToastContainer/>
    <h1>Signup</h1>
    
    <div className='main'>
        <input type='text' name='username' value={username} placeholder='Enter Username' onChange={(e)=>setUsername(e.target.value)}></input>
        <input type='email' name='email' value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}></input>
        <input type='password' name='password' value={password} placeholder='Set Password' onChange={(e)=>setPassword(e.target.value)}></input>

        <button onClick={handleClick}>Register</button>
    </div>
    </>
  )
}

export default Signup
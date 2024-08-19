import React from 'react'
import { useRef } from 'react'
import '../../App.css'
import axios from 'axios'

const Login = () => {
  const handleSubmit= async(e)=>{
    e.preventDefault();
    
    const email=formRef.current.querySelector("input[type='email']")
    const password=formRef.current.querySelector("input[type='password']")
    try{
     const response =await axios.post(`http://localhost:8082/api/auth/login`,{
        email:email.value,
        password:password.value,
     })
     localStorage.setItem("auth",response.data.accessToken);
     email.value=""
    window.location.href='/transaction'
    }
    catch(error){
    alert("invalid credentials");
}
  }
    const formRef=useRef();
  return (
    <div className='container'>
      <form class="form" ref={formRef}>
       <p class="form-title">Login Your Account</p>
        <div class="login-input-container">
          <input type="email" placeholder="Enter email"/>
          <span>
          </span>
      </div>
      <div class="login-input-container">
          <input type="password" placeholder="Enter password"/>
        </div>
         <button type="submit" class="submit" onClick={handleSubmit} >
        Login
      </button>
   </form>
    </div>
  )
}

export default Login
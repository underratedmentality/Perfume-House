import React from 'react'
import Header from '../components/Header'
import { Link, useNavigate} from 'react-router-dom'
import head from '../assets/head.png'
import google from '../assets/google.png'
import { useState } from 'react'
const SignInPage = () => {
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [error, setError]= useState("")
  const [RemeberMe, setRememberMe] = useState (false);
  const redirect = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, RemeberMe);
    if (!email.trim()|| !password.trim()) {
      // console.log("Input is required");
      setError("please fill input")
    }else {
      redirect("/")
    }
   
  }
  return (
    <div className='second-div'>
    <Link to="/"><img className='ms-3' style={{marginTop:"20px"}} src={head}/></Link>
        <form onSubmit={handleSubmit} className='signinform Form-control container bg-white rounded-3 p-5 my-2'>
          <h1>
            Welcome Back
          </h1>
          <p>Fill in your information to access your account</p>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter your Email' className='form-control mt-2 mb-3' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter your Password' className='form-control mt-2 mb-3' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <div className='d-flex justify-content-between'>
      <div>
        <input type="checkbox" id='agree' className='form-check-input me-3' style={{backgroundColor:"#8D34FF"}} />
       <label htmlFor="agree" className='form-check-label' checked={RemeberMe} onChange={(e) => setRememberMe (e.target.checked)}>
         Remeber Me
        </label>
       </div>
       <div>
       <p style={{color:"red"}}>Forgotten Password</p>
       </div>
      </div>
      <p className='text-danger'>{error}</p>
      <button type="submit" style={{backgroundColor:"#8D34FF", height:"64px", border:"0px", borderRadius:"10px"}} className='w-100 text-white'>SIgn Up</button>
        <p style={{textAlign:"center", marginTop:"20px"}}>Or</p>
        <button style={{backgroundColor:"none", height:"64px",borderRadius:"10px", color:"#292929", marginBottom:"10px"}} className='w-100 text-black' ><img src={google} /> Continue With Google</button>
        <p style={{textAlign:"center"}}>Do not have an account? 
        <span>
      <Link className='text-decoration-none' style={{color:"#8D34FF"}} to="/register"> Sign Up</Link>
        </span>
        </p>
        </form>
    </div>
  )
}

export default SignInPage
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import head from '../assets/head.png'
import google from '../assets/google.png'
import { useState } from 'react' 
const RegisterPage = () => {
  const [firstName, setFirstName] = useState ("")
  const [lastName, setLastName] = useState ("")
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [confirmPassword, setConfirmPassword] = useState ("")
  const [agree, setAgree] = useState (false)
  const [error, setError] = useState ("")
  const [passwordError, setPasswordError] = useState ("")
  const redirect = useNavigate ()
  const handleCheckBoxChange = (e) => {
    setAgree (e.target.checked)
    if (!agree) {
     return  setAgree ("You must agree to terms and conditions");
    }
  }
const handleSubmit = (e) => {
e.preventDefault()
console.log(firstName, lastName, email, password, confirmPassword);
if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim() || !agree){
  setError ("input fields are required")
}else {
  redirect ("/")
}
if (!password === confirmPassword) {
  setPasswordError ("password doesn't match")
}

}
  return (
   <div className='main-div'>
   <Link to="/"> <img className='ms-3' style={{marginTop:"20px"}} src={head}/></Link>
     <div className='d-flex justify-content-center align-items-center'>
       <form onSubmit={handleSubmit} className='p-2 p-lg-4 mb-5 bg-white registerform rounded-2'>
        <h1>
          Get Started
        </h1>
        <p>
          Lets get started by filling out the information below
        </p>
        <div className='d-flex justify-content-between mb-3'>
        <div className='w-50'>
        <label htmlFor="text">First Name</label>
        <input type="text"
        placeholder='Enter Name'
        className='form-control mt-2 w-75'
        value={firstName} onChange={(e) => setFirstName(e.target.value)}
        />
        </div>
        <div className='w-50'>
        <label htmlFor="text">Last Name</label>
        <input type="text"
        placeholder='Enter Name'
        className='form-control mt-2 w-75'
        value={lastName} onChange={(e) => setLastName(e.target.value)}
        />
        </div>
        </div>
        <label htmlFor="email">Email</label>
        <input type="email"
        placeholder='Enter Your Email'
        className='form-control mt-2 mb-3'
        value={email} onChange={(e) => setEmail(e.target.value)}
        />
         <label htmlFor="password">Password</label>
        <input type="password"
        placeholder='Enter Your Password'
        className='form-control mt-2 mb-3'
        value={password} onChange={(e) => setPassword(e.target.value)}
        />
         <label htmlFor="password">Confirm Password</label>
        <input type="password"
        placeholder='Confirm Your Password'
        className='form-control mt-2 mb-3'
        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p className='text-danger'>{passwordError}</p>
        <p className='text-danger'>{error}</p>
       <div className='mb-3'>
       <input type="checkbox" id='agree' className='form-check-input me-3 mt-2' style={{backgroundColor:"#8D34FF"}} checked = {agree} onChange={handleCheckBoxChange} />
        <label htmlFor="agree" className='form-check-label'>
          I agree to <span style={{color:"#8D34FF"}}>Terms of Service</span> and <span style={{color:"#8D34FF"}}>Privacy  <br /> Policies</span>
        </label>
        <p className='text-danger'>{agree}</p>
       </div>
        <button type='submit' style={{backgroundColor:"#8D34FF", height:"64px", border:"0px", borderRadius:"10px"}} className='w-100 text-white' >SIgn Up</button>
        <p style={{textAlign:"center", marginTop:"20px"}}>Or</p>
        <button style={{backgroundColor:"none", height:"64px",borderRadius:"10px", color:"#292929", marginBottom:"10px"}} className='w-100 text-black' ><img src={google}/> Continue With Google</button>
        <p style={{textAlign:"center"}}>Already have an Account? 
        <span>
       <Link className='text-decoration-none' style={{color:"#8D34FF"}} to="/signin">Sign in</Link>
        </span>
        </p>
        </form> 
    </div>
   </div>
  )
}

export default RegisterPage
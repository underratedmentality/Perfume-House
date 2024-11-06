import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='bg-black' style={{width:'100%'}}>
      <div> <button className='btn btn-danger'><Link style={{textDecoration:'none', color:'white'}} to='/'>Back to Home Page</Link></button></div>
        <img className='error-image' src="https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg" alt="error404" />
    </div>
  )
}

export default Error
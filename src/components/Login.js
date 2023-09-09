import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInform,setIsSignInForm]=useState(true)
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInform);
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
       <img src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
       </div>
       <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl p-4'>{isSignInform ? "Sign In":"Sign Up" }</h1>
        {!isSignInform&&<input type='text' placeholder='Full Name' className='p-4 m-4 w-full bg-gray-700 rounded-lg'/>}
        <input type='text' placeholder='Email Adress' className='p-4 m-4 w-full bg-gray-700 rounded-lg'/>
        <input type='password' placeholder='Password' className='p-4 m-4 w-full bg-slate-700 rounded-lg'/>
        <button className='p-4 m-4 bg-red-700 w-full rounded-lg'>{isSignInform ? "Sign In":"Sign Up" }</button>
        <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInform ?"New to Netflix ? SignUp Now":"Already Registered Sign In now"} </p>
       </form>
    </div>
  )
}

export default Login
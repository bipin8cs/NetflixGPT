import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import{ auth} from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVTAR } from '../utils/constants';
const Login = () => {
  //const navigate=useNavigate();
  const dispatch=useDispatch();
  const [isSignInform,setIsSignInForm]=useState(true);
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const [errorMessage,setErrorMessage]=useState(null);
 

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInform);
  }
  const handleButtonClick=()=>{
    
    const message=checkValidateData(email.current.value,password.current.value)
    setErrorMessage(message);
    if(message) return
    if(!isSignInform){
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: USER_AVTAR
        }).then(() => {
          // Profile updated!
          // ...
          const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        
        }).catch((error) => {
          setErrorMessage(error.message)
        });
       
        //console.log('user',user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage)
        // ..
      });
    
      
    }else{
//sign in logic

signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  //  console.log(user)
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });

    }
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
       <img src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
       </div>
       <form onClick={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl p-4'>{isSignInform ? "Sign In":"Sign Up" }</h1>
        {!isSignInform&&<input ref={name} type='text' placeholder='Full Name' className='p-4 m-4 w-full bg-gray-700 rounded-lg'/>}
        <input ref={email} type='text' placeholder='Email Adress' className='p-4 m-4 w-full bg-gray-700 rounded-lg'/>
        <input ref={password} type='password' placeholder='Password' className='p-4 m-4 w-full bg-slate-700 rounded-lg'/>
        
        <p className='text-red-400 font-bold p-2'>{errorMessage}</p>
        <button className='p-4 m-4 bg-red-700 w-full rounded-lg' onClick={ handleButtonClick}>{isSignInform ? "Sign In":"Sign Up" }</button>
        <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInform ?"New to Netflix ? SignUp Now":"Already Registered Sign In now"} </p>
       </form>
    </div>
  )
}

export default Login

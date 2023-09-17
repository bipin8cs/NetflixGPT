import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
const Header = () => {
  const dispatch=useDispatch();
 
  const navigate=useNavigate()
  const user=useSelector(store=>store.user)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      //navigate("/")
    }).catch((error) => {
      // An error happened.
    });
    
  }

  useEffect(() => {
    const unsubsribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        //const uid = user.uid;
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
  
      }
    });
  
    return () => {
      unsubsribe()
    }
  }, [])
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-wrap  justify-between'>
     <img className='w-44' src={LOGO} alt='logo'/>
{user&&
    <button className='bg-red-700 mr-0.5 rounded-lg text-white h-10 my-5'onClick={handleSignOut}> Sign Out</button>}
    </div>
  )
}

export default Header

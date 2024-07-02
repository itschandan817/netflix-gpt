import React, { useRef, useState } from 'react';
import Header from './Header';
import {checkValidata} from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { USER_AVTAR } from '../utils/constants';


const Loging = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] =   useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{
    const message = checkValidata(email.current.value, password.current.value );
    setErrorMessage(message);
    if(message) return;
   
    if(!isSignInForm){
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVTAR
          }).then(() => {
            
            navigate("/")
          }).catch((error) => {
            setErrorMessage(error.message )
          });
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }else{

      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage)
        }); 
    }

  }

  const toggleSignInForm = () =>{ 
    setIsSignInForm(!isSignInForm); 
  }
  return (
    <div> 
      <Header/>
      <div className='absolute'>
        <img 
         src= "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
         alt='bglogo'
        />

      </div>

      <form
          onSubmit={(e)=>e.preventDefault()} 
          className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 
          className='font-bold text-3xl py-4'>
            {isSignInForm? "sign in" : "singn Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name} 
            type='text' 
            placeholder='Full Name' 
            className='p-2 my-2 w-full bg-gray-700' 
          />
        )

        }
        <input
          ref={email} 
          type='text' 
          placeholder='Email Address' 
          className='p-2 my-2 w-full bg-gray-700' 
        />

        <input
          ref={password} 
          type='password' 
          placeholder='Password' 
          className='p-2 my-2 w-full bg-gray-700' 
        />
        <p className="text-red-500 font-bold tex-lg py-2">{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer' onClick={handleButtonClick}>
           {isSignInForm? "sign in" : "singn Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm} > 
          {isSignInForm
            ? "New to Netflix? Sing Up Now"
            : "Already registered? Sign In Now"
          }
         </p>
      </form>

      
      

    </div>
  ) 
} 

export default Loging

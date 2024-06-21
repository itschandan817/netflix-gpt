import React, { useRef, useState } from 'react'
import Header from './Header';
import {checkValidata} from "../utils/validate"


const Loging = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] =   useState(null);
  
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{
    const message = checkValidata(email.current.value, password.current.value );
    setErrorMessage(message);
  }

  const toggleSignInForm = () =>{ 
    setIsSignInForm(!isSignInForm); 
  }
  return (
    <div> 
      <Header/>
      <div className='absolute'>
        <img 
         src='https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg'
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

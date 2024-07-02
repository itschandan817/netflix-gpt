import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth  } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error") 
      
    });
    

  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(
            addUser({
                uid: uid, 
                email: email,
                displayName: displayName,
                photoURL: photoURL
            }));  
          navigate("/browse");
        } else {
            dispatch(removeUser())
            navigate("/");  
        }

    });

    return () => unsubscribe();
  }, []);
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between' >
      <img 
       className='w-44'
       src='https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png'
       alt='logo' 
      />
      {user && (
        <div className='flex p-2'>
        <img
           className='w-12 h-12 ' 
           alt='usericon' 
           src= {user.photoURL}
        />
        <button onClick={handleSignOut} className='text-white font-bold px-2'>Sign Out </button>
       </div>

      )} 
    </div>

    
    
  )
}

export default Header

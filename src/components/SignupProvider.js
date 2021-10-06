import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoogleIcon, FacebookIcon } from './Icons';


const SignupProvider = () => {

  
  return (
    <div className='signup-provider'>

    <NavLink  exact to="/login-google" className='mb-2 google-btn'>
    <GoogleIcon /> 
    <span className='btn-text'>Continue with Google</span>
    </NavLink>
     
     
      {/* <a href={`${process.env.REACT_APP_SERVER_HOSTNAME}/auth/google`} className='mb-2 google-btn'>
        <GoogleIcon />
        <span className='btn-text'>Login with Google</span>
      </a> */}

    </div>
  );
};

export default SignupProvider;



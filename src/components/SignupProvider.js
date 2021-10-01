import axios from 'axios';
import React from 'react';
import { Route } from 'react-router-dom';
import { GoogleIcon, FacebookIcon } from './Icons';


const SignupProvider = () => {

  const callGoogle = async()=>{
    await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/auth/google`)
  }

  return (
    <div className='signup-provider'>
      <p onClick={callGoogle} className='mb-2 google-btn'>
        <GoogleIcon />
        <span className='btn-text'>Login with Google</span>
      </p>

    </div>
  );
};

export default SignupProvider;
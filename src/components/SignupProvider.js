import React from 'react';

import { GoogleIcon, FacebookIcon } from './Icons';
// import { BASE_API_URL } from '../../../constants';

const SignupProvider = () => {
  return (
    <div className='signup-provider'>
      <a href={`${process.env.BASE_API_URL}/google`} className='mb-2 google-btn'>
        <GoogleIcon />
        <span className='btn-text'>Login with Google</span>
      </a>

      <a href={`${process.env.BASE_API_URL}/facebook`} className='facebook-btn'>
        <FacebookIcon />
        <span className='btn-text'>Login with Facebook</span>
      </a>
    </div>
  );
};

export default SignupProvider;
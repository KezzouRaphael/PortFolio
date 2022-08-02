import './index.scss';

import React from 'react';
import LogoS from '../../../assets/images/R.png';
const Logo = () => {
  return (
    <div className='logo-container'>
      <img className='solid-logo' src={LogoS} alt='logo'/>
    </div>
  );
};

export default Logo;

import React from 'react'

import imglogo from '..assets/logo.png';
import imggif from '..assets/flag.gif';

  // function logo() {
  //   return <img src={logo} alt="Logo" />;
  // }

const Header = () => {
  return (
    <div className='text-center'>
      <h1>stato website</h1>
      <img src={imglogo} alt="logo" />
      <img src={imggif} alt="flag" />
     
    </div>
  )
}

export default Header




import React from 'react';
import imgLogo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800 w-full">
      <div className="container flex items-center justify-between p-6 mx-auto">
        <div className="flex items-center">
          <img width={80} src={imgLogo} alt="Logo" />
        </div>
        <div className="flex items-center ">
          <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-blue-400 hover:border-blue-500 mx-1.5 sm:mx-6">HomePage</a>
          <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-blue-400 hover:border-blue-500 mx-1.5 sm:mx-6">Gallery</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
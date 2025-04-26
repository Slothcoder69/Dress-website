import React from 'react';
import { NavigationMenuDemo } from './navlinks';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import Link from "next/link"

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-myWhite h-20">
      {/* Left section with hamburger menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden"
            aria-label="Open menu"
          >
            <GiHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            role="menu"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li role="menuitem"><a href="/">Ghar</a></li>
            <li role="menuitem">
              <a href="#">Dresses</a>
              <ul className="p-2">
                <li><a href="/Tops">Tops</a></li>
                <li><a href="/Pants">Pants</a></li>
                <li><a href="/Accessories">Accessories/Jewelry</a></li>
                <li><a href="/Shoes">Shoes</a></li>
              </ul>
            </li>
            <li role="menuitem"><a href="/About">About us</a></li>
            <li role="menuitem"><a href="/Contact">Contact</a></li>
          </ul>
        </div>
        <Image src="/pictures/logo.png" 
        alt="logo"
        className='hidden lg:block ml-4'
         width={80} 
         height={80} />
      </div>

      {/* Center section with horizontal menu for large screens */}
      <div className="navbar-center  hidden lg:flex">
     
        <NavigationMenuDemo />
      </div>
      <div className='navbar-center lg flex'>
      <Image src="/pictures/logo.png" 
        alt="logo"
        className='block lg:hidden'
         width={100} 
         height={100} />
      </div>

      {/* Right section with a button */}
      <div className="navbar-end">
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="pr-4 cursor-pointer group  duration-300">
        <div className="indicator">
          <a href="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 group-hover:text-myorange duration-450"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
              </a>
        </div>
      </div>
      
    </div>
      </div>
    </div>
  );
};

export default Navbar;

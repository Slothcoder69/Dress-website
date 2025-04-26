import React from 'react';
import Link from "next/link";
import Image from 'next/image'; // Ensure the correct import

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* Categories */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight mb-3 cursor-pointer">
                <a  className='text-gray-600 hover:text-gray-800 cursor-pointer' href='https://slothcoder69.github.io/Thinker./'>Company</a>
              </h2>
              <nav className="list-none mb-10">
                <li>
                <a className="text-gray-600 hover:text-gray-800 cursor-pointer" href='/'>Home</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Dresses</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">About US</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Contacts</a>
                </li>
              </nav>
            </div>

            {/* Company */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight mb-3 cursor-pointer">
                Services
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Branding</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Desgin</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Marketing</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Advertisment</a>
                </li>
              </nav>
            </div>

            {/* Help */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight mb-3 cursor-pointer">
                Legal
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Terms of Use</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Privacy Policy</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">Cookie policy</a>
                </li>
              </nav>
            </div>

            {/* Subscribe */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Your Email
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                We promise not to spam you!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image
                src="/pictures/logo.png" // Ensure the path is correct
                alt="logo"
                width={50}
                height={50}
              />
              <span className="ml-3 text-xl">S-Dress</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2025 S-Dress
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @DEV5
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3c-1.1 0-2 .9-2 2v3H8V4c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v3h5v13h10V9h5V4c0-1.1-.9-2-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 11-12 0 6 6 0 0112 0z"></path>
                  <path d="M12 14c4.418 0 8 1.79 8 4v2H4v-2c0-2.21 3.582-4 8-4z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 3c-2.21 0-4 1.79-4 4v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21H3V3h18v18z"></path>
                  <path d="M16 12H8"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

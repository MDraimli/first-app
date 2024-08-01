import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={'/'} className="text-white uppercase font-extrabold text-3xl py-3">Start Framework </Link>
        <ul className={`md:flex space-x-4 text-white ${isOpen ? 'block' : 'hidden'}`}>
          <li><NavLink to={'/about'} className="hover:text-gray-400 block md:inline uppercase font-bold px-2">About</NavLink></li>
          <li><NavLink to={'/portfolio'} className="hover:text-gray-400 block md:inline uppercase font-bold px-2">Portfolio</NavLink></li>
          <li><NavLink to={'/contact'} className="hover:text-gray-400 block md:inline uppercase font-bold px-2">Contact</NavLink></li>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    
    <div
      className={`fixed top-0 left-0 w-full bg-zinc-900 text-white p-4 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <img className="h-12 w-26" src="CookWhatever.jpeg" alt="Logo"></img>
        {/* Navigation Links */}
        <div className="flex space-x-4">
         
        <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "text-white hover:underline"
            }>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) =>
              isActive ? "text-blue-400 font-bold" : "text-white hover:underline"
            }>About</NavLink>
        

        </div>
      </div>
    </div>
    
  );
};

export default Navbar;

/*
import React from 'react'

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['NeueMontreal'] flex justify-between itmes-center">
        <div className="flex-shrink-0">
        <img className="h-24 w-24" src="CookWhat.png" alt="Logo"></img>
        </div>
        <div className="Links flex gap-10">
            {["Home","About","Contact Us"].map((item, index)=>(<a key={index} className={`text-lg capitalized font-light ${index===2 && "ml-32"}`} >{item}</a>))}
        </div>
    </div>
    
  )
}

export default Navbar
*/
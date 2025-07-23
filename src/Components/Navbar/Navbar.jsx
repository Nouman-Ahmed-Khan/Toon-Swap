import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Adding react router dom for navigation
import './Navbar.css';
import logo from '../../assets/logo.png';
import telegram_icon from '../../assets/telegram_icon.svg';
import x_icon from '../../assets/x_icon.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Using useLocation to get the current path
  const currentPath = location.pathname;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Toon Pad", path: "/toonpad" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Docs", path: "/docs" }
  ];

  return (
    <div className="mx-auto p-2 sm:px-15 sm:mr-3">
      <div className='navbar flex items-center justify-around py-4 px-4 mt-5 rounded-2xl border-3'>

        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className='w-45 sm:w-50 cursor-pointer'/>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center gap-8 xl:mr-45'>
          <ul className='flex nav-links-mainbg items-center gap-6 px-3 py-1 sm:py-2 rounded-xl border-2'>
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className={`nav-links cursor-pointer font-semibold text-sm px-4 py-1 rounded-lg ${currentPath === item.path ? "nav-links-bg text-white" : ""}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Button */}
        <div className='gap-4 hidden lg:flex'>
          <div className="flex gap-2 items-center">
            <img src={telegram_icon} alt="telegram" className='w-7 sm:w-9 cursor-pointer'/>
            <img src={x_icon} alt="x" className='w-7 sm:w-9 cursor-pointer' />
          </div>
          <button className='rounded-xl px-3 py-2 cursor-pointer font-semibold text-sm border-2 connect-wallet-button'>Connect Wallet</button>
        </div>

        {/* Mobile Burger Icon */}
        <div className='lg:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white-700 focus:outline-none nav-links p-2 rounded-xl">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='lg:hidden mt-2 navbar shadow-md rounded-xl p-4'>
          <ul className='flex flex-col gap-4 mb-4'>
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`cursor-pointer font-semibold text-sm ${
                    currentPath === item.path ? "nav-links-bg text-white rounded-xl px-3 py-2" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 items-center mb-4">
            <img src={telegram_icon} alt="telegram" className='w-7 cursor-pointer' />
            <img src={x_icon} alt="x" className='w-7 cursor-pointer' />
          </div>
          <button className='w-full rounded-xl px-3 py-2 cursor-pointer font-semibold text-sm border-2 connect-wallet-button'>Connect Wallet</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

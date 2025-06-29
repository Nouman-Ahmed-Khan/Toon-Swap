import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import telegram_icon from '../../assets/telegram_icon.svg';
import x_icon from '../../assets/x_icon.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mx-auto sm:px-12 sm:mr-3">
      <div className='navbar flex items-center justify-around py-4 px-4 mt-5 rounded-2xl border-3'>

        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className='w-32 sm:w-50'/>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8 sm:mr-45'>
          <ul className='flex nav-links items-center gap-6 px-4 py-1 rounded-xl border-2'>
            <li className='nav-links active cursor-pointer font-semibold text-sm px-4 py-2 rounded-xl active'>Home</li>
            <li className='cursor-pointer font-semibold text-sm px-4 py-2 rounded-xl'>Toon Pad</li>
            <li className='cursor-pointer font-semibold text-sm px-4 py-2 rounded-xl'>Leaderboard</li>
            <li className='cursor-pointer font-semibold text-sm px-4 py-2 rounded-xl'>Docs</li>
          </ul>
          
        </div>

          <div className='flex gap-4'>
            <div className="flex gap-2 items-center">
             <img src={telegram_icon} alt="telegram" className='w-7 sm:w-9 cursor-pointer'/>
             <img src={x_icon} alt="x" className='w-7 sm:w-9 cursor-pointer' />
            </div>

            <button className='rounded-xl px-3 py-2 cursor-pointer font-semibold text-sm border-2 connect-wallet-button'>Connect Wallet</button>
          </div>

        {/* Mobile Burger Icon */}
        <div className='md:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white-700 focus:outline-none nav-links p-2 rounded-xl">
            <svg className="w-6 h-6" fill="none"stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <div className='md:hidden mt-2 bg-white shadow-md rounded-xl p-4'>
          <ul className='flex flex-col gap-4 mb-4'>
            <li className='cursor-pointer font-semibold text-sm'>Home</li>
            <li className='cursor-pointer font-semibold text-sm'>Toon Pad</li>
            <li className='cursor-pointer font-semibold text-sm'>Leaderboard</li>
            <li className='cursor-pointer font-semibold text-sm'>Docs</li>
          </ul>
          <div className="flex gap-4 items-center mb-4">
            <img src={telegram_icon} alt="telegram" className='w-7 cursor-pointer' />
            <img src={x_icon} alt="x" className='w-7 cursor-pointer' />
          </div>
          <button className='w-full rounded-xl px-3 py-2 cursor-pointer font-semibold text-sm border-2'>Connect Wallet</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;





// import React from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo.png'
// import telegram_icon from '../../assets/telegram_icon.svg'
// import x_icon from '../../assets/x_icon.svg'


// const Navbar = () => {
//   return (
//     <div>
//       <div className='navbar border-3 flex items-center justify-around py-4 px-0 shadow-md mt-5 mx-20 rounded-2xl'>
//       <div className='flex items-center justify-between max-w-3xl w-full'>
//       <div className="nav-logo">
//         <img src={logo} alt="logo" className='w-50'/>
//       </div>

//       <div>
//        <ul className='nav-links flex items-center gap-8 px-2 py-1 rounded-xl border-2'>
//          <li className='nav-links cursor-pointer font-semibold text-sm px-4 py-2 rounded-xl active'>Home</li>
//          <li className='cursor-pointer font-semibold text-sm px-4 py-2 rounded-xl'>Toon Pad</li>
//          <li className='cursor-pointer font-semibold text-sm px-4 py-2 rounded-xl'>Leaderboard</li>
//          <li className='cursor-pointer font-semibold text-sm px-4 py-2 rounded-xl'>Docs</li>
//        </ul>
//       </div>
//       </div>
      
//       <div className="nav-contact flex gap-4 items-center">
//          <div className="nav-social-icons flex justify-between items-center gap-2">
//             <img src={telegram_icon} alt="telegram-logo" className='w-9 cursor-pointer'/>
//             <img src={x_icon} alt="x-logo" className='w-9 cursor-pointer'/>
//          </div>
//          <button type="button" className='connect-wallet-button rounded-xl px-3 py-2 cursor-pointer font-semibold text-sm border-2'>Connect Wallet</button>
//       </div>
//         </div>

//      </div>
//   )
// }

// export default Navbar

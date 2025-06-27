import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import telegram_icon from '../../assets/telegram_icon.svg'
import x_icon from '../../assets/x_icon.svg'


const Navbar = () => {
  return (
    <div>
      <div className='navbar border-3 flex items-center justify-around py-4 px-0 shadow-md mt-5 mx-20 rounded-2xl'>
      <div className='flex items-center justify-between max-w-3xl w-full'>
      <div className="nav-logo">
        <img src={logo} alt="logo" className='w-50'/>
      </div>

      <div>
       <ul className='nav-links flex items-center gap-8 px-2 py-1 rounded-xl border-2'>
         <li className='nav-links cursor-pointer font-semibold text-sm px-4 py-2 rounded-xl active'>Home</li>
         <li className='cursor-pointer font-semibold text-sm px-4 py-2 rounded-xl'>Toon Pad</li>
         <li className='cursor-pointer font-semibold text-sm px-4 py-2 rounded-xl'>Leaderboard</li>
         <li className='cursor-pointer font-semibold text-sm px-4 py-2 rounded-xl'>Docs</li>
       </ul>
      </div>
      </div>
      
      <div className="nav-contact flex gap-4 items-center">
         <div className="nav-social-icons flex justify-between items-center gap-2">
            <img src={telegram_icon} alt="telegram-logo" className='w-9 cursor-pointer'/>
            <img src={x_icon} alt="x-logo" className='w-9 cursor-pointer'/>
         </div>
         <button type="button" className='connect-wallet-button rounded-xl px-3 py-2 cursor-pointer font-semibold text-sm border-2'>Connect Wallet</button>
      </div>
    </div>

    <div className='navbar border-3 flex items-center justify-around py-4 px-0 shadow-md mt-5 mx-20 rounded-2xl'>
      
    </div>

    </div>
  )
}

export default Navbar

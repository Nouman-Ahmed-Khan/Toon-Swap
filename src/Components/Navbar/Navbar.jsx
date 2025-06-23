import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import telegram_icon from '../../assets/telegram_icon.svg'
import x_icon from '../../assets/x_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar flex items-center justify-around p-4 shadow-md mt-5 mx-15 rounded-2xl'>
      <div className="nav-logo">
        <img src={logo} alt="logo" className='w-50'/>
      </div>

      <div>
       <ul className='nav-links flex items-center gap-8'>
         <li className='cursor-pointer'>Home</li>
         <li className='cursor-pointer'>Toon Pad</li>
         <li className='cursor-pointer'>Leaderboard</li>
         <li className='cursor-pointer'>Docs</li>
       </ul>
      </div>
      
      <div className="nav-contact flex gap-4 items-center">
         <div className="nav-social-icons flex justify-between items-center gap-2">
            <img src={telegram_icon} alt="telegram-logo" className='w-9 cursor-pointer'/>
            <img src={x_icon} alt="x-logo" className='w-9 cursor-pointer'/>
         </div>
         <button type="button" className='connect-wallet-button rounded-2xl text-sm p-4'>Connect Wallet</button>
      </div>
    </div>
  )
}

export default Navbar

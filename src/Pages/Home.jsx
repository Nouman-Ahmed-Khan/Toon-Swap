import React from 'react'
import logo from '../assets/circlelogo.png'
import swaplogo from '../assets/swaplogo.png'

const Home = () => {
  return (
    <div className='mx-auto px-4 sm:px-12 mt-15'>
      <div className='navbar rounded-xl'>
        CAT
        <div className='my-10 nav-links-mainbg mx-10 border-3 rounded-xl py-3'>
          {/* toonswap and other logo start*/}
          <div className='flex'>
            <img src={logo} alt="logo" className='w-25 sm:w-9 cursor-pointer'/>
            <img src={swaplogo} alt="logo" className='w-25 sm:w-9 cursor-pointer'/>
          </div>
          {/* toonswap and other logo end*/}
        </div>
      </div>
    </div>
  )
}

export default Home

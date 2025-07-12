import React from 'react'
import logo from '../assets/circlelogo.png'
import swaplogo from '../assets/swaplogo.png'

const Home = () => {
  return (
    <div className='mx-auto sm:ml-1 sm:mr-3 px-4 sm:px-12 mt-10'>
      <div className='navbar rounded-xl border-3'>
        
        <div className='my-5 nav-links-mainbg mx-8 border-3 rounded-xl py-2 flex items-center justify-around'>
          {/* toonswap and other logo start*/}
          <div className='flex items-center'>
            <img src={logo} alt="logo" className='w-25 sm:w-9 cursor-pointer'/>
            <img src={swaplogo} alt="logo" className='w-25 sm:w-9 cursor-pointer'/>

            {/* toon supra text start*/}
          <div className='ml-5'>
            <p className='font-bold text-gray text-lg'>Toon - Supra</p>
            <p className='text-sm text-gray-300'>Supra Chain</p>
          </div>
          {/* toon supra text end*/}
          </div>
          {/* toonswap and other logo end*/}
          
          

          {/* Fee tire text start*/}
          <div className=''>
            <p className='text-sm text-gray-300'>Fee Tire</p>
            <p className='text-green text-lg'>V2|0.02%</p>            
          </div>
          {/* Fee tire text end*/}

          {/* Earned text start*/}
          <div className=''>
            <p className='text-sm text-gray-300'>Earned</p>
            <div className='flex'>
              <p className='text-gray text-lg'>0.00</p>
              <p className='text-gray text-sm mt-1 ml-1'>$0.00</p>
            </div>         
          </div>
          {/* Earned text end*/}

          {/* Total Earned APR start*/}
          <div className=''>
            <p className='text-sm text-gray-300'>Total Earned APR</p>
              <p className='text-gray text-lg'>77.08%</p>
          </div>
          {/* Total Earned APR end*/}

          {/* Liquidity start*/}
          <div className=''>
            <p className='text-sm text-gray-300'>Liquidity</p>
              <p className='text-gray text-lg'>$ 94,673</p>
          </div>
          {/* Liquidity end*/}

          {/* Volume 24h start*/}
          <div className=''>
            <p className='text-sm text-gray-300'>Volume 24h</p>
              <p className='text-gray text-lg'>$ 94,673</p>
          </div>
          {/* Volume 24h end*/}

          {/* Pool Type start*/}
          <div className=''>
            <p className='text-sm text-gray-300'>Pool Type</p>
              <p className='text-green text-lg'>V2</p>
          </div>
          {/* Pool Type end*/}
        </div>
      </div>
    </div>
  )
}

export default Home

import React from 'react'
import logo from '../assets/circlelogo.png'
import swaplogo from '../assets/swaplogo.png'

const Home = () => {
  return (
    <div className='mx-auto sm:ml-1 sm:mr-3 px-4 sm:px-12 mt-10'>
      <div className='navbar rounded-xl border-3'>
        
        <div className='my-5 nav-links-mainbg sm:mx-5 border-3 rounded-xl py-2 flex items-center justify-around'>
          {/* toonswap and other logo start*/}
          <div className='flex items-center'>
            <img src={logo} alt="logo" className='w-25 sm:w-9 cursor-pointer'/>
            <img src={swaplogo} alt="logo" className='w-25 sm:w-9 cursor-pointer'/>

            {/* toon supra text start*/}
          <div className='ml-5'>
            <p className='font-bold text-md'>TOON - SUPRA</p>
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


        {/* Home Page Section-1 Start */}
         <div>
           {/* Pair info card Start */}
           <div className='nav-links-mainbg sm:mx-5 sm:p-4 mt-5 border-3 rounded-xl'>
             <p className='text-2xl text-white font-bold'>Pair Info</p>

             {/* Toon and Supra section Start */}
              <div className='navbar rounded-xl border-3 sm:p-4 sm:mt-4'>
                {/* toon start */}
                <div className='flex items-center justify-between'>
                  <div className='flex items-center justify-center'>
                    <img src={logo} alt="logo" className='w-25 sm:w-8 cursor-pointer'/>
                    <p className='font-bold ml-3'>TOON</p>
                  </div>                  
                  <p>~157.006 SUPRA</p>
                </div>
                {/* toon end */}

                {/* supra start */}
                <div className='flex items-center justify-between mt-2'>
                  <div className='flex items-center justify-center'>
                    <img src={swaplogo} alt="logo" className='w-25 sm:w-8 cursor-pointer'/>
                    <p className='font-bold ml-3'>SUPRA</p>
                  </div>                  
                  <p>~157.006 TOON</p>
                </div>
                {/* supra end */}
              </div>
             {/* Toon and Supra section End */}

              <div className='text-sm'>
                  <div className='flex items-center justify-between mt-4 mx-2'>
                    <p>Liquidity / TVL</p>
                    <p>$ 94.073 k</p>
                  </div>
                  <div className='flex items-center justify-between mt-1 text-gray-300 mx-4'>
                    <p>TOON Share</p>
                    <p>$ 64.004 k</p>
                  </div>
                  <div className='flex items-center justify-between mt-1 text-gray-300 mx-4'>
                    <p>SUPRA Share</p>
                    <p>$ 30.890 k</p>
                  </div>
                  <div className='flex items-center justify-between mt-2 text-green mx-2'>
                    <p>Fee 24h</p>
                    <p>$ 200.564 k</p>
                  </div>
              </div>

              <button className='mt-4 w-full rounded-xl px-3 py-2 cursor-pointer font-semibold text-sm border-2 connect-wallet-button'>Add Liquidity</button>

           </div>
           {/* Pair info card End */}
         </div>
        {/* Home Page Section-1 End */}
      </div>    
    </div>
  )
}

export default Home

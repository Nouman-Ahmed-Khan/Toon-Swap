import React from 'react'
import logo from '../assets/circlelogo.png'
import swaplogo from '../assets/swaplogo.png'
import VolumeChart from './VolumeChart.jsx';
import BTCChart from './BTCChart.jsx';


const Home = () => {
  return (
    <div className='mx-auto sm:ml-1 sm:mr-3 p-2 sm:px-15 mt-5 sm:mt-10'>
      <div className='navbar rounded-xl border-3 sm:px-1'>
        
        <div className='m-4 px-5 sm:px-0 sm:my-5 nav-links-mainbg sm:mx-5 border-3 rounded-xl py-2 sm:flex items-center justify-around'>
          {/* toonswap and other logo start*/}
          <div className='w-full sm:w-auto mx-4 mb-5 sm:mb-0 sm:mx-0 flex items-center'>
            <img src={logo} alt="logo" className='sm:w-9 w-auto cursor-pointer'/>
            <img src={swaplogo} alt="logo" className='sm:w-9 w-auto cursor-pointer'/>

            {/* toon supra text start*/}
          <div className='ml-5'>
            <p className='font-bold text-xl sm:text-md'>TOON - SUPRA</p>
            <p className='text-md sm:text-sm text-gray-300'>Supra Chain</p>
          </div>
          {/* toon supra text end*/}
          </div>
          {/* toonswap and other logo end*/}
          

          {/*👇🏼 this div is only for mobile responsive */}
          <div className='flex sm:flex-none sm:w-[30%] justify-between items-center mb-4 sm:mb-0'>
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
          </div>
          {/*👆🏼 this div is only for mobile responsive */}

          {/*👇🏼 this div is only for mobile responsive */}
          <div className='flex sm:flex-none sm:w-[30%] justify-between items-center'>
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
          {/*👆🏼 this div is only for mobile responsive */}
        </div>


        {/* Home Page Section-1 Start */}
         <div className='flex flex-col sm:flex-row items-center sm:my-4'>
           {/* Pair info card Start */}
           <div className='sm:w-[40%] nav-links-mainbg px-6 py-3 sm:mx-5 sm:py-4 sm:px-7 border-3 rounded-xl'>
             <p className='text-2xl text-white font-bold'>Pair Info</p>

             {/* Toon and Supra section Start */}
              <div className='navbar rounded-xl border-3 p-4 mt-3 sm:p-4 sm:mt-4'>
                {/* toon start */}
                <div className='flex items-center justify-between'>
                  <div className='flex items-center justify-center mr-7 sm:mr-0'>
                    <img src={logo} alt="logo" className='w-auto sm:w-8 cursor-pointer'/>
                    <p className='font-bold ml-3'>TOON</p>
                  </div>                  
                  <p>~157.006 SUPRA</p>
                </div>
                {/* toon end */}

                {/* supra start */}
                <div className='flex items-center justify-between mt-2'>
                  <div className='flex items-center justify-center'>
                    <img src={swaplogo} alt="logo" className='w-auto sm:w-8 cursor-pointer'/>
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

           {/* Your Positions card Start */}
           <div className='sm:w-[60%] nav-links-mainbg sm:mx-0 mx-4 mt-4 sm:mt-1 p-4 sm:mr-5 sm:px-7 sm:py-4 border-3 rounded-xl'>
             <div className='sm:flex items-center justify-between'>
              <p className='text-2xl text-white font-bold'>Your Positions</p>
              {/* Active inactive buttons star */}
              <div className='navbar rounded-xl border-3 p-1 my-3 sm:my-0'>
               
                {/* supra start */}
                <div className='flex items-center justify-between'>
                  <button className='active nav-links cursor-pointer font-semibold text-sm px-4 py-1 rounded-lg'>All</button>
                  <button className='nav-links cursor-pointer font-semibold text-sm px-4 py-1 rounded-lg'>Active</button>
                  <button className='nav-links cursor-pointer font-semibold text-sm px-4 py-1 rounded-lg'>Inactive</button>
                  <button className='nav-links cursor-pointer font-semibold text-sm px-4 py-1 rounded-lg'>Closed</button>
                </div>
                {/* supra end */}
              </div>
              {/* Active inactive buttons end */}
             </div>      
             
              <div className='w-full overflow-x-auto sm:text-sm text-xs navbar p-2 rounded-xl border-3 sm:mt-3 sm:mb-2 sm:p-3'>
                <table className="table-auto text-center sm:w-full overflow-x-auto">
                   <thead>
                     <tr className='text-gray-300 border-b-2 border-gray-600'>
                      <th className='pb-1'>Position ID</th>
                      <th className='sm:px-0 px-3 pb-1 '>Date & Time</th>
                      <th className='pb-1'>Value</th>
                      <th className='pb-1 sm:px-0 px-3'>Status</th>
                     </tr>
                    </thead>
                  <tbody>
                   <tr className='border-b border-gray-600'>
                     <td className='py-1'>#45324</td>
                     <td className='px-3 sm:px-0'>14 - 06 - 2024 14 : 06</td>
                     <td className=''>$ 6700.707 M</td>
                     <td><button className='bg-green-400 my-2 cursor-pointer font-semibold sm:text-sm text-xs sm:px-4 px-2 ml-3 sm:ml-0 py-1 rounded-lg'>Active</button></td>
                   </tr>
                   <tr className='border-b border-gray-600'>
                     <td className='py-1'>#45324</td>
                     <td className='px-3 sm:px-0'>14 - 06 - 2024 14 : 06</td>
                     <td>$ 6700.707 M</td>
                     <td><button className='bg-gray-500 my-2 cursor-pointer font-semibold sm:text-sm text-xs sm:px-4 px-2 ml-3 sm:ml-0 py-1 rounded-lg'>Inactive</button></td>
                   </tr>
                   <tr className='border-b border-gray-600'>
                     <td className='py-1'>#45324</td>
                     <td className='px-3 sm:px-0'>14 - 06 - 2024 14 : 06</td>
                     <td>$ 6700.707 M</td>
                     <td><button className='bg-yellow-300 my-2 cursor-pointer font-semibold sm:text-sm text-xs sm:px-4 px-2 ml-3 sm:ml-0 py-1 rounded-lg'>Pending</button></td>
                   </tr>
                   <tr className='border-b border-gray-600'>
                     <td className='py-1'>#45324</td>
                     <td className='px-3 sm:px-0'>14 - 06 - 2024 14 : 06</td>
                     <td>$ 6700.707 M</td>
                     <td><button className='bg-red-500 my-2 cursor-pointer font-semibold sm:text-sm text-xs sm:px-4 px-2 ml-3 sm:ml-0 py-1 rounded-lg'>Closed</button></td>
                   </tr>

                   {/* <!-- Empty Row --> */} 
                   <tr className=''> 
                      <td className='py-4' colspan="4">
                      </td>
                   </tr>
                   
                 </tbody>
                </table>
              </div>
           </div>
           {/* Your Positions card End */}
         </div>
        {/* Home Page Section-1 End */}


        {/* Home Page Section-2 Start */}
         <div className='flex flex-col sm:flex-row items-center sm:my-4'>
           {/* Volume card Start */}
           <div className='sm:w-[50%] w-auto nav-links-mainbg sm:mx-0 mt-4 sm:mt-1 p-4 sm:mr-5 sm:px-7 sm:py-4 border-3 rounded-xl sm:ml-5'>
              <VolumeChart/>
           </div>
           {/* Volume card End */}

           {/* Lquidity card Start */}
           <div className='sm:w-[50%] w-auto nav-links-mainbg sm:mx-0 mt-4 sm:mt-1 p-4 sm:mr-5 sm:px-7 sm:py-4 border-3 rounded-xl'>
              <BTCChart/>
           </div>
           {/* Liquidity card End */}
         </div>
        {/* Home Page Section-2 End */}


      </div>    
    </div>
  )
}

export default Home

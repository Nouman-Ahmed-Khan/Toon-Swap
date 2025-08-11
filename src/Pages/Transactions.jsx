import React from 'react';

const Transactions = () => {
  return (
    <div>
      {/* Transactions Table Start */}
           <div className='w-full nav-links-mainbg sm:mx-0 mx-4 mt-4 sm:mt-0 p-4 sm:mr-5 sm:px-7 sm:py-4 border-3 rounded-xl'>
             <div className='sm:flex items-center justify-between'>
              <p className='text-2xl text-white font-bold'>Transacations</p>

              {/* Page Changer Start */}
                {/* supra start */}
                <div className='navbar rounded-xl border-3 p-1 my-3 sm:my-0'>
                
                 <div className='flex items-center justify-between'>
                    <button className='active nav-links cursor-pointer font-semibold text-sm px-4 py-1 rounded-lg'></button>
                    <button className='nav-links cursor-pointer font-semibold text-sm px-4 py-1 rounded-lg'>Swap</button>
                    <button className='nav-links cursor-pointer font-semibold text-sm px-4 py-1 rounded-lg'>Add</button>
                    <button className='nav-links cursor-pointer font-semibold text-sm px-4 py-1 rounded-lg'>Remove</button>
                  </div>               
                </div>
                {/* supra end */}
              {/* Page Changer End */}

              {/* Active inactive buttons star */}
              <div className='navbar rounded-xl border-3 p-1 my-3 sm:my-0'>
                
                {/* supra start */}
                <div className='flex items-center justify-between'>
                  <button className='active nav-links cursor-pointer font-semibold text-sm px-4 py-1 rounded-lg'>All</button>
                  <button className='nav-links cursor-pointer font-semibold text-sm px-4 py-1 rounded-lg'>Swap</button>
                  <button className='nav-links cursor-pointer font-semibold text-sm px-4 py-1 rounded-lg'>Add</button>
                  <button className='nav-links cursor-pointer font-semibold text-sm px-4 py-1 rounded-lg'>Remove</button>
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
           {/* Transactions Table End */}
    </div>
  )
}

export default Transactions
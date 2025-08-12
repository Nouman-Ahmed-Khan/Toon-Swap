import React from 'react';
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";


const Transactions = () => {
  return (
    <div>
      {/* Transactions Table Start */}
           <div className='w-full nav-links-mainbg sm:mx-0 mx-4 mt-4 sm:mt-0 p-4 sm:mr-5 sm:px-7 sm:py-4 border-3 rounded-xl'>
             <div className='sm:flex items-center justify-between'>
              <p className='text-2xl text-white font-bold'>Transacations</p>

              <div className='flex items-center'>
              {/* Page Changer Start */}
                {/* supra start */}
                <div className='navbar rounded-xl border-3 p-1 my-3 sm:my-0 mr-6'>
                
                 <div className='flex items-center justify-between'>
                    <button className='active nav-links cursor-pointer text-xs p-1.25 rounded-full'><FaLessThan /></button>
                    <p className='text-sm mx-3'>Page 1 of 5</p>
                    <button className='active nav-links cursor-pointer text-xs p-1.25 rounded-full'><FaGreaterThan /></button>
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
             </div>      
             
              <div className='w-full overflow-x-auto sm:text-sm text-xs navbar p-2 rounded-xl border-3 sm:mt-3 sm:mb-2 sm:p-3'>
                <table className="table-auto text-center sm:w-full overflow-x-auto">
                   <thead>
                     <tr className='text-gray-300 border-b-2 border-gray-600'>
                      <th className='pb-1'>#</th>
                      <th className='sm:px-0 px-3 pb-1 '>Transactions</th>
                      <th className='pb-1'>Total Value</th>
                      <th className='pb-1 sm:px-0 px-3'>Token 1</th>
                      <th className='pb-1 sm:px-0 px-3'>Token 2</th>
                      <th className='pb-1 sm:px-0 px-3'>Account</th>
                      <th className='pb-1 sm:px-0 px-3'>Time & Date</th>
                     </tr>
                    </thead>
                  <tbody>
                   <tr className='border-b border-gray-600'>
                     <td className='py-1'>#1</td>
                     <td className='pt-3 flex gap-2 justify-center items-center'>TOON → SUPRA<VscGraph /></td>
                     <td className=''>$ 200.807 k</td>
                     <td className=''>200 <span className='text-gray-400'>TOON</span></td>
                     <td className=''>300.67 <span className='text-gray-400'>SUPRA</span></td>
                     <td className='text-blue-300'>0x905...1c2Af</td>
                     <td className='px-3 sm:px-0'>14 - 06 - 2024 <span className='ml-2'>14 : 06</span></td>
                   </tr>
                   <tr className='border-b border-gray-600'>
                     <td className='py-1'>#2</td>
                     <td className='pt-3 flex gap-2 justify-center items-center'>TOON → SUPRA<VscGraph /></td>
                     <td className=''>$ 200.807 k</td>
                     <td className=''>200 <span className='text-gray-400'>TOON</span></td>
                     <td className=''>300.67 <span className='text-gray-400'>SUPRA</span></td>
                     <td className='text-blue-300'>0x905...1c2Af</td>
                     <td className='px-3 sm:px-0'>14 - 06 - 2024 <span className='ml-2'>14 : 06</span></td>
                   </tr>
                   <tr className='border-b border-gray-600'>
                     <td className='py-1'>#3</td>
                     <td className='pt-3 flex gap-2 justify-center items-center'>TOON → SUPRA<VscGraph /></td>
                     <td className=''>$ 200.807 k</td>
                     <td className=''>200 <span className='text-gray-400'>TOON</span></td>
                     <td className=''>300.67 <span className='text-gray-400'>SUPRA</span></td>
                     <td className='text-blue-300'>0x905...1c2Af</td>
                     <td className='px-3 sm:px-0'>14 - 06 - 2024 <span className='ml-2'>14 : 06</span></td>
                   </tr>
                   <tr className='border-b border-gray-600'>
                     <td className='py-1'>#4</td>
                     <td className='pt-3 flex gap-2 justify-center items-center'>TOON → SUPRA<VscGraph /></td>
                     <td className=''>$ 200.807 k</td>
                     <td className=''>200 <span className='text-gray-400'>TOON</span></td>
                     <td className=''>300.67 <span className='text-gray-400'>SUPRA</span></td>
                     <td className='text-blue-300'>0x905...1c2Af</td>
                     <td className='px-3 sm:px-0'>14 - 06 - 2024 <span className='ml-2'>14 : 06</span></td>
                   </tr>
                   <tr className='border-b border-gray-600'>
                     <td className='py-1'>#5</td>
                     <td className='pt-3 flex gap-2 justify-center items-center'>TOON → SUPRA<VscGraph /></td>
                     <td className=''>$ 200.807 k</td>
                     <td className=''>200 <span className='text-gray-400'>TOON</span></td>
                     <td className=''>300.67 <span className='text-gray-400'>SUPRA</span></td>
                     <td className='text-blue-300'>0x905...1c2Af</td>
                     <td className='px-3 sm:px-0'>14 - 06 - 2024 <span className='ml-2'>14 : 06</span></td>
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
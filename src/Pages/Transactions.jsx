import React from 'react';
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import barschart from '../assets/barschart.svg'

const Transactions = () => {
  return (
    <div>
      {/* Transactions Table Start */}
           <div className='w-full nav-links-mainbg sm:mx-0 mt-4 sm:mt-0 p-4 sm:mr-5 sm:px-7 sm:py-4 border-3 rounded-xl'>
             <div className='lg:flex items-center justify-between'>
              <p className='text-2xl text-white font-bold'>Transacations</p>

              <div className='sm:flex items-center'>
              {/* Page Changer Start */}
                {/* supra start */}
                <div className='navbar rounded-xl border-3 p-1 my-3 sm:my-0 sm:mr-6'>
                
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
                 <table className="table-auto text-center w-full min-w-[700px]">
    <thead>
      <tr className="text-gray-300 border-b-2 border-gray-600">
        <th className="pb-1">#</th>
        <th className="pb-1 px-3 whitespace-nowrap">Transactions</th>
        <th className="pb-1 px-5 whitespace-nowrap">Total Value</th>
        <th className="pb-1 px-3 whitespace-nowrap">Token 1</th>
        <th className="pb-1 px-3 whitespace-nowrap">Token 2</th>
        <th className="pb-1 px-3 whitespace-nowrap">Account</th>
        <th className="pb-1 px-3 whitespace-nowrap">Time & Date</th>
      </tr>
    </thead>
    <tbody>
      {[1, 2, 3, 4, 5].map((num) => (
        <tr key={num} className="border-b border-gray-600">
          <td className="py-1">#{num}</td>
          <td className="py-2 flex justify-center items-center whitespace-nowrap">
            TOON → SUPRA
            <img src={barschart} alt="barschart" className="sm:w-4 ml-2" />
          </td>
          <td>$ 200.807 k</td>
          <td>200 <span className="text-gray-400">TOON</span></td>
          <td>300.67 <span className="text-gray-400">SUPRA</span></td>
          <td className="text-blue-300 flex justify-center items-center whitespace-nowrap">
            0x905...1c2Af
            <img src={barschart} alt="barschart" className="sm:w-4 ml-2" />
          </td>
          <td className="px-3">14 - 06 - 2024 <span className="ml-2">14 : 06</span></td>
        </tr>
      ))}

      {/* Empty Row */}
      <tr>
        <td className="py-4" colSpan={7}></td>
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
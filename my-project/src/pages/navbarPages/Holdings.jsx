import React from 'react'
import { useState } from 'react';
import img3 from "../../assets/img3.jpg"
import console from "../../assets/console.jpg"

const Holdings = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div>
                <div className='bg-yellow-100 border-2 border-yellow-200 p-1 sm:p-4 md:p-5 lg:p-6 xl:p-2 ml-8'>
                    <p className='text-base'>
                    servers are currently running under maintenance, please co-operate with us for a better trading experience , thankyou <span className='text-blue-500'>Read more</span>
                    </p>
                </div>
                <div className='flex flex-row mt-5'>
                    <p className='text-xl ml-10'>Holdings(32)</p>
                    <div className="relative inline-block">
                        <button
                            id="dropdownDelayButton"
                            className="ml-5 text-black border-2 border-gray-200 text-xs rounded-sm text-sm px-5 py-1.5 text-center inline-flex items-center"
                            type="button"
                            onClick={toggleDropdown}
                        >
                            All stocks
                            <svg
                                className="w-2.5 h-2.5 ms-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>
                        {isOpen && (
                            <div
                                id="dropdownDelay"
                                className="z-10 bg-white divide-y divide-gray-100 rounded-xl shadow-xl border border-slate-400 w-36 absolute left-5"
                            >
                                <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownDelayButton"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="block  px-2 text-xs hover:bg-blue-700 dark:hover:bg-gray-600 hover:text-white"
                                        >
                                            All stocks
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-2 text-xs hover:bg-blue-700 dark:hover:bg-gray-600 hover:text-white"
                                        >
                                            Kite only
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-2 text-xs hover:bg-blue-700 dark:hover:bg-gray-600 hover:text-white"
                                        >
                                            Smallcase
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-2 text-xs hover:bg-blue-700 dark:hover:bg-gray-600 hover:text-white"
                                        >
                                            Mutual funds
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
                {/* <div className="flex flex-col items-center justify-center mt-5">
          <div className="mb-4">
            <img src={img3} alt="" width={100} height={120} />
          </div>
          <div className="text-center">
            <p className='text-gray-500 text-sm w-25 text-cebter'>
            You don't have any stocks in your DEMAT yet. Get started 
            </p>
            <p className='text-gray-500 text-sm w-25 text-cebter'>with absolutely free equity investments.</p>
            <button type="button" class="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 mt-5 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button>
            <div className='flex flex-row item-center justify-center mt-5 '>
              <div className="">
                <img src={console} alt="" width={20} height={20} />
              </div>
              <p className='text-blue-600 ml-2 hover:text-orange-700'>Analytics</p>
            </div>
          </div>
        </div> */}



                <div class="relative overflow-x-auto sm:rounded-lg mt-10 ml-8">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-1">
                                    Total investment
                                </th>
                                <th scope="col" class="px-6 py-1">
                                    Current value
                                </th>
                                <th scope="col" class="px-6 py-1">
                                    Day'sP&L
                                </th>
                                <th scope="col" class="px-6 py-1">
                                    Total P&L
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" class="px-6 py-1 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    2,02,382
                                </th>
                                <td class="px-6 py-1 text-lg">
                                    2,98,494<span className='text-xs ml-1'>32</span>
                                </td>
                                <td class="px-6 py-1 text-lg text-green-500">
                                    18<span className='text-xs ml-1'>94</span><span className='text-xs ml-1'>(+0.0146)</span>
                                </td>
                                <td class="px-6 py-1 text-lg text-green-500">
                                    96,111<span className='text-xs ml-1'>-81</span><span className='text-xs ml-1'>(+47.4906)</span>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>



                <div class="relative overflow-x-auto shadow-md sm:rounded-lg ml-8 mt-10">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-gray-600">
                                    Instrument
                                </th>
                                <th scope="col" class="px-6 py-3 text-gray-600">
                                    Qty.
                                </th>
                                <th scope="col" class="px-6 py-3 text-gray-600">
                                    Avg.cost
                                </th>
                                <th scope="col" class="px-6 py-3 text-gray-600">
                                    LTP
                                </th>
                                <th scope="col" class="px-6 py-3 text-gray-600">
                                    Cur.val
                                </th>
                                <th scope="col" class="px-6 py-3 text-gray-600">
                                    P&L
                                </th>
                                <th scope="col" class="px-6 py-3 text-gray-600">
                                    Net.chg
                                </th>
                                <th scope="col" class="px-6 py-3 text-gray-600">
                                    Day.chg
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    ALOKINDS 
                                </th>
                                <td class="px-6 py-4">
                                    210
                                </td>
                                <td class="px-6 py-4">
                                    20.27
                                </td>
                                <td class="px-6 py-4">
                                    27.39
                                </td>
                                <td class="px-6 py-4">
                                    5,751.90
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    1,495.40
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +35.13%
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 ASHOKA
                                </th>
                                <td class="px-6 py-4">
                                    50
                                </td>
                                <td class="px-6 py-4">
                                    132.50
                                </td>
                                <td class="px-6 py-4">
                                    171.90
                                </td>
                                <td class="px-6 py-4">
                                    8,595.00
                                </td>
                                <td class="px-6 py-4">
                                    1,970.00
                                </td>
                                <td class="px-6 py-4">
                                    +29.74%
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                               
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    CASTROLIND
                                </th>
                                <td class="px-6 py-4">
                                    25
                                </td>
                                <td class="px-6 py-4">
                                    210.00
                                </td>
                                <td class="px-6 py-4">
                                    211.30
                                </td>
                                <td class="px-6 py-4">
                                    5,282.50
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    32.50
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +0.62%
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    CESC
                                </th>
                                <td class="px-6 py-4">
                                    100
                                </td>
                                <td class="px-6 py-4">
                                    78.60
                                </td>
                                <td class="px-6 py-4">
                                    140.90
                                </td>
                                <td class="px-6 py-4">
                                14,090.00
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    6,230.00
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +79.26%
                                </td>
                                <td class="px-6 py-4 text-red-500">
                                    0.14%
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    COALINDIA
                                </th>
                                <td class="px-6 py-4">
                                 20
                                </td>
                                <td class="px-6 py-4">
                                    387.65
                                </td>
                                <td class="px-6 py-4">
                                    453.60
                                </td>
                                <td class="px-6 py-4">
                                    9,064.00
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    1,311.00
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +16.91%
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex items-center justify-center text-slate-600 mt-8 text-xl">
                    <p>Can't Fetch More Data</p>
                </div>

            </div>
        </>
    )
}

export default Holdings

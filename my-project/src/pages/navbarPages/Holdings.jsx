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
                                    HDFCBANK 
                                </th>
                                <td class="px-6 py-4">
                                    22,273
                                </td>
                                <td class="px-6 py-4">
                                    1,346.95
                                </td>
                                <td class="px-6 py-4">
                                    1,494.7
                                </td>
                                <td class="px-6 py-4">
                                    3,32,91,453.1
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    32,90,768.03
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +9.88%
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                 RELIANCE
                                </th>
                                <td class="px-6 py-4">
                                    14,228
                                </td>
                                <td class="px-6 py-4">
                                    2,180.5
                                </td>
                                <td class="px-6 py-4">
                                    2,929.65
                                </td>
                                <td class="px-6 py-4">
                                    4,16,83,060.2
                                </td>
                                <td class="px-6 py-4">
                                    1,16,83,424.2
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +28.03
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                               
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    INFY
                                </th>
                                <td class="px-6 py-4">
                                    18,016
                                </td>
                                <td class="px-6 py-4">
                                    1,387.65
                                </td>
                                <td class="px-6 py-4">
                                    1,468.15
                                </td>
                                <td class="px-6 py-4">
                                    2,64,50,190.4
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    14,50,293.66
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +5.48
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    WIPRO
                                </th>
                                <td class="px-6 py-4">
                                    67,157
                                </td>
                                <td class="px-6 py-4">
                                    387.15
                                </td>
                                <td class="px-6 py-4">
                                    459.35
                                </td>
                                <td class="px-6 py-4">
                                3,08,48,567.95
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    48,48,766.36
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +15.72%
                                </td>
                                <td class="px-6 py-4 text-red-500">
                                    0.14%
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    NIFTYBEES
                                </th>
                                <td class="px-6 py-4">
                                 1,21,445
                                </td>
                                <td class="px-6 py-4">
                                    197.62
                                </td>
                                <td class="px-6 py-4">
                                    246.87
                                </td>
                                <td class="px-6 py-4">
                                    2,99,81,127.15
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    59,81,175.99
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +19.95%
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    BANKBEES
                                </th>
                                <td class="px-6 py-4">
                                    60,861
                                </td>
                                <td class="px-6 py-4">
                                    427.2
                                </td>
                                <td class="px-6 py-4">
                                    488.72
                                </td>
                                <td class="px-6 py-4">
                                    2,97,43,987.92.00
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    37,44,194.72
                                </td>
                                <td class="px-6 py-4 text-red-500">
                                    +12.59%
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    GOLDBEES
                                </th>
                                <td class="px-6 py-4">
                                    4,91,215
                                </td>
                                <td class="px-6 py-4">
                                    52.93
                                </td>
                                <td class="px-6 py-4">
                                    61.61
                                </td>
                                <td class="px-6 py-4">
                                    3,02,63,756.15
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    42,63,744.57
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +14.09%
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    HINDALCO 
                                </th>
                                <td class="px-6 py-4">
                                    20,765
                                </td>
                                <td class="px-6 py-4">
                                    471.95
                                </td>
                                <td class="px-6 py-4">
                                    617.35
                                </td>
                                <td class="px-6 py-4">
                                    1,28,19,272.75
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    30,19,218.15
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +23.55%
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    BHARTIARTL 
                                </th>
                                <td class="px-6 py-4">
                                    11,263
                                </td>
                                <td class="px-6 py-4">
                                    861.23
                                </td>
                                <td class="px-6 py-4">
                                    1,224.55
                                </td>
                                <td class="px-6 py-4">
                                    1,37,91,206.65
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    40,92,050.03
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +29.67%
                                </td>
                                <td class="px-6 py-4 ">
                                    +0.00
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    INDUSTOWER
                                </th>
                                <td class="px-6 py-4">
                                    65,747
                                </td>
                                <td class="px-6 py-4">
                                    170.35
                                </td>
                                <td class="px-6 py-4">
                                    3,345.75
                                </td>
                                <td class="px-6 py-4">
                                    2,19,95,658.85
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    1,07,95,656
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +49.80%
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                            </tr>
                             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    ABCAPITAL
                                </th>
                                <td class="px-6 py-4">
                                    3,78,465
                                </td>
                                <td class="px-6 py-4">
                                    160.15
                                </td>
                                <td class="px-6 py-4">
                                    205.55
                                </td>
                                <td class="px-6 py-4">
                                    77,00,930.75
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    17,00,905.4
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +22.05%
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                            </tr>
                             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    BANDHANBNK
                                </th>
                                <td class="px-6 py-4">
                                    38,604
                                </td>
                                <td class="px-6 py-4">
                                    2,971.9
                                </td>
                                <td class="px-6 py-4">
                                    175.95
                                </td>
                                <td class="px-6 py-4">
                                    67,92,373.8
                                </td>
                                <td class="px-6 py-4 text-red-500">
                                    -47,07,703.9
                                </td>
                                <td class="px-6 py-4 text-red-500">
                                    -69.31%
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                            </tr>
                             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    CONCOR
                                </th>
                                <td class="px-6 py-4">
                                    17,811
                                </td>
                                <td class="px-6 py-4">
                                    696.2
                                </td>
                                <td class="px-6 py-4">
                                    928.9
                                </td>
                                <td class="px-6 py-4">
                                    1,65,44,637.9
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    41,44,613.62
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +25.05
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                            </tr>
                             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    TATACOMM
                                </th>
                                <td class="px-6 py-4">
                                    7,943
                                </td>
                                <td class="px-6 py-4">
                                    1,221.2
                                </td>
                                <td class="px-6 py-4">
                                    1,908.9
                                </td>
                                <td class="px-6 py-4">
                                    1,51,62,392.7
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    54,62,405.83
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +36.06
                                </td>
                                <td class="px-6 py-4">
                                    0.00%
                                </td>
                            </tr>
                             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    ESCOURTS
                                </th>
                                <td class="px-6 py-4">
                                    3,930
                                </td>
                                <td class="px-6 py-4">
                                    2,035.65
                                </td>
                                <td class="px-6 py-4">
                                    3,002.75
                                </td>
                                <td class="px-6 py-4">
                                    1,18,00,807.5
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    38,00,653.35
                                </td>
                                <td class="px-6 py-4 text-green-500">
                                    +32.21%
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
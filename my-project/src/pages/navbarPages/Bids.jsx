import React from 'react'
import alert from "../../assets/alert.jpg"
import console from "../../assets/console.jpg"
const Bids = () => {
  return (
    <>
      <div>
        {/* <div className='bg-yellow-100 border-2 border-yellow-300 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8'>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>
            The equity, F&O, and currency markets will remain closed today, on account of Ram Navami. Commodity markets will be closed for the first half and trading will be open only in the evening session (5:00 pm onwards).
            <span className='text-blue-500'>Read more</span>
          </p>
        </div> */}

        <div className='flex flex-row'>
          <p className='ml-10 hover:border-b-2 hover:border-orange-500 hover:text-orange-500'> Auctions</p>
          <p className='ml-10  hover:border-b-2 hover:border-orange-500 hover:text-orange-500'>IPO</p>
          <p className='ml-10  hover:border-b-2 hover:border-orange-500 hover:text-orange-500'>Govt.securities</p>
        </div>
        <div className='text-gray-300 border'></div>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="mb-4">
            <img src={alert} alt="" width={100} height={120} />
          </div>
          <div className="text-center">
            <p className='text-gray-500 text-sm w-25'>
              There are no stocks for auctions yet.
              The auction market opens at 2 PM. Stocks
            </p>
            <p className='text-gray-500 text-sm w-25'>
              eligible to be sold in the auction will be listed here. <span className='text-blue-600'>Read more.</span></p>
            <button type="button" class="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 mt-5 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button>
            <div className='flex flex-row item-center justify-center mt-5 '>
              <div className="">
                <img src={console} alt="" width={20} height={20} />
              </div>
              <p className='text-blue-600 ml-2 hover:text-orange-700'>Analytics</p>
            </div>
          </div>
        </div>


      </div>
    </>

  )
}

export default Bids
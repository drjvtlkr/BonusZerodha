import React from "react";
import upi from "../../assets/upi2.jpg";
import { GiPieChart } from "react-icons/gi";
import { LuLoader2 } from "react-icons/lu";
import { MdOutlineHelpOutline } from "react-icons/md";
import { FiDroplet } from "react-icons/fi";
const Funds = () => {
  return (
    <div>
      <div className="flex justify-end">
        <p className="mt-2">Instant, zero-cost fund transfers with </p>
        <img src={upi} alt="" className="w-10 h-8 ml-3 mt-2" />
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-3">
          Add Funds
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3">
          Withdraw
        </button>
      </div>

      <div className="mt-14 flex justify-around items-center">
        
        <div className="p-4 w-2/6 ">
        <div className="flex justify-between mb-5">
          <div className="flex  items-center ml-4">
            <GiPieChart />
            <p className="ml-3 text-lg text-gray-500">Equity</p>
          </div>
          <div className="flex">
            <LuLoader2 className="text-blue-500 text-2xl" />
            <p className="ml-2 text-blue-600 text-md"> view statement</p>
            <MdOutlineHelpOutline className="text-blue-500 text-2xl ml-3" />
            <p className="ml-2 text-blue-600 text-md"> Help</p>
          </div>
        </div>
          <div className="border border-gray-300 rounded-md mx-auto">
              <div className="flex justify-between  mb-2 ml-4">
                <span className="text-gray-600">Available Margin:</span>
                <p className="text-black text-bold text-2xl mr-4">0.00</p>
              </div>
              <div className="flex justify-between items-center mb-2 ml-4">
                <span className="text-gray-600">Used Margin:</span>
                <p className="text-black text-bold text-2xl mr-4">0.00</p>
              </div>
              <div className="flex justify-between items-center mb-2 ml-4">
                <span className="text-gray-600">Available cash:</span>
                <p className="text-black text-bold text-2xl mr-4">0.00</p>
              </div>
              <div className="my-3 text-gray-500 border"></div>
              <div className="flex justify-between items-center mb-2 ml-4">
                <span className="text-gray-600">Opening Balance:</span>
                <p className="text-black-600 mr-4">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4">
                <span className="text-gray-600">Payin:</span>
                <p className="text-black-600 mr-4">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">Payout:</span>
                <p className="text-black-600">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">SPAN:</span>
                <p className="text-black-600">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">Deliveery Margin:</span>
                <p className="text-black-600">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">Exposure:</span>
                <p className="text-black-600">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">Options premium:</span>
                <p className="text-black-600">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">Collateral(Liquid funds):</span>
                <p className="text-black-600">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">Collateral(Equity):</span>
                <p className="text-black-600">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">Total Collateral:</span>
                <p className="text-black-600">0.00</p>
              </div>
            
          </div>
        </div>

        <div className="p-4 w-2/6 ">
        <div className="flex justify-between mb-5">
          <div className="flex  items-center ml-4">
            <FiDroplet />
            <p className="ml-3 text-lg text-gray-500">Commodity</p>
          </div>
          <div className="flex">
            <LuLoader2 className="text-blue-500 text-2xl" />
            <p className="ml-2 text-blue-600 text-md"> view statement</p>
            <MdOutlineHelpOutline className="text-blue-500 text-2xl ml-3" />
            <p className="ml-2 text-blue-600 text-md"> Help</p>
          </div>
        </div>
          <div className="border border-gray-300 rounded-md mx-auto">
              <div className="flex justify-between  mb-2 ml-4">
                <span className="text-gray-600">Available Margin:</span>
                <p className="text-black text-bold text-2xl mr-4">0.00</p>
              </div>
              <div className="flex justify-between items-center mb-2 ml-4">
                <span className="text-gray-600">Used Margin:</span>
                <p className="text-black text-bold text-2xl mr-4">0.00</p>
              </div>
              <div className="flex justify-between items-center mb-2 ml-4">
                <span className="text-gray-600">Available cash:</span>
                <p className="text-black text-bold text-2xl mr-4">0.00</p>
              </div>
              <div className="my-3 text-gray-500 border"></div>
              <div className="flex justify-between items-center mb-2 ml-4">
                <span className="text-gray-600">Opening Balance:</span>
                <p className="text-black-600 mr-4">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4">
                <span className="text-gray-600">Payin:</span>
                <p className="text-black-600 mr-4">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">Payout:</span>
                <p className="text-black-600">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">SPAN:</span>
                <p className="text-black-600">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">Deliveery Margin:</span>
                <p className="text-black-600">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">Exposure:</span>
                <p className="text-black-600">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">Options premium:</span>
                <p className="text-black-600">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">Collateral(Liquid funds):</span>
                <p className="text-black-600">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">Collateral(Equity):</span>
                <p className="text-black-600">0.00</p>
              </div>
              <div className="flex justify-between items-center ml-4 mr-4">
                <span className="text-gray-600">Total Collateral:</span>
                <p className="text-black-600">0.00</p>
              </div>
            
          </div>
        </div>

      </div>

    </div>
  );
};

export default Funds;

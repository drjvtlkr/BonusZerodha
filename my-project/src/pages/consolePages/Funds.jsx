import React from "react";
import Position from "../../assets/position.jpg";
import console from "../../assets/console.jpg";

const Funds = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="mb-4">
            <img src={Position} alt="" width={100} height={120} />
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Choose your funds
            </p>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 mt-5 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Get Started
            </button>
            <div className="flex flex-row item-center justify-center mt-5 ">
              <div className="">
                <img src={console} alt="" width={20} height={20} />
              </div>
              <p className="text-blue-600 ml-2 hover:text-orange-700">
                Analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;

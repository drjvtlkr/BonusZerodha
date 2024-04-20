import React from "react";
import { TfiPieChart } from "react-icons/tfi";
import { RiDropLine } from "react-icons/ri";
import { LuLoader2 } from "react-icons/lu";
import { BsBriefcase } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import console from "../../assets/console.jpg"
import Position from "../../assets/position.jpg"
import graphdash from "../../assets/graphdash.jpg"
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ml-64">
        <div className="flex items-center shadow-md py-4 ">
          <h2 className="text-4xl font-light text-black">Hello, Shrivatsa </h2>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 px-4 py-2 bg-white rounded shadow-md">
            <div className=" flex items-center ">
              <TfiPieChart />
              <h2 className="mx-4">Equity</h2>
            </div>

            <div class="flex flex-wrap">
              <div class="w-full md:w-1/2 px-4 py-2 bg-px-4-100 rounded shadow-md">
                <h3 className="text-5xl px-8 py-4 font-extralight">0</h3>
                <p className="text-gray-500 px-8">Margin available</p>
              </div>
              <div class="w-full md:w-1/2 px-4 py-2 bg-px-4-100 rounded shadow-md">
                <ul>
                  <li className="py-4 px-4">Margin Used 0</li>
                  <li className="py-4 px-4">Opening Balance 0</li>
                  <li className="flex py-4 px-4">
                    <LuLoader2 className="text-cyan-600 text-2xl" />
                    <button
                      className="text-blue-600"
                      onClick={() => navigate(`/console/funds`)}
                    >
                      View statement
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-4 py-2 bg-white rounded shadow-md">
            <div className=" flex items-center">
              <RiDropLine />
              <h2 className="mx-4">Comodity</h2>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full md:w-1/2 px-4 py-2 bg-px-4-100 rounded shadow-md">
                <h3 className="text-5xl px-8 py-4 font-extralight">0</h3>
                <p className="text-gray-500 px-8">Margin available</p>
              </div>
              <div class="w-full md:w-1/2 px-4 py-2 bg-px-4-100 rounded shadow-md">
                <ul>
                  <li className="py-4 px-4">Margin Used 0</li>
                  <li className="py-4 px-4">Opening Balance 0</li>
                  <li className="flex py-4 px-4">
                    <LuLoader2 className="text-cyan-600 text-2xl" />
                    <button
                      className="text-blue-600"
                      onClick={() => navigate(`/console/funds`)}
                    >
                      View statement
                    </button>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-10">
          <p className="text-red-700">Holdings(1)</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className=" mt-8">
            <p className="text-3xl text-green-700">6.35 Cr<span className="text-sm text-green-600">+16.94%</span></p>
            <p className="text-" >P&L</p>
          </div>
          <div className="mr-32">
            <p>Current value <span className="ml-8">55.6</span></p>
            <p>Investment <span className="ml-8">62.2</span></p>
          </div>
        </div>
        <div className="w-10/12 h-8 mt-6 bg-blue-500">
        </div>

        <div className="flex flex-row justify-between">
          <div className="mt-5">
            <p> ₹55.60</p>
          </div>
          <div className="flex flex-row mr-16 mt-5">

            <div class="flex items-center">
              <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600  border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Current value</label>
            </div>
            <div class="flex items-center ml-4">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Investment value</label>
            </div>
            <div class="flex items-center ml-4">
              <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">P&L  </label>
            </div>

          </div>
        </div>
        <div className="flex flex-row justify-between mt-8">
          <div className="">
          <img src={graphdash} alt="" width={460} height={300} />

          </div>
          <div className=" mr-10">
          <div className="flex flex-col items-center justify-center mt-5">
          <div className="mb-4">
            <img src={Position} alt="" width={100} height={120} />
          </div>
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              You don't have any positions yet
            </p>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 mt-5 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Get Started
            </button>
            
          </div>
        </div>
          </div>
        </div>
        {/* <div className="pt-40">
          <div className="flex items-center justify-center">
            <BsBriefcase className="text-gray-400 text-9xl" />
          </div>

          <div className="">
            <div className="flex items-center justify-center">
              <p className="text-center text-gray-500">
                You don't have any stocks in your DEMAT yet. Get started <br />
                with absolutely free equity investments
              </p>
            </div>
            <div className="flex justify-center py-20">
              <button className="bg-blue-500 px-4 py-4 rounded text-white">
                Start Investing
              </button>
            </div>
          </div>
        </div> */}

        {/* <div>
          <h3 className="text-gray-500 text-3xl">Market Overview</h3>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;

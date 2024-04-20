import React from "react";
import { TfiPieChart } from "react-icons/tfi";
import { RiDropLine } from "react-icons/ri";
import { LuLoader2 } from "react-icons/lu";
import { BsBriefcase } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
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
        <div className="w-50 h-8 bg-blue-500">

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

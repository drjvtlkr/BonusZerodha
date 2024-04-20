import React from "react";
import { Outlet } from "react-router-dom";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";

const SideBarr = () => {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        style={{ width: "27%" }}
        id="default-sidebar"
        class="fixed top-0 left-0 z-40  h-screen transition-transform -translate-x-full sm:translate-x-0 !important"
        aria-label="Sidebar"
      >
        <div class="h-full px-4 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li className="flex flex-row">
              <p class="text-xs mr-2 flex">
                NIFTY 50 <span class="text-orange-600">21995.85</span>{" "}
                <span class="text-gray-400">-152.05(-0.69%)</span>
              </p>
              <p class="text-xs mt-0.5">
                SENSEX<span class="text-orange-600">72488.99</span>
                <span class="text-gray-400">-454.69(-0.62%)</span>
              </p>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="text-xs ml-3 text-gray-500 font-extralight flex-1">
                  Search (infy bse, nifty fut, etc)
                </span>
                <span class="text-xs ml-3 text-gray-500 font-extralight align-end">
                  8/50
                </span>
              </a>
            </li>
            <li>
            <div className="my-3 text-gray-500 border"></div>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 whitespace-nowrap text-sm text-green-500">
                  GOLDBEES
                </span>
                <span class="inline-flex justify-between mr-2 text-xs text-gray-800">
                  <span class="justify-start">0.07</span>
                </span>
                <span class="text-xs mr-2 justify-start">0.11%</span>
                <SlArrowUp className="text-green-500 text-xs mr-2" />
                <span class="text-xs mr-2 justify-start">61.96</span>
              </a>
            </li>
            <div className="my-3 text-gray-500 border"></div>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 whitespace-nowrap text-sm text-orange-500">
                  HDFCBANK
                </span>
                <span class="inline-flex justify-between mr-2 text-xs text-gray-800">
                  <span class="justify-start">-14.55</span>
                </span>
                <span class="text-xs mr-2 justify-start">-0.96%</span>
                <SlArrowDown className="text-orange-500 text-xs mr-2" />
                <span class="text-xs mr-2 justify-start">1494.70</span>
              </a>
            </li>
            <div className="my-3 text-gray-500 border"></div>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 whitespace-nowrap text-sm text-orange-500">
                  HINDUNILVR
                </span>
                <span class="inline-flex justify-between mr-2 text-xs text-gray-800">
                  <span class="justify-start">-6.00</span>
                </span>
                <span class="text-xs mr-2 justify-start">-0.27%</span>
                <SlArrowDown className="text-orange-500 text-xs mr-2" />
                <span class="text-xs mr-2 text-orange-500">2214.80</span>
              </a>
            </li>
            <div className="my-3 text-gray-500 border"></div>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 whitespace-nowrap text-sm text-orange-500">
                  ONGC
                </span>
                <span class="inline-flex justify-between mr-2 text-xs text-gray-800">
                  <span class="justify-start">-9.00</span>
                </span>
                <span class="text-xs mr-2 justify-start">-3.18%</span>
                <SlArrowDown className="text-orange-500 text-xs mr-2" />
                <span class="text-xs mr-2 text-orange-500">274.15</span>
              </a>
            </li>
            <div className="my-3 text-gray-500 border"></div>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 whitespace-nowrap text-sm text-green-500">
                  INFY
                </span>
                <span class="inline-flex justify-between mr-2 text-xs text-gray-800">
                  <span class="justify-start">4.80</span>
                </span>
                <span class="text-xs mr-2 justify-start">0.34%</span>
                <SlArrowUp className="text-green-500 text-xs mr-2" />
                <span class="text-xs mr-2 text-green-500">1419.25</span>
              </a>
            </li>
            <div className="my-3 text-gray-500 border"></div>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 whitespace-nowrap text-sm text-orange-500">
                  TCS
                </span>
                <span class="inline-flex justify-between mr-2 text-xs text-gray-800">
                  <span class="justify-start">-10.80</span>
                </span>
                <span class="text-xs mr-2 justify-start">-0.28%</span>
                <SlArrowDown className="text-orange-500 text-xs mr-2" />
                <span class="text-xs mr-2 text-orange-500">3862.00</span>
              </a>
            </li>
            <div className="my-3 text-gray-500 border"></div>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 whitespace-nowrap text-sm text-green-500">
                  IRFC
                </span>
                <span class="inline-flex justify-between mr-2 text-xs text-gray-800">
                  <span class="justify-start">0.20</span>
                </span>
                <span class="text-xs mr-2 justify-start">0.14%</span>
                <SlArrowUp className="text-green-500 text-xs mr-2" />
                <span class="text-xs mr-2 text-green-500">141.90</span>
              </a>
            </li>
            <div className="my-3 text-gray-500 border"></div>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 whitespace-nowrap text-sm text-green-500">
                  IRFC
                </span>
                <span class="inline-flex justify-between mr-2 text-xs text-gray-800">
                  <span class="justify-start">0.25</span>
                </span>
                <span class="text-xs mr-2 justify-start">0.18%</span>
                <SlArrowDown className="text-green-500 text-xs mr-2" />
                <span class="text-xs mr-2 text-green-500">141.95</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64">
        <Outlet />
      </div>
    </>
  );
};
export default SideBarr;

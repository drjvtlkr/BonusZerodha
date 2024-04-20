import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BellIcon } from "@heroicons/react/24/outline";
import kitelogo from "../assets/kitelogo.jpg";

export const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div></div>
          {/* <img src={kitelogo} className="h-10" alt="Zerodha Logo" /> */}
          <p className="text-2xl text-blue-600 font-bold">Console</p>

          <div
            className="items-center justify-end hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/console/dashboard"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-orange-700 md:p-0 md:dark:text-orange-500"
                  aria-current="page"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/console/portfolio"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/console/reports"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Reports
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 md:dark:text-orange-500"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  Funds
                </button>
                {isDropdownOpen && (
                  <ul className="absolute z-10 left-0 mt-2 w-48 bg-white shadow-md rounded-md divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    <li>
                      <Link
                        to="/console/funds/option1"
                        className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-100 w-full text-left focus:outline-none"
                      >
                        Option 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/console/funds/statement"
                        className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-100 w-full text-left focus:outline-none"
                      >
                        Statement
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/console/funds/option3"
                        className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-100 w-full text-left focus:outline-none"
                      >
                        Option 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/console/funds/option4"
                        className="block py-2 px-4 text-sm text-gray-900 hover:bg-gray-100 w-full text-left focus:outline-none"
                      >
                        Option 4
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/console/accounts"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Account
                </Link>
              </li>
              <button
                type="button"
                className="relative rounded-full bg-white-800 p-1 text-black-400 hover:text-orange-700 focus:outline-none focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-5 w-5 ml-12" aria-hidden="true" />
              </button>
              <button>User Profile</button>
              <li className="h-5 w-5">PQC870</li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

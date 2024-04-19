import React from "react";
import { Link } from "react-router-dom";
import { BellIcon } from "@heroicons/react/24/outline";
import zerodhaLogo from "../assets/zerodhaLogo.png";

export const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          
        </div>
        <img src={zerodhaLogo} className="h-7" alt="Zerodha Logo" />

        <div
          className="items-center justify-end hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/home/dashboard"
                className="block py-2 px-3 text-white bg-blue-700 font-light rounded md:bg-transparent md:text-orange-700 md:p-0 md:dark:text-orange-500"
                aria-current="page"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/home/orders"
                className="block py-2 px-3 text-gray-900 rounded font-light hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="/home/holdings"
                className="block py-2 px-3 text-gray-900 rounded font-light hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Holdings
              </Link>
            </li>
            <li>
              <Link
                to="/home/positions"
                className="block py-2 px-3 text-gray-900 rounded font-light hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Positions
              </Link>
            </li>
            <li>
              <Link
                to="/home/bids"
                className="block py-2 px-3 text-gray-900 rounded font-light hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Bids
              </Link>
            </li>
            <li>
              <Link
                to="/home/funds"
                className="block py-2 px-3 text-gray-900 rounded font-light hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Funds
              </Link>
            </li>
            <button
              type="button"
              className="relative rounded-full bg-white-800 p-1 text-black-400 hover:text-orange-700 focus:outline-none focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon />
            </button>
            <button>User Profile</button>
            <li className="h-5 w-5">PQC870</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BellIcon } from "@heroicons/react/24/outline";
import { LuUser } from "react-icons/lu";
import { IoPieChartOutline } from "react-icons/io5";
import { CiBitcoin } from "react-icons/ci";
import { SlSupport } from "react-icons/sl";
import { FiUserPlus } from "react-icons/fi";
import { ImCompass2 } from "react-icons/im";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import kitelogo from "../assets/kitelogo.jpg";
import sv from "../assets/sv.png";

const navBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div></div>
          <img src={kitelogo} className="h-4 ml-10 mb-8" alt="Zerodha Logo" />

          <div
            className="items-center justify-end hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/home/dashboard"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/home/orders"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/home/holdings"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Holdings
                </Link>
              </li>
              <li>
                <Link
                  to="/home/positions"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Positions
                </Link>
              </li>
              <li>
                <Link
                  to="./bids"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Bids
                </Link>
              </li>
              <li>
                <Link
                  to="funds"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Funds
                </Link>
              </li>
              <li className="flex ">
                <button
                  type="button"
                  className="relative rounded-full bg-white-800 p-1 text-black-400 hover:text-orange-700 focus:outline-none focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-5 w-5 ml-12 mb-4" aria-hidden="true" />
                </button>
                <button
                  onClick={toggleOpen}
                  className="flex items-center justify-center ml-10"
                >
                  <img src={sv} className="w-10 h-10 mb-4" />
                  <p className="mb-3" onClick={toggleOpen}>TQC870</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          className=" absolute top-52 left-3/4 transform -translate-x-1/2 -translate-y-40  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-56"
          style={{ zIndex: "100" }}
        >
          <div className="p-5">
            <p className="text-lg">Shrivatsa Vasantrao Kulkarni</p>
            <p className="text-gray-400">shrivatsakulkarni@gmail.com</p>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 "
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              <a
                href="#"
                className="px-4 py-2 hover:bg-gray-100 flex justify-start items-center gap-2 border-b border-gray-100"
              >
                <LuUser />
                My Profile
              </a>
            </li>
            <li>
              <Link
                to="/console/dashboard"
                className="px-4 py-2 hover:bg-gray-100 flex justify-start items-center gap-2 "
              >
                <IoPieChartOutline /> Console
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 hover:bg-gray-100 flex justify-start items-center gap-2"
              >
                <CiBitcoin />
                Coin
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 hover:bg-gray-100 flex justify-start items-center gap-2"
              >
                <SlSupport />
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 hover:bg-gray-100 flex justify-start items-center gap-2 border-b border-gray-100 "
              >
                <FiUserPlus />
                Invite friends
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 hover:bg-gray-100 flex justify-start items-center gap-2 "
              >
                <ImCompass2 />
                Tour Kite
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 hover:bg-gray-100 flex justify-start items-center gap-2 "
              >
                <MdOutlineKeyboardCommandKey />
                Keyboard shortcuts
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 hover:bg-gray-100 flex justify-start items-center gap-2 "
              >
                <BsQuestionCircle />
                User manual
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex justify-start items-center gap-2 "
            >
              <IoIosLogOut /> Sign out
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default navBar;
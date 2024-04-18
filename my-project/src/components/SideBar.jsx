import React, { useState } from "react";
import SideBarFooter from "./SideBarFooter";
import { FaRegCircle } from "react-icons/fa";

const SideBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [coins, setCoins] = useState([
    {
      id: 1,
      name: "GOLDBEES",
      value: "0.00",
      change: "0.00%",
      mainValue: "60.11",
    },
    {
      id: 2,
      name: "HDFCBANKET",
      value: "0,00",
      change: "0,00%",
      mainValue: "60.11",
    },
    {
      id: 3,
      name: "HINDUNILVR",
      value: "0.00",
      change: "0.00%",
      mainValue: "60.11",
    },
    { id: 4, name: "ONGC", value: "0.00", change: "0.00%", mainValue: "60.11" },
    {
      id: 5,
      name: "INFY WINT",
      value: "0.00",
      change: "0.00%",
      mainValue: "60.11",
    },
    { id: 6, name: "TCS", value: "0.00", change: "0.00%", mainValue: "60.11" },
    { id: 7, name: "IRFC", value: "0,00", change: "0,00%", mainValue: "60.11" },
  ]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm)
  );

  const characterCount = searchTerm.length;

  return (
    <div className="fixed left-0 top-0 h-full bg-white border-r border-gray-200 overflow-y-auto w-1/4">
      <div className="flex items-center px-3 py-2 border-b border-gray-200 focus:outline-none focus:ring-blue-500">
        <svg
          className="h-5 w-5 text-gray-400 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          placeholder="Search (infy bse, nifty fut, etc.)"
          className="w-full border-none rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleChange}
        />
        <span className="text-sm text-gray-500 ml-2">
          {characterCount}/50
        </span>
      </div>
      <ul className="list-none divide-y divide-gray-200">
        {filteredCoins.map((coin) => (
          <li key={coin.id} className="py-3 px-4 hover:bg-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-800">
                {coin.name}
              </span>
              <div className="flex justify-end">
                <span className="textm text-gray-500 pr-5">{coin.value}</span>
                <span className="textm text-gray-500 pr-5">{coin.change}</span>
                <FaRegCircle className="flex justify-center pr-1 mr-1 mt-1" />
                <span className="textm text-gray-500">{coin.mainValue}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <SideBarFooter />
    </div>
  );
};

export default SideBar;

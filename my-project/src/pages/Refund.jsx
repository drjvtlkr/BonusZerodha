import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { DateRangePicker, Stack } from "rsuite";
import data from "./data";
import alert from "../assets/pagenot.jpeg";
import calendarImage from "../assets/calender.png"; // Import calendar image
import "./Refund.css";

const Refund = () => {
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);


  const handleDateRangeChange = (value) => {
    setSelectedDateRange(value);
  };

  return (
    <div className="px-8">
      <div className="flex text-2xl text-gray-500 ml-4 md:ml-48 ">
        {/* <img src={yourImageHere} alt="Your Image" className="text-4xl mr-3" />{" "} */}
        <MdBarChart className="text-4xl mr-3" /> <p>P&L</p>
      </div>
      <div className="my-4 text-gray-500 border"></div>
      <div className="flex justify-around align-middle">
        {/* Segment dropdown */}
        <div className="relative">
          <p className="mb-3 text-gray-500">Segment</p>
          <select
            className="block appearance-none w-48 px-4 py-2 pr-8 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:border-blue-500"
            defaultValue="Select segment"
          >
            <option value="features">Futures & options</option>
            <option value="options">Equity</option>
            <option value="options">Currency</option>
            <option value="options">Commodity</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"></div>
        </div>

        {/* P&L dropdown */}
        <div className="relative">
          <p className="mb-3 text-gray-500"> P&L</p>
          <select
            className="block appearance-none w-48 px-4 py-2 pr-8 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:border-blue-500"
            defaultValue="Combined"
          >
            <option value="dummy1">Combined</option>
            <option value="dummy2">Dummy2</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"></div>
        </div>

        {/* Symbol div */}
        <div className=" text-gray-500">
          Symbol
          <div className="w-48 py-2 px-4 mt-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:border-blue-500">
            eg: NIFTY
          </div>
        </div>

        {/* Date range dropdown */}
        <div>
          <div className="">
            <p className="mb-3 text-gray-500">Date Range</p>
            <Stack spacing={10} direction="column" alignItems="flex-start">
              <DateRangePicker
                format="yyyy/MM/dd"
                character=" – "
                onChange={handleDateRangeChange}
              />
            </Stack>
          </div>
        </div>

        {/* Tags div */}
        <div className=" text-gray-500">
          Tags
          <div className="w-48 py-2 px-4 mt-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:border-blue-500">
            Filter by tags
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 mb-2 px-4 rounded"
        >
          <FaChevronRight />
        </button>
      </div>
    
      <div className="py-5">
        {selectedDateRange && (
          <div className="mt-4 flex justify-end px-5">
            <CiClock1 className="mr-3 text-xl" />
            <div>
              <p>
                {selectedDateRange[0].toISOString().substring(0, 10)} to{" "}
                {selectedDateRange[1].toISOString().substring(0, 10)}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Show the calendar image only if showCalendar is true */}
     
      {showCalendar && (
        <div className="flex justify-center items-center">
          <img src={calendarImage} alt="Calendar" className="w-5/6 mb-20" />
        </div>
        
      )}

      {/* Show the whole data when showCalendar is true */}
      {showCalendar && (
        <div>
          <div className="grid grid-cols-5 gap-4 border bg-gray-100 py-6 mb-6 text-lg">
            <div className="flex flex-col items-center justify-center">
              <p>Realised P&L</p>
              <div className="hover-container">
                <p className="short-value font-bold text-red-500 text-4xl">
                  129L
                </p>
                <div className="full-value w-36 shadow-xl">
                  Realised P&L 12918271.34
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>Charges & taxes</p>
              <div className="hover-container">
                <p className="short-value font-bold text-4xl">448L</p>
                <div className="full-value w-36 shadow-xl">
                  Charges & taxes 4483278.752
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p>Other credits & debits</p>
              <div className="hover-container">
                <p className="short-value font-bold text-4xl">141.6</p>
                <div className="full-value w-40 shadow-xl">
                  credits & debits 141.6000
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p>Net realised P&L</p>
              <div className="hover-container">
                <p className="short-value font-bold text-red-500 text-4xl">
                  -
                </p>
                <div className="full-value w-36 shadow-xl">
                  Net realised P&L -
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p>Unrealised P&L</p>
              <div className="hover-container">
                <p className="short-value font-bold text-4xl">0</p>
                <div className="full-value w-36 shadow-xl">
                  Unrealised P&L 0.00
                </div>
              </div>
            </div>
          </div>

          {/* table */}
          <div className="overflow-x-auto mt-28   p-4">
  <div className="flex justify-between mb-4">
    <div className="text-lg font-medium">Showing page 1(rows 1 -14 ) Latest updated : 2024-04-19</div>
    <div className="flex">
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-1 mr-2 border border-gray-300 rounded-md"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Download</button>
    </div>
  </div>
  <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
    <thead className="py-4">
      <tr>
        <th
          scope="col"
          className="px-6 py-6 text-left text-xs font-medium text-gray-500 bg-gray-100 uppercase tracking-wider border-r border-gray-200"
        >
          Symbol
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
        >
          QTY
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
        >
          Buy avg
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
        >
          Buy Value
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
        >
          Sell Avg
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
        >
          Sell Value
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200"
        >
          Realised P&L
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Unrealised P&L
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((item, index) => (
        <tr key={index} className="hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">
            {item.symbol}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
            {item.qty}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
            {item.buyAvg}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
            {item.buyValue}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
            {item.sellAvg}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-200">
            {item.sellValue}
          </td>
          <td
            className={`px-6 py-4 whitespace-nowrap text-sm ${
              item.realisedPL < 0 ? "text-red-500" : "text-green-500"
            } border-r border-gray-200`}
          >
            {item.realisedPL}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {item.unrealisedPL}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        </div>
      )}

      {!showCalendar && (
        <div className="flex flex-col items-center justify-center">
          <img src={alert} alt="No data" className="w-96 h-80 mt-8" />
        </div>
      )}
    </div>
  );
};
  

export default Refund;

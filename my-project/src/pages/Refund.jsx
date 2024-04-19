import React, { useEffect, useState } from "react";
import { MdBarChart } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { DateRangePicker, Stack } from "rsuite";
// import './styles.css';
const Refund = () => {
  const [selectedDateRange, setSelectedDateRange] = useState(null);

  const handleDateRangeChange = (value) => {
    setSelectedDateRange(value);
  };

  useEffect(() => {
    // Load Google Charts library
    google.charts.load("current", { packages: ["calendar"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var dataTable = new window.google.visualization.DataTable();
      dataTable.addColumn({ type: 'date', id: 'Date' });
      dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
      dataTable.addRows([
        [ new Date(2024, 3, 13), 37032 ],
        [ new Date(2024, 3, 14), 38024 ],
        [ new Date(2024, 3, 15), 38024 ],
        [ new Date(2024, 3, 16), 38108 ],
        [ new Date(2024, 3, 17), 38229 ],

        [ new Date(2024, 0, 13), 27032 ],
        [ new Date(2024, 1, 14), 58024 ],
        [ new Date(2024, 1, 15), 8024 ],
        [ new Date(2024, 1, 16), 58108 ],
        [ new Date(2024, 1, 17), 58229 ],

        
        // Many rows omitted for brevity.
        [ new Date(2023, 9, 4), 38177 ],
        [ new Date(2023, 9, 5), 38705 ],
        [ new Date(2023, 9, 12), 38210 ],
        [ new Date(2023, 9, 13), 38029 ],
        [ new Date(2023, 9, 19), 38823 ],
        [ new Date(2023, 9, 23), 38345 ],
        [ new Date(2023, 9, 24), 38436 ],
        [ new Date(2023, 9, 30), 38447 ]
      ]);

      var chart = new window.google.visualization.Calendar(document.getElementById('calendar_basic'));

      var options = {
        // title: "Red Sox Attendance",
        height: 350,
        colorAxis: { colors: ['red', 'orange', 'yellow', 'green'] }
      };

      chart.draw(dataTable, options);
    }
  }, []);
  return (
    <div className="px-5">
      <div className="flex text-2xl text-gray-500">
        <MdBarChart className="text-4xl mr-3" /> <p>P&L</p>
      </div>
      <div className="my-4 text-gray-500 border"></div>
      <div className="flex gap-4">
        {/* Segment dropdown */}

        <div className="relative">
          <p className="mb-3 text-gray-500">Segment</p>
          <select
            className="block appearance-none w-48 px-4 py-2 pr-8 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:border-blue-500"
            defaultValue="Futures & options"
          >
            <option value="features">Futures & options</option>
            <option value="options">Options</option>
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
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 mb-2 px-4 rounded">
          <FaChevronRight />
        </button>
      </div>

      <div className="py-5">
      {selectedDateRange && (
        <div className="mt-4 flex justify-end px-5">
            <CiClock1 className="mr-3 text-xl"/>
          <div>
            <p> {selectedDateRange[0].toISOString().substring(0, 10)} to {selectedDateRange[1].toISOString().substring(0, 10)}</p>
          </div>
        </div>
      )}
      </div>

      <div id="calendar_basic" style={{ width: '100%', height: '350px' }}></div>

    </div>
  );
};

export default Refund;

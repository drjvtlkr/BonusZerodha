import React, { useEffect, useState } from "react";
import { MdBarChart } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { DateRangePicker, Stack } from "rsuite";
import data from "./data";
import "./Refund.css";

const Refund = () => {
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [chartLoaded, setChartLoaded] = useState(false);
  const handleDateRangeChange = (value) => {
    setSelectedDateRange(value);
  };

  useEffect(() => {
    if (showCalendar && !chartLoaded) {
      // Load Google Charts library only if not already loaded
      google.charts.load("current", { packages: ["calendar"] });
      google.charts.setOnLoadCallback(() => {
        setChartLoaded(true); // Set chartLoaded to true when library is loaded
      });
    }
  }, [showCalendar, chartLoaded]);

  useEffect(() => {
    if (chartLoaded && showCalendar) {
      // Draw the chart only when the library is loaded and showCalendar is true
      drawChart();
    }
  }, [chartLoaded, showCalendar]);

  function drawChart() {
    var dataTable = new window.google.visualization.DataTable();
    dataTable.addColumn({ type: "date", id: "Date" });
    dataTable.addColumn({ type: "number", id: "Won/Loss" });
    dataTable.addRows([
      [new Date(2023, 0, 1), 10000],
      [new Date(2023, 0, 2), 20000],
      [new Date(2023, 0, 3), 30000],
      [new Date(2023, 0, 4), 40000],
      [new Date(2023, 0, 5), 50000],
      [new Date(2023, 0, 6), 60000],
      [new Date(2023, 0, 7), 70000],
      [new Date(2023, 0, 8), 80000],
      [new Date(2023, 0, 9), 90000],

      [new Date(2023, 1, 10), 100000],
      [new Date(2023, 1, 11), 110000],
      [new Date(2023, 1, 12), 120000],
      [new Date(2023, 1, 13), 130000],
      [new Date(2023, 1, 14), 140000],
      [new Date(2023, 1, 15), 150000],
      [new Date(2023, 1, 16), 160000],
      [new Date(2023, 1, 17), 170000],
      [new Date(2023, 1, 19), 190000],
      [new Date(2023, 1, 20), 200000],

      [new Date(2023, 2, 10), 10000],
      [new Date(2023, 2, 11), 110000],
      [new Date(2023, 2, 13), 130000],
      [new Date(2023, 2, 14), 140000],
      [new Date(2023, 2, 16), 150000],
      [new Date(2023, 2, 18), 170000],
      [new Date(2023, 2, 19), 190000],
      [new Date(2023, 2, 25), 20000],

      [new Date(2023, 4, 10), 10000],
      [new Date(2023, 4, 1), 110000],
      [new Date(2023, 4, 3), 130000],
      [new Date(2023, 4, 12), 140000],
      [new Date(2023, 4, 20), 170000],
      [new Date(2023, 4, 16), 150000],
      [new Date(2023, 4, 18), 170000],
      [new Date(2023, 4, 19), 190000],
      [new Date(2023, 4, 25), 20000],

      [new Date(2023, 11, 2), 20000],
      [new Date(2023, 11, 3), 30000],
      [new Date(2023, 11, 4), 40000],
      [new Date(2023, 11, 8), 80000],
      [new Date(2023, 11, 9), 90000],
      [new Date(2023, 11, 10), 100000],
      [new Date(2023, 11, 11), 110000],
      [new Date(2023, 11, 12), 120000],
      [new Date(2023, 11, 14), 140000],
      [new Date(2023, 11, 15), 150000],
      [new Date(2023, 11, 16), 160000],
      [new Date(2023, 11, 17), 170000],
      [new Date(2023, 11, 18), 180000],
      [new Date(2023, 11, 19), 190000],
      [new Date(2023, 11, 20), 200000],

      // ------------------------------2024
      [new Date(2023, 3, 13), 37032],
      [new Date(2023, 3, 14), 38024],
      [new Date(2023, 3, 15), 38024],
      [new Date(2023, 3, 16), 38108],
      [new Date(2023, 3, 17), 38229],
      [new Date(2023, 7, 10), 10000],
      [new Date(2023, 7, 1), 110000],
      [new Date(2023, 7, 3), 130000],
      [new Date(2023, 7, 12), 140000],
      [new Date(2023, 7, 20), 170000],
      [new Date(2023, 7, 16), 150000],
      [new Date(2023, 7, 18), 170000],
      [new Date(2023, 7, 19), 190000],
      [new Date(2023, 7, 25), 20000],

      [new Date(2023, 6, 13), 27032],
      [new Date(2023, 6, 14), 58024],
      [new Date(2023, 6, 15), 8024],
      [new Date(2023, 6, 16), 58108],
      [new Date(2023, 6, 17), 58229],
      [new Date(2023, 8, 13), 27032],
      [new Date(2023, 8, 14), 58024],
      [new Date(2023, 8, 15), 8024],
      [new Date(2023, 8, 16), 58108],
      [new Date(2023, 8, 17), 58229],

      [new Date(2023, 10, 10), 10000],
      [new Date(2023, 10, 1), 110000],
      [new Date(2023, 10, 3), 130000],
      [new Date(2023, 10, 12), 140000],
      [new Date(2023, 10, 20), 170000],
      [new Date(2023, 10, 16), 150000],
      [new Date(2023, 10, 18), 170000],
      [new Date(2023, 10, 19), 190000],
      [new Date(2023, 10, 25), 20000],

      [new Date(2023, 5, 1), 10000],
      [new Date(2023, 5, 2), 20000],
      [new Date(2023, 5, 3), 30000],
      [new Date(2023, 5, 4), 40000],
      [new Date(2023, 5, 5), 50000],
      [new Date(2023, 5, 6), 60000],
      [new Date(2023, 5, 7), 70000],
      [new Date(2023, 5, 8), 80000],
      [new Date(2023, 5, 9), 90000],
      [new Date(2023, 5, 10), 100000],
      [new Date(2023, 5, 11), 110000],
      [new Date(2023, 5, 12), 120000],
      [new Date(2023, 5, 13), 130000],
      [new Date(2023, 5, 14), 140000],
      [new Date(2023, 5, 15), 150000],
      [new Date(2023, 5, 16), 160000],
      [new Date(2023, 5, 17), 170000],
      [new Date(2023, 5, 18), 180000],
      [new Date(2023, 5, 19), 190000],
      [new Date(2023, 5, 20), 200000],

      [new Date(2023, 9, 4), 38177],
      [new Date(2023, 9, 5), 38705],
      [new Date(2023, 9, 12), 38210],
      [new Date(2023, 9, 13), 38029],
      [new Date(2023, 9, 19), 38823],
      [new Date(2023, 9, 23), 38345],
      [new Date(2023, 9, 24), 38436],
      [new Date(2023, 9, 30), 38447],
    ]);

    var chart = new window.google.visualization.Calendar(
      document.getElementById("calendar_basic")
    );

    var options = {
      height: 300,
      // width: 1000,
      calendar: {
        cellSize: 26, // Adjust cell size for better visibility
        monthLabel: {
          fontSize: 14, // Adjust font size of month labels
          bold: true, // Make month labels bold
        },
      },
      colorAxis: {
        colors: ["#FF6666", "red", "green", "#33FF33"],
      },
      tooltip: { isHtml: true }, // Enable HTML tooltips
    };

    // Set tooltip content
    google.visualization.events.addListener(chart, "onmouseover", function (e) {
      var date = new Date(e.date);
      var tooltip = (
        <div style="padding:10px">
          Gross Realised P&L on ' + date.toDateString() + ': ' + e.value + '
        </div>
      );
      chart.setSelection([{ row: e.row }]);
      chart.draw(dataTable, Object.assign({}, options, { tooltip: tooltip }));
    });

    chart.draw(dataTable, options);
  }

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
                {" "}
                {selectedDateRange[0].toISOString().substring(0, 10)} to{" "}
                {selectedDateRange[1].toISOString().substring(0, 10)}
              </p>
            </div>
          </div>
        )}
      </div>

      {showCalendar && (
        <div
          className=""
          id="calendar_basic"
          style={{ width: "100%", marginLeft: "20px" }}
        ></div>
      )}

      <div
        className=""
        id="calendar_basic"
        style={{ width: "100%", marginLeft: "20px" }}
      ></div>

      <div className="grid grid-cols-5 gap-4 border bg-gray-300 py-3 mb-6 text-lg">
        <div className="flex flex-col items-center justify-center">
          <p>Realised P&L</p>
          <div className="hover-container">
            <p className="short-value font-bold text-red-500 text-4xl">
              -28.94L
            </p>
            <div className="full-value w-36 shadow-xl">
              Realised P&L -28,94,000
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>Charges & taxes</p>
          <div className="hover-container">
            <p className="short-value font-bold text-4xl">8.22L</p>
            <div className="full-value w-36 shadow-xl">
              Charges & taxes 8,22,000
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
              -37.16L
            </p>
            <div className="full-value w-36 shadow-xl">
              Net realised P&L -37,16,000
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p>Unrealised P&L</p>
          <div className="hover-container">
            <p className="short-value font-bold text-4xl">0</p>
            <div className="full-value w-36 shadow-xl">Unrealised P&L 0.00</div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Symbol
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                QTY
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Buy avg
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Buy Value
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Sell Avg
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Sell Value
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.symbol}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.qty}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.buyAvg}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.buyValue}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.sellAvg}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.sellValue}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm ${
                    item.realisedPL < 0 ? "red" : "green"
                  }`}
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
  );
};

export default Refund;

import React, { useState } from "react";
import { GrDocumentText } from "react-icons/gr";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import ledgerTQC870 from "../../assets/ledgerTQC870.xlsx";
import { DateRangePicker, Stack } from "rsuite";
import { CiClock1 } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import notworking from "../../assets/notworking.jpeg";

const Statements = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Category");
  const [selectedDateRange, setSelectedDateRange] = useState(null);

  const handleDateRangeChange = (value) => {
    setSelectedDateRange(value);
  };

  const options = [
    { value: "equity", label: "Equity" },
    { value: "commodity", label: "Commodity" },
    { value: "others", label: "Others" },
  ];

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleChange = (option) => {
    setSelected(option.label);
    setIsOpen(false);
  };

  const handleXLSXDownload = () => {
    const link = document.createElement("a");
    link.href = ledgerTQC870;
    link.download = "data.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCSVDownload = () => {
    const link = document.createElement("a");
    link.href = csvFile;
    link.download = "data.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-lg">
          <div className="flex items-center mb-8">
            <GrDocumentText className="text-3xl mx-4 text-gray-400 font-light" />
            <h2 className="text-3xl font-light">Statement</h2>
          </div>
          <div className="flex justify-between items-center mb-8">
            <div className="relative inline-block mr-2">
              <button
                className="bg-white border border-gray-300 rounded px-4 py-2 font-bold cursor-pointer flex items-center"
                onClick={toggleOpen}
              >
                {selected}
                <span className="ml-2">&#9660;</span>
              </button>
              {isOpen && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded mt-1">
                  {options.map((option) => (
                    <li
                      key={option.value}
                      onClick={() => handleChange(option)}
                      className="cursor-pointer py-2 px-4 transition-colors hover:bg-gray-100"
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Stack spacing={4} direction="column" alignItems="flex-start">
              <DateRangePicker
                format="yyyy/MM/dd"
                character=" – "
                onChange={handleDateRangeChange}
              />
            </Stack>
            {selectedDateRange && (
              <div className="mt-4 flex justify-end">
                <CiClock1 className="mr-3 text-xl" />
                <div>
                  <p>
                    {" "}
                    {selectedDateRange[0]
                      ?.toISOString()
                      .substring(0, 10)} to{" "}
                    {selectedDateRange[1]?.toISOString().substring(0, 10)}
                  </p>
                </div>
              </div>
            )}
            <button className="bg-blue-600 text-2xl px-6 py-2">
            <FaChevronRight/ >

            </button>
          </div>
          <div className="flex justify-center mb-8">
            <div className="w-1/2 mr-4">
              <h2 className="text-center text-gray-500 text-xl font-light">
                Opening balance
              </h2>
              <p className="text-center font-sm text-xl text-gray-500">
                -76.56
              </p>
            </div>
            <div className="w-1/2 ml-4">
              <h2 className="text-center text-gray-500 text-xl font-light">
                Closing balance
              </h2>
              <p className="text-center font-sm text-xl text-gray-500">0.00</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-end">
              <button
                className="text-blue-500 font-medium font-bold py-2 px-2 rounded mr-2"
                onClick={handleXLSXDownload}
              >
                Download XLSX
              </button>
              <span className="text-blue-500">|</span>
              <button
                className="text-blue-500 font-medium py-2 px-2 rounded"
                onClick={handleCSVDownload}
              >
                Download CSV
              </button>
            </div>
            <img src={notworking} className="w-full h-auto margin-top" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Statements;

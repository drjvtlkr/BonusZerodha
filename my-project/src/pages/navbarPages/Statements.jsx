import React, { useState } from "react";
import { GrDocumentText } from "react-icons/gr";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import ledgerTQC870 from "../../assets/ledgerTQC870.xlsx";

const Statements = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Category");

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
      <div>
        <div className="flex items-center ">
          <GrDocumentText className="text-3xl mx-4 text-gray-400 font-light" />
          <h2 className="text-3xl font-light">Statement</h2>
        </div>
        <div className="flex items-center">
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
          <div>`Date picker`</div>
          <BsFillArrowRightSquareFill className="text-2xl text-blue-600" />
        </div>

        <div className="flex justify-center">
          <div className="w-1/2 mr-4">
            {" "}
            <h2 className="text-center text-gray-500 text-xl font-light">
              Opening balance{" "}
            </h2>
            <p className="text-center font-sm text-xl text-gray-500">-76.56</p>
          </div>
          <div className="w-1/2 ml-4">
            {" "}
            <h2 className="text-center text-gray-500 text-xl font-light">
              CLosing balance
            </h2>
            <p className="text-center font-sm text-xl text-gray-500">0.00</p>
          </div>
        </div>
        <div>
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
      </div>
    </>
  );
};

export default Statements;

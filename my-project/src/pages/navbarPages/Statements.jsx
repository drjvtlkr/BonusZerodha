import React, { useState } from "react";
import { GrDocumentText } from "react-icons/gr";
import ledgerTQC870 from "../../assets/ledgerTQC870.xlsx";
import { DateRangePicker, Stack } from "rsuite";
import { CiClock1 } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";

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
              <FaChevronRight />
            </button>
          </div>
          <div className="flex justify-center mb-8">
            <div className="w-1/2 mr-4">
              <h2 className="text-center text-gray-500 text-xl font-light">
                Opening balance
              </h2>
              <p className="text-center font-sm text-xl text-gray-500">
                {(selectedDateRange) !== null ? `-76.56` : "0.00"}
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
            <div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-gray-700 bg-gray-100">
                    <tr>
                      <th scope="col" className="px-12 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Segment{" "}
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Particulars
                        <p className="text-blue-600">Ledger Explained ?</p>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Debit
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Credit
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Net
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="w-4 p-4">2024-01-15</td>
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        NSE -EQ
                      </td>
                      <td className="px-6 py-4">
                        Payout of 129953.79/- to AXIS BANK LTD 922020047110558
                        A/C number as per withdrawal request made on 2024-01-15
                        with reference number f77fbaf12f
                      </td>
                      <td className="px-6 py-4">1,29,953.79</td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">0.00</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-15</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-F&O
                      </th>
                      <td className="px-6 py-4">
                        Net obligation for Equity F&O
                      </td>
                      <td className="px-6 py-4">12,356.10</td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">1,29,953.79</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-12</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-EQ
                      </th>
                      <td className="px-6 py-4">
                        Payout of 480000.0/- to AXIS BANK LTD 922020047110558
                        A/C number as per withdrawal request made on 2024-01-12
                        with reference number 173e5eb1eb
                      </td>
                      <td className="px-6 py-4">4,80,000.00</td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">1,42,309.89</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-12</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-F&O{" "}
                      </th>
                      <td className="px-6 py-4">
                        Net obligation for Equity F&O
                      </td>
                      <td className="px-6 py-4">1,31,853.58</td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">6,22,309.89</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-11</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-F&O
                      </th>
                      <td className="px-6 py-4">
                        Net obligation for Equity F&O
                      </td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">2,73,898.46</td>
                      <td className="px-6 py-4">7,54,163.47</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-10</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-F&O
                      </th>
                      <td className="px-6 py-4">
                        Net obligation for Equity F&O
                      </td>
                      <td className="px-6 py-4">5,32,791.12</td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">4,80,265.01</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-09</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-EQ
                      </th>
                      <td className="px-6 py-4">
                        Payout of 150000.0/- to AXIS BANK LTD 922020047110558
                        A/C number as per withdrawal request made on 2024-01-09
                        with reference number 58273bfae3
                      </td>
                      <td className="px-6 py-4">1,50,000.00</td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">10,13,056.13</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-09</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-F&O
                      </th>
                      <td className="px-6 py-4">
                        Net obligation for Equity F&O
                      </td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">2,30,013.82</td>
                      <td className="px-6 py-4">11,63,056.13</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-08</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-EQ
                      </th>
                      <td className="px-6 py-4">
                        Payout of 100000.0/- to AXIS BANK LTD 922020047110558
                        A/C number as per withdrawal request made on 2024-01-08
                        with reference number 9f11eccd50
                      </td>
                      <td className="px-6 py-4">1,00,000.00</td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">9,33,042.31</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-08</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-F&O
                      </th>
                      <td className="px-6 py-4">
                        Net obligation for Equity F&O
                      </td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">6,28,042.32</td>
                      <td className="px-6 py-4">10,33,042.31</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-07</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-EQ
                      </th>
                      <td className="px-6 py-4">
                        Funds added using NEFT/IMPS/RTGS from TQC870 with
                        reference number AXOMB40079092284
                      </td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">4,05,000.00</td>
                      <td className="px-6 py-4">4,05,000.00</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-04</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-EQ
                      </th>
                      <td className="px-6 py-4">
                        Payout of 469317.38/- to AXIS BANK LTD 922020047110558
                        A/C number as per withdrawal request made on 2024-01-04
                        with reference number e6cd2bb85a
                      </td>
                      <td className="px-6 py-4">4,69,317.38</td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">-0.00</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-04</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-F&O
                      </th>
                      <td className="px-6 py-4">
                        Net obligation for Equity F&O
                      </td>
                      <td className="px-6 py-4">4,31,564.54</td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">4,69,317.38</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-03</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-EQ
                      </th>
                      <td className="px-6 py-4">
                        unds added using NEFT/IMPS/RTGS from TQC870 with
                        reference number 400321426195
                      </td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">1,00,000.00</td>
                      <td className="px-6 py-4">9,00,881.92</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-03</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-EQ
                      </th>
                      <td className="px-6 py-4">
                        Funds added using NEFT/IMPS/RTGS from TQC870 with
                        reference number 400321260062
                      </td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">3,50,000.00</td>
                      <td className="px-6 py-4">8,00,881.92</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-03</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-F&O
                      </th>
                      <td className="px-6 py-4">
                        Net obligation for Equity F&O
                      </td>
                      <td className="px-6 py-4">3,58,379.87</td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">4,50,881.92</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-03</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-EQ
                      </th>
                      <td className="px-6 py-4">
                        Funds added using NEFT/IMPS/RTGS from TQC870 with
                        reference number 400308986825
                      </td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">1,00,000.00</td>
                      <td className="px-6 py-4">8,09,261.79</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-02</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-F&O
                      </th>
                      <td className="px-6 py-4">
                        Net obligation for Equity F&O
                      </td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">1,53,266.49</td>
                      <td className="px-6 py-4">7,09,261.79</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-02</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-EQ
                      </th>
                      <td className="px-6 py-4">
                        Funds added using payment gateway from TQC870 with
                        reference number 43809076
                      </td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">5,56,000.00</td>
                      <td className="px-6 py-4">5,55,995.30</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">2024-01-02</td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        NSE-EQ
                      </th>
                      <td className="px-6 py-4">
                        Being payment gateway charges debited for TQC870
                      </td>
                      <td className="px-6 py-4">10.62</td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">-4.70</td>
                    </tr>
                  </tbody>
                </table>
                <nav
                  className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
                  aria-label="Table navigation"
                >
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                    Showing{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      1-10
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      1000
                    </span>
                  </span>
                  <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Previous
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-current="page"
                        className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        4
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        5
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statements;

import React, { useState } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { SlReload } from "react-icons/sl";
import { MdContentCopy } from "react-icons/md";
import { FaTwitterSquare } from "react-icons/fa";
import SV from "../../assets/sv.png";

const VerifiedPNL = () => {
  const [selected, setSelected] = useState(null);
  const [description, setDescription] = useState("");
  const [personalWebpage, setPersonalWebpage] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("1 week");
  const [displayTrades, setDisplayTrades] = useState(false);

  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  const handleDisplayTradesChange = () => {
    setDisplayTrades(!displayTrades);
  };

  const handleSelect = (value) => {
    setSelected(value === selected ? null : value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePersonalWebpageChange = (event) => {
    setPersonalWebpage(event.target.value);
  };
  return (
    <>
      <div className="w-1/4">
        <p className="text-4xl">Verified P&L</p>
        <p className="text-l">
          Share your P&L and trades publicly, verified by Zerodha.
          <p className="text-blue-500">Read more.</p>
        </p>
        <div className="flex flex-row">
          <div className="">
            <p className="flex justify-between mt-5 text-2xl">
              Enable public page
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </p>
            <div>
              <div className="flex flex-row items-center justify-start mt-6">
                <p className="text-xl">Public P&L link</p>
                <div className="flex justify-center mx-8">
                  <SlReload className="text-blue-500 text-xl" />
                  <p className="text-blue-500 text-xl">Regenerate link</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <input
                  className="w-96"
                  type="text"
                  value="http://console./zerodha.com/verified/58225aa7"
                  readOnly
                />
                <MdContentCopy className="text-5xl bg-blue-700 mx-4 my-4 p-2" />
                <FaTwitterSquare className="text-5xl mx-4 my-4" />
              </div>
            </div>
            <hr className="text-gray-900" />
            <div>
              <div className="flex">
                <div>
                  <div className="flex items-center justify-center">
                    <label>
                      <input
                        type="radio"
                        name="type"
                        value="personal"
                        checked={selected === "personal"}
                        onChange={() => handleSelect("personal")}
                      />
                      Full Name
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="type"
                        value="business"
                        checked={selected === "business"}
                        onChange={() => handleSelect("business")}
                      />
                      Short Name
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="type"
                        value="other"
                        checked={selected === "other"}
                        onChange={() => handleSelect("other")}
                      />
                      Masked
                    </label>
                  </div>
                  <label>
                    <input type="checkbox" />
                    Use my Kite's avatar image
                  </label>
                  <div className="mt-4">
                    <label>
                      Description:
                      <input
                        type="text"
                        value={description}
                        onChange={handleDescriptionChange}
                      />
                    </label>
                  </div>
                  <div className="mt-4">
                    <label>
                      Personal Webpage:
                      <input
                        type="text"
                        value={personalWebpage}
                        onChange={handlePersonalWebpageChange}
                      />
                    </label>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold">
                      Segments to share:
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <label>
                        <input type="checkbox" />
                        Equity
                      </label>
                      <label>
                        <input type="checkbox" />
                        Futures & Options
                      </label>
                      <label>
                        <input type="checkbox" />
                        Currency
                      </label>
                      <label>
                        <input type="checkbox" />
                        Commodity
                      </label>
                    </div>
                    <button className="mt-4 bg-blue-700 text-white py-2 px-4 rounded">
                      Save
                    </button>
                  </div>
                </div>

                <div className="w-1/2 p-4">
                  <div>
                    <div className="flex items-center border rounded">
                      <img src={SV} className="w-24" />

                      <p className="ml-3">Shrivatsa Vasantrao</p>
                    </div>
                    <div className="mt-4">
                      <div className="mt-4 flex items-center">
                        <div>
                          <h4 className="text-lg font-medium">
                            Timeline to share
                          </h4>
                          <p>Live P&L (updates everyday)</p>
                        </div>
                        <label className="ml-4 inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>

                      <select
                        className="bg-white border border-gray-300 rounded px-4 py-2"
                        value={selectedPeriod}
                        onChange={handlePeriodChange}
                      >
                        <option value="1 week">1 week</option>
                        <option value="1 month">1 month</option>
                        <option value="3 months">3 months</option>
                        <option value="6 months">6 months</option>
                        <option value="360 days">360 days</option>
                      </select>
                    </div>
                    <div className="mt-4">
                      <label>
                        <input
                          type="checkbox"
                          checked={displayTrades}
                          onChange={handleDisplayTradesChange}
                        />
                        Display trades
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NextComponent = () => {
  return (
    <>
      <div className="">
        <p className="text-3xl">Personal</p>
        <div className="flex flex-row">
          <div className="">
            <p className="flex flex-row mt-5 text-sm">
              E-mail{" "}
              <span className="ml-5 mt-1 text-blue-500">
                <FaPenToSquare />
              </span>
            </p>
            <p className="uppercase text-xl ">shrivatsavasantrao@gmail.com</p>
          </div>
          <div className=" ml-6">
            <p className=" flex flex-rowtext-sm mt-5">
              Mobile{" "}
              <span className="ml-5 mt-1 text-blue-500">
                <FaPenToSquare />
              </span>
            </p>
            <p className="text-xl">0415</p>
          </div>
        </div>
        <div className="">
          <p className="text-sm mt-5">PAN</p>
          <p className="text-xl">*526L</p>
        </div>
      </div>
    </>
  );
};

const PersonalComponent = () => {
  return (
    <>
      <div className="">
        <p className="text-3xl">Personal</p>
        <div className="flex flex-row">
          <div className="">
            <p className="flex flex-row mt-5 text-sm">
              E-mail{" "}
              <span className="ml-5 mt-1 text-blue-500">
                <FaPenToSquare />
              </span>
            </p>
            <p className="uppercase text-xl ">shrivatsavasantrao@gmail.com</p>
          </div>
          <div className=" ml-6">
            <p className=" flex flex-rowtext-sm mt-5">
              Mobile{" "}
              <span className="ml-5 mt-1 text-blue-500">
                <FaPenToSquare />
              </span>
            </p>
            <p className="text-xl">0415</p>
          </div>
        </div>

        <div className="">
          <p className="text-sm mt-5">PAN</p>
          <p className="text-xl">*526L</p>
        </div>
      </div>
    </>
  );
};

const BankComponent = () => {
  return (
    <>
      <div>
        <div className="">
          <p className="text-3xl">Bank</p>
        </div>
        <div className="flex flex-row justify-evenly mt-8">
          <div className="">
            <p className="text-lg">
              Account{" "}
              <span className="text-xs text-orange-400 bg-amber-100">
                PRIMARY
              </span>
            </p>
            <p className="font-bold">*2965</p>
          </div>
          <div className="ml-16">
            <p>Bank</p>
            <p className="font-bold">HDFC BANK LTD</p>
          </div>
          <div className="ml-16">
            <p>Branch</p>
            <p className="font-bold">TB REVANKAR COMPLEX</p>
          </div>
        </div>
        <div className="text-gray-300 border w-full mt-8"></div>
        <div className="flex flex-row justify-evenly mt-8">
          <div className="">
            <p className="text-lg flex">
              Account{" "}
              <span className="ml-5 mt-1 text-blue-500">
                <FaPenToSquare />
              </span>
            </p>
            <p className="font-bold">*9830</p>
            <p className="text-blue-600 text-xm mt-5">+ Set as primary</p>
          </div>
          <div className="ml-16">
            <p>Bank</p>
            <p className="font-bold">ICICI BANK LTD</p>
          </div>
          <div className="ml-16">
            <p>Branch</p>
            <p className="font-bold">ICICI BANK LTD</p>
          </div>
        </div>
        <div className="text-gray-300 border w-full mt-8"></div>

        <button
          type="button"
          class="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 mt-5 focus:ring-blue-300 font-bold rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add bank account
        </button>
      </div>
    </>
  );
};

const Accounts = () => {
  const [showVerifiedPNL, setShowVerifiedPNL] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [showPersonal, setShowPersonal] = useState(true);

  const toggleVerifiedPNL = () => {
    setShowVerifiedPNL(true);
    setShowBank(false);
    setShowPersonal(false);
  };

  const toggleBank = () => {
    setShowVerifiedPNL(false);
    setShowBank(true);
    setShowPersonal(false);
  };

  const togglePersonal = () => {
    setShowVerifiedPNL(false);
    setShowBank(false);
    setShowPersonal(true);
  };

  return (
    <>
      <div className="ml-44 mt-5">
        <p className="text-3xl">Account</p>
      </div>
      <div className="text-gray-300 border"></div>

      <div className="flex flex-row justify-evenly mt-7">
        <img src="" alt="" />
        <div className="">
          <p className="text-gray-600">Name</p>
          <p className="text-xl">Shrivatsa Vasantrao</p>
        </div>
        <div className="">
          <p className="text-gray-600">Client ID</p>
          <p className="text-xl">LKB963</p>
        </div>
        <div className="">
          <p className="text-gray-600">Support code</p>
          <p className="text-xl">
            •••• <span className="text-xs text-blue-500 -mt-5">View</span>
          </p>
        </div>
        <div className="">
          <p className="text-gray-600">CKYC no.</p>
          <p className="text-xl">Shrivatsa Vasantrao</p>
        </div>
      </div>
      <div className="flex flex-row justify-evenly mt-16">
        <div className="">
          <button className="mt-5 text-lg" onClick={togglePersonal}>
            Personal
          </button>
          <p className="mt-6 text-lg">Nominees</p>
          <button className="mt-5 text-lg" onClick={toggleBank}>
            Bank
          </button>
          <p className="mt-5 text-lg">Demat</p>
          <p className="mt-5 text-lg">Segments</p>
          <p className="mt-5 text-lg">Documents</p>
          <p className="mt-5 text-lg">Commodity declaration</p>
          <p className="mt-5 text-lg">Family</p>
          <button className="mt-5 text-lg" onClick={toggleVerifiedPNL}>
            Verified P&L
          </button>
        </div>
        <div className="">
          {/* {selectedSection === "personal" ? (
            <div className="">
              <p className="text-3xl">Personal</p>
              <div className="flex flex-row">
                <div className="">
                  <p className="flex flex-row mt-5 text-sm">
                    E-mail{" "}
                    <span className="ml-5 mt-1 text-blue-500">
                      <FaPenToSquare />
                    </span>
                  </p>
                  <p className="uppercase text-xl ">
                    shrivatsavasantrao@gmail.com
                  </p>
                </div>
                <div className=" ml-6">
                  <p className=" flex flex-rowtext-sm mt-5">
                    Mobile{" "}
                    <span className="ml-5 mt-1 text-blue-500">
                      <FaPenToSquare />
                    </span>
                  </p>
                  <p className="text-xl">0415</p>
                </div>
              </div>

              <div className="">
                <p className="text-sm mt-5">PAN</p>
                <p className="text-xl">*526L</p>
              </div>
            </div>
          ) : (
            <div>
              <div className="">
                <p className="text-3xl">Bank</p>
              </div>
              <div className="flex flex-row justify-evenly mt-8">
                <div className="">
                  <p className="text-lg">
                    Account{" "}
                    <span className="text-xs text-orange-400 bg-amber-100">
                      PRIMARY
                    </span>
                  </p>
                  <p className="font-bold">*2965</p>
                </div>
                <div className="ml-16">
                  <p>Bank</p>
                  <p className="font-bold">HDFC BANK LTD</p>
                </div>
                <div className="ml-16">
                  <p>Branch</p>
                  <p className="font-bold">TB REVANKAR COMPLEX</p>
                </div>
              </div>
              <div className="text-gray-300 border w-full mt-8"></div>
              <div className="flex flex-row justify-evenly mt-8">
                <div className="">
                  <p className="text-lg flex">
                    Account{" "}
                    <span className="ml-5 mt-1 text-blue-500">
                      <FaPenToSquare />
                    </span>
                  </p>
                  <p className="font-bold">*9830</p>
                  <p className="text-blue-600 text-xm mt-5">+ Set as primary</p>
                </div>
                <div className="ml-16">
                  <p>Bank</p>
                  <p className="font-bold">ICICI BANK LTD</p>
                </div>
                <div className="ml-16">
                  <p>Branch</p>
                  <p className="font-bold">ICICI BANK LTD</p>
                </div>
              </div>
              <div className="text-gray-300 border w-full mt-8"></div>

              <button
                type="button"
                class="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 mt-5 focus:ring-blue-300 font-bold rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Add bank account
              </button>
            </div>
          )} */}
        </div>
        {showPersonal && <PersonalComponent />}
        {showBank && <BankComponent />}
        {showVerifiedPNL && <VerifiedPNL />}
      </div>
    </>
  );
};

export default Accounts;

import React, { useState } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import ConsoleNav from "../../console/ConoleNav";


const Accounts = () => {
    const [selectedSection, setSelectedSection] = useState("personal");

    return (
        <>
            {/* <ConsoleNav/> */}
            <div className="ml-44 mt-5">
                <p className="text-3xl">Account</p>
            </div>
            <div className='text-gray-300 border'></div>

            <div className="flex flex-row justify-evenly mt-7">
                <img src="" alt="" />
                <div className="">
                    <p className="text-gray-600">Name</p>
                    <p className="text-xl">Shrivatsa Vasantrao Kulkarni</p>
                </div>
                <div className="">
                    <p className="text-gray-600">Client ID</p>
                    <p className="text-xl">TQC870</p>
                </div>
                <div className="">
                    <p className="text-gray-600">Support code</p>
                    <p className="text-xl">•••• <span className="text-xs text-blue-500 -mt-5">View</span></p>
                </div>
                <div className="">
                    <p className="text-gray-600">CKYC no.</p>
                    <p className="text-xl">50035895339232</p>
                </div>
            </div>
            <div className="flex flex-row justify-evenly mt-16">
                <div className="">
                <button className={`text-lg ${selectedSection === "personal" ? "text-blue-500" : ""}`} onClick={() => setSelectedSection("personal")}>Personal</button>
                    <p className="mt-6">Nominees</p>
                    <button className={`mt-5 text-lg ${selectedSection === "bank" ? "text-blue-500" : ""}`} onClick={() => setSelectedSection("bank")}>Bank</button>

                    <p className="mt-5">Demat</p>
                    <p className="mt-5">Segments</p>
                    <p className="mt-5">Documents</p>
                    <p className="mt-5">Commodity declaration</p>
                    <p className="mt-5">Family</p>
                    <p className="mt-5">Verified P&L</p>
                </div>
                <div className="">
                    {selectedSection === "personal" ? (
                        <div className="">
                            <p className="text-3xl">Personal</p>
                            <div className="flex flex-row">
                                <div className="">
                                    <p className="flex flex-row mt-5 text-sm">E-mail <span className="ml-5 mt-1 text-blue-500"><FaPenToSquare /></span>
                                    </p>
                                    <p className="uppercase text-xl ">shrivatsavasantrao@gmail.com</p>

                                </div>
                                <div className=" ml-6">
                                    <p className=" flex flex-rowtext-sm mt-5">Mobile <span className="ml-5 mt-1 text-blue-500"><FaPenToSquare /></span></p>
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
                                    <p className="text-lg">Account <span className="text-xs text-orange-400 bg-amber-100">PRIMARY</span></p>
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
                            <div className='text-gray-300 border w-full mt-8'></div>
                            <div className="flex flex-row justify-evenly mt-8">
                                <div className="">
                                    <p className="text-lg flex">Account <span className="ml-5 mt-1 text-blue-500"><FaPenToSquare /></span></p>
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
                            <div className='text-gray-300 border w-full mt-8'></div>

                            <button type="button" class="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 mt-5 focus:ring-blue-300 font-bold rounded-sm text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add bank account</button>

                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Accounts
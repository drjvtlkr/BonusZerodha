import React, { useState } from "react";
import ConsoleNav from "./ConoleNav";
import { FaPenToSquare } from "react-icons/fa6";


const Account = () => {
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
                    <p className="text-xl">Shrivatsa Vasantrao</p>
                </div>
                <div className="">
                    <p className="text-gray-600">Client ID</p>
                    <p className="text-xl">LKB963</p>
                </div>
                <div className="">
                    <p className="text-gray-600">Support code</p>
                    <p className="text-xl">•••• <span className="text-xs text-blue-500 -mt-5">View</span></p>
                </div>
                <div className="">
                    <p className="text-gray-600">CKYC no.</p>
                    <p className="text-xl">Shrivatsa Vasantrao</p>
                </div>
            </div>
            <div className="flex flex-row justify-evenly mt-16">
                <div className="">
                    <button className={`text-lg text-blue-500 ${selectedSection === "personal" && 'font-bold'}`} onClick={() => setSelectedSection("personal")}>Personal</button>
                    <p className="mt-6">Nominees</p>
                    <button className="mt-5 text-lg text-blue-500" onClick={setSelectedSection("bank")}>Bank</button>

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
                                <p className="text-xl">*abcL</p>

                            </div>

                        </div>
                    ) : (
                        <div>
                            <p className="text-3xl">Bank Details</p>
                            {/* Bank details content */}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Account
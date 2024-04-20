import React from "react";
import ConsoleNav from "./ConoleNav";
import { SlArrowDown } from "react-icons/sl";
import { MdOutlineSettings } from "react-icons/md";
import ConsoleGraph from "../console/ConsoleGraph"
// import Graph from "./Graph";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import graph from "../assets/graph.jpg"

Chart.register(CategoryScale);




const ConsoleDash = () => {
    return (
        <>
            {/* <ConsoleNav/> */}
            <div className="ml-44 mt-5">
                <p className="text-3xl">Hi Shrivatsa Vasantrao</p>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row ml-32 mt-20">
                    <p>Equity account value</p>
                    <SlArrowDown className="ml-3 mt-2 w-3 h-3" />
                </div>
                <div className="flex flex-row mr-32 mt-20">
                    <div className="flex flex-rows">
                        <div className="w-4 h-1 bg-blue-500"></div>
                        <p className="-mt-3 ml-2">Account value</p>
                    </div>
                    <div className="flex flex-rows ml-5">
                        <div className="w-4 h-1 bg-emerald-600"></div>
                        <p className="-mt-3 ml-2">Equity</p>
                    </div>
                    <div className="flex flex-rows ml-5">
                        <div className="w-4 h-1 bg-yellow-500"></div>
                        <p className="-mt-3 ml-2">Mutual funds</p>
                    </div>
                    <div className="flex flex-row ml-5">
                        <MdOutlineSettings className="-mt-2 w-5 h-5"/>
                    </div>
                </div>
            </div>
            <div className=" mt-20">
                {/* <ConsoleGraph/>             */}
                <img src={graph} alt="" width={100} height={100} />
                {/* <p className="text-gray-600 text-2xl">Website under mentainance please Retry Later</p> */}
            </div>
        </>
    )
}

export default ConsoleDash
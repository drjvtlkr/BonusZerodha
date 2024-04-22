import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { MdOutlineSettings } from "react-icons/md";
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import graph from "../../assets/graph.jpg"
import { Doughnut } from 'react-chartjs-2';


Chart.register(CategoryScale);




const ConsoleDash = () => {

    const data = {
        labels: [],
        datasets: [
            {
                label: 'Equity',
                data: [12, 19, 3],
                backgroundColor: ['#0FC781'],
                borderColor: ['#097C50'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        // Add other options as needed
    };



    return (
        <>
            <div className="ml-52 mt-5">
                <p className="text-3xl">Hi Shrivatsa Vasantrao</p>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row ml-52 mt-20">
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
                        <MdOutlineSettings className="-mt-2 w-5 h-5" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-20">
                {/* <ConsoleGraph/>             */}
                <img src={graph} alt="" width={900} height={200} />

                {/* <p className="text-gray-600 text-2xl">Website under mentainance please Retry Later</p> */}
            </div>
            {/* <div className="grid grid-cols-4 gap-4 mt-5">
                <div class="grid grid-cols-4 gap-4 mt-5 ml-16">
                    <div className="flex flex-row ml-16">
                        <p className="text-blue-500 ml-10">Equity</p>
                        <p className="ml-10 -mt-1">Commodity</p>
                        <p className="ml-10 -mt-1">Updated on 2024-04-18</p>
                    </div>
                    <div className="">
                    <div style={{ width: '200px', height: '100', marginTop:25 }}>
                        <Doughnut data={data} options={options} />
                    </div>
                    </div>
                    
                </div>
                <div className="">
                    
                </div>
            </div> */}

            <div className="flex flex-row justify-between mt-5">
                <div className="flex flex-row justify-between ml-16">
                    <p className="text-blue-700 ml-10 mt-2 text-sm">Equity</p>
                    <p className="ml-8 text-sm">Commodity</p>
                    <p className="ml-8 text-lg"> Updated on <span className="text-blue-700 text-sm">2024-04-18</span></p>
                </div>
                <div className='text-gray-500 border-l'></div>
                <div className="flex flex-row justify-between mr-32">
                    <p className="mr-32 text-2xl">Portfoilo Timeline</p>
                    <MdOutlineSettings className=" w-5 h-5 ml-24" />
                </div>
            </div>

            <div className="flex flex-row justify-between mt-8">
                <div className="flex flex-row ml-16">
                    <div className="ml-16">
                        <p> Account Value</p>
                        <p className="text-xl">57.5 Cr</p>
                        <p className="mt-5">Equity Holdings</p>
                        <p className="text-xl">57.50 Cr</p>
                    </div>

                    <div className="ml-32">
                        <div style={{ width: '200px', height: '100', marginTop: 25 }}>
                            <Doughnut data={data} options={options} />
                        </div>
                    </div>
                </div>
                {/* <div className='text-gray-500 border-l'></div> */}

                <div className="flex flex-row justify-between mr-32">
                    <div className="flex flex-row justify-between mr-32">
                        <div className="">
                            <p className="text-xl">ALOKIND</p>
                            <p className="text-gray-600 text-lg">Board <span className="text-blue-700 text-lg">Meeting Outcome</span></p>
                        </div>
                    </div>
                    <div className="">
                        <p>20 MAR 2024</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ConsoleDash
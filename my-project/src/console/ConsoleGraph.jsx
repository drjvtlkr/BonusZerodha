// import React, { Component } from 'react';
// import { Line } from 'react-chartjs-2';

// class ConsoleGraph extends Component {
//     render() {
//         const data = {
//             labels: ['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4'], // Time labels in seconds
//             datasets: [
//                 {
//                     label: 'Pressure',
//                     data: [5, 8, 12, 10, 6, 10, 8, 12, 5], // Example pressure data
//                     fill: false,
//                     borderColor: 'rgba(75, 192, 192, 1)', // Green color
//                     tension: 0.1
//                 }
//             ]
//         };

//         const options = {
//             responsive: true,
//             maintainAspectRatio: false,
//             scales: {
//                 yAxes: [
//                     {
//                         ticks: {
//                             beginAtZero: false
//                         },
//                         scaleLabel: {
//                             display: true,
//                             labelString: 'Pressure (cmH2O)' // Adjust label as needed
//                         }
//                     }
//                 ],
//                 xAxes: [
//                     {
//                         scaleLabel: {
//                             display: true,
//                             labelString: 'Time (s)' // Adjust label as needed
//                         }
//                     }
//                 ]
//             },
//             legend: {
//                 display: false // Hide legend
//             },
//             tooltips: {
//                 enabled: false // Disable tooltips
//             }
//         };

//         return (
//             <div className="container">
//                 <div className="container fill">
//                     <Line data={data} options={options} width={400} height={200} />
//                 </div>
//             </div>
//         );
//     }
// }

// export default ConsoleGraph;

import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // replace with your labels
  datasets: [
    {
      label: 'Your Label',
      data: [332092392, 328557357.8, 327578622.5,337578622.5 , 343448409.9, 341926661.5, 327567406.8, 3314832553.8, 328087635.5, 328477022, 327666322, 331291050.4,327570235,347495525,327563189,344563189,348494133], // replace with your data
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  title: {
    display: true,
    text: 'Chart Title',
  },
  scales: {
    x: {
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Month',
      },
    },
    y: {
      display: true,
      scaleLabel: {
        display: true,
        labelString: 'Value',
      },
    },
  },
};

const ConsoleGraph = () => {
  return <Line data={data} options={options} />;
};

export default ConsoleGraph;

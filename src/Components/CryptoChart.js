import React from "react";
import { Line } from "react-chartjs-2";
import '../Styles/CryptoChart.css'

const CryptoChart = ({ ChartData }) => {


  const historyOptions = {
    lineHeightAnnotation: {
      always: true,
      hover: false,
      lineWeight: 1.5,
    },

    animation: {
      duration: 2000,
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          distribution: "linear",
          display: true,
          type: "time",
          time: {
            parser: "MM/DD/YYYY HH:mm",
            tooltipFormat: "ll HH:mm",
            unit: "day",
            unitStepSize: 1,
            displayFormats: {
              day: "MM/DD/YYYY",
            },
          },
        },
      ],
    },
  };

  const data = {
    labels: [
      "31 (Month Ago)",
      "30",
      "29",
      "28",
      "27",
      "26",
      "25",
      "24",
      "23",
      "22",
      "21",
      "20",
      "19",
      "18",
      "17",
      "16",
      "15",
      "14",
      "13",
      "12",
      "11",
      "10",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
      "1 (Today)",
    ],
    datasets: [
      {
        label: "Price in $USD",
        data: ChartData.prices,
        fill: true,
        backgroundColor: "#0084eb",
        borderColor: "#0084eb",
        options: {
          layout: {
            padding: 20,
          },
        },
      },
    ],
  };

  return (
    <div>
      <Line data={data}  options={historyOptions} />
    </div>
  );
};

export default CryptoChart;

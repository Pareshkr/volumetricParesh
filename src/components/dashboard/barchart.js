import React from "react";
import Chart from "react-apexcharts";
export default function BarChart() {
  const barGraph = {
    series: [
      {
        name: "",
        data: [0],
      },
      {
        name: "Box Count",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },

      {
        name: "",
        data: [0],
      },
      {
        name: "",
        data: [0],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false,
      dataLabels: {
        position: "bottom",
      },
    },
    stroke: {
      show: false,
      width: 1,
      colors: ["transparent"],
    },
    xaxis: {
      title: {
        text: ["D1", "D2", "D3", "D5", "D6", "Jul", "Aug", "Sep", "Oct"],
      },
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };
  return (
    <>
      <div className="w-full h-full rounded-md shadow-md bg-white">
        <div className="w-full h-1/6 pl-4 flex font-semibold text-lg text-gray-600 border-b-2">
          <span className="self-center">Shipments processed</span>
        </div>
        <div className="w-full h-5/6">
          <Chart
            options={barGraph.plotOptions}
            series={barGraph.series}
            type="bar"
            height={240}
          />
        </div>
      </div>
    </>
  );
}

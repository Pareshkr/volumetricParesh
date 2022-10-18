import React from "react";
import Chart from "react-apexcharts";
export default function BarChart() {
  const barGraph = {
    series: [
      {
        name: "Box count",
        data: [
          {
            x: "D1",
            y: 18,
          },
          {
            x: "D2",
            y: 25,
          },
          {
            x: "D3",
            y: 73,
          },
          {
            x: "D4",
            y: 12,
          },
          {
            x: "D5",
            y: 54,
          },
          {
            x: "D6",
            y: 96,
          },
          {
            x: "D7",
            y: 23,
          },
          {
            x: "D8",
            y: 45,
          },
          {
            x: "D9",
            y: 31,
          },
          {
            x: "D10",
            y: 65,
          },
          {
            x: "D11",
            y: 19,
          },
          {
            x: "D12",
            y: 80,
          },
          {
            x: "D13",
            y: 85,
          },
          {
            x: "D14",
            y: 24,
          },
          {
            x: "D15",
            y: 72,
          },
          {
            x: "D16",
            y: 31,
          },
          {
            x: "D17",
            y: 55,
          },
          {
            x: "D18",
            y: 17,
          },
          {
            x: "D19",
            y: 64,
          },
          {
            x: "D20",
            y: 98,
          },
          {
            x: "D21",
            y: 26,
          },
          {
            x: "D22",
            y: 84,
          },
          {
            x: "D23",
            y: 78,
          },
          {
            x: "D24",
            y: 67,
          },
          {
            x: "D25",
            y: 79,
          },
          {
            x: "D26",
            y: 40,
          },
          {
            x: "D27",
            y: 39,
          },
          {
            x: "D28",
            y: 89,
          },
          {
            x: "D29",
            y: 72,
          },
          {
            x: "D30",
            y: 16,
          },
          {
            x: "D31",
            y: 47,
          },
          {
            x: "D32",
            y: 28,
          },
          {
            x: "D33",
            y: 99,
          },
          {
            x: "D34",
            y: 74,
          },
          {
            x: "D35",
            y: 43,
          },
        ],
      },
    ],
    options: {
      xaxis: {
        type: "category",
      },
      chart: {
        type: "bar",
        height: 350,
        width: 400,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          dataLabels: {
            position: "top",
            orientation: "vertical"
          },
          columnWidth: "50%",
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
          offsetY: -200,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
      },
      stroke: {
        show: false,
        width: 1,
        colors: ["transparent"],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
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
            options={barGraph.options}
            series={barGraph.series}
            type="bar"
            height={240}
          />
        </div>
      </div>
    </>
  );
}

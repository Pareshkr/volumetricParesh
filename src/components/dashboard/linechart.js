import React from "react";
import Chart from "react-apexcharts";

export default function LineChart() {
  const areaData = {
    series: [
      {
        name: "Volume",
        data: [3167, 4089, 2845, 5199, 4232, 10954, 10056],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        title: {
          text: "Time in hr"
        },
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        title: {
          text: "Volume in cm3"
        }

      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  return (
    <>
      <div className="w-full h-full rounded-md shadow-md bg-white">
        <div className="w-full h-1/6 pl-4 flex font-semibold text-lg text-gray-600 border-b-2">
          <span className="self-center">Volume processed in cm<sup>3</sup></span>
        </div>
        <div className="w-full h-5/6">
          <Chart
            options={areaData.options}
            series={areaData.series}
            type="area"
            height={230}
          />
        </div>
      </div>
    </>
  );
}

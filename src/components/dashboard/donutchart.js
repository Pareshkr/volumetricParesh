import React from "react";
import Chart from "react-apexcharts";
export default function DonutChart() {
  const donutChart = {
    series: {
      data: [44, 55, 13],
    },
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 10,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "bottom",
        offsetY: 0,
        height: 20,
      },
    },
  };

  return (
    <>
      <div className="w-full h-full rounded-md  shadow-md bg-white text-center">
        <div className="w-full h-1/6 flex font-semibold text-lg text-gray-600 pl-5 border-b-2">
          <span className="self-center">Count by class</span>
        </div>
        <div className="w-full h-5/6">
          <Chart
            options={donutChart.options}
            series={donutChart.series.data}
            type="donut"
            height={270}
          />
        </div>
      </div>
    </>
  );
}

import React from "react";
import Chart from "react-apexcharts";
export default function DonutChart() {
  const donutChart = {
    series: {
      data: [20467, 10700, 8999, 30675],
    },
    chartOptions: {
      labels: ["Apple", "Mango", "Orange", "Watermelon"],
    },
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80%",
            labels: {
              show: false,
              name: {
                show: true,
                fontSize: '22px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                color: undefined,
                offsetY: -10,
                formatter: function (val) {
                  return val
                }
              },
              value: {
                show: true,
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                color: undefined,
                offsetY: 16,
                formatter: function (val) {
                  return val
                }
              }
            }
          },
          customScale: 0.9,
        },
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
        show: true,
        position: "bottom",
        offsetY: 0,
        height: 20,
        horizontalAlign: "center",
        customLegendItems: ["D15", "D9", "D27", "Others"],
        onItemHover: {
          highlightDataSeries: true,
        },
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
            chartOptions={donutChart.chartOptions}
            type="donut"
            height={270}
          />
        </div>
      </div>
    </>
  );
}

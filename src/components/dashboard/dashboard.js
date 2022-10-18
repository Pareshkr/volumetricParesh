import React from "react";
import SideNav from "../others/sidenav";
import DashHeader from "./dashheader";
import Cards from "./cards";
import BarChart from "./barchart";
import DonutChart from "./donutchart";
import Calender from "./calendar";
import LineChart from "./linechart";
import ClassVolume from "./classvolume";
import AnomalyImages from "./anomalyimages";

export default function Dashboard() {
  return (
    <>
      <div className="w-full  border h-full flex bg-gray-100 ">
        <SideNav />
        <div className="w-10/12">
          <div className="w-full h-16">
            <DashHeader />
          </div>
          <div className="w-full h-5/6 flex flex-col space-between space-y-4 pt-4 pl-4 pr-4">
            <div className="w-full h-1/5">
              <Cards />
            </div>
            <div className="w-full h-2/5 flex space-between space-x-3">
              <div className="w-2/4 h-full">
                <BarChart />
              </div>
              <div className="w-1/4 h-full pl-3">
                <DonutChart />
              </div>
              <div className="w-1/4 h-full pl-3">
                <Calender />
              </div>
            </div>
            <div className="w-full h-2/5 flex items-stretch space-between space-x-3">
              <div className="w-2/4 h-full">
                <LineChart />
              </div>
              <div className="w-1/4 h-full pl-3">
                <ClassVolume />
              </div>
              <div className="w-1/4 h-full self-end pl-3">
                <AnomalyImages />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { FaBox } from "react-icons/fa";
import { IoSpeedometerSharp } from "react-icons/io5";
import { FaCube } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";

export default function Cards() {
  return (
    <>
      <div className="w-full h-full flex justify-between space-x-6">
        <div className="w-1/4 h-full text-center hover:bg-gray-100 bg-white rounded-md shadow-md flex justify-center space-x-3">
          <div className="w-3/12 h-3/5 flex justify-between self-center bg-violet-300 rounded-full">
            <div className="m-auto text-violet-800 text-2xl">
              <FaBox />
            </div>
          </div>
          <div className="w-6/12 h-3/5 self-center flex flex-col space-between space-y-1 pl-2">
            <div className="w-full h-1/2 text-left font-bold text-2xl">
              2034
            </div>
            <div className="w-full h-1/2 text-left font-semibold text-md text-gray-600">
              Boxes Profiled
            </div>
          </div>
        </div>
        <div className="w-1/4 h-full text-center hover:bg-gray-100 bg-white rounded-md shadow-md flex justify-center space-x-3">
          <div className="w-3/12 h-3/5 flex justify-between self-center bg-sky-300 rounded-full">
            <div className="m-auto text-sky-800 text-3xl">
              <IoSpeedometerSharp />
            </div>
          </div>
          <div className="w-6/12 h-3/5 self-center flex flex-col space-between space-y-1 pl-2">
            <div className="w-full h-1/2 text-left font-bold text-2xl">420</div>
            <div className="w-full h-1/2 text-left font-semibold text-md text-gray-600">
              Throughput
            </div>
          </div>
        </div>
        <div className="w-1/4 h-full text-center hover:bg-gray-100 bg-white rounded-md shadow-md flex justify-center space-x-3">
          <div className="w-3/12 h-3/5 flex justify-between self-center bg-amber-300 rounded-full">
            <div className="m-auto text-amber-700 text-3xl">
              <FaCube />
            </div>
          </div>
          <div className="w-6/12 h-3/5 self-center flex flex-col space-between space-y-1 pl-2">
            <div className="w-full h-1/2 text-left font-bold text-2xl">
              15378
            </div>
            <div className="w-full h-1/2 text-left font-semibold text-md text-gray-600">
              Total Volume
            </div>
          </div>
        </div>
        <div className="w-1/4 h-full text-center hover:bg-gray-100 bg-white rounded-md shadow-md flex justify-center space-x-3">
          <div className="w-3/12 h-3/5 flex justify-between self-center bg-rose-300 rounded-full">
            <div className="m-auto text-rose-800 text-4xl">
              <RiErrorWarningFill />
            </div>
          </div>
          <div className="w-6/12 h-3/5 self-center flex flex-col space-between space-y-1 pl-2">
            <div className="w-full h-1/2 text-left font-bold text-2xl">12</div>
            <div className="w-full h-1/2 text-left font-semibold text-md text-gray-600">
              Anomalies
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

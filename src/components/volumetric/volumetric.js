import React from "react";
import SideNav from "../others/sidenav";
import Video from "./video";
import DetectedResult from "./detectedResult";
import Controller from "./controller";
import demoImage from "../image/demoimage.jpg";
import { MdClass } from "react-icons/md";
import { FaCube } from "react-icons/fa";
import { FaRulerHorizontal } from "react-icons/fa";
import { TbLineHeight } from "react-icons/tb";
import { CgDisplayFullwidth } from "react-icons/cg";

export default function Volumetric() {
  return (
    <>
      <div className="w-full h-full flex bg-gray-100 ">
        <SideNav />

        <div className="w-10/12 p-4 flex">
          <div className="w-3/5 h-full flex flex-col justify-between">
            <div className="w-full h-3/4">
              <Video />
            </div>
            <div className="w-full pr-3 h-1/4">
              <Controller />
            </div>
          </div>
          <div className="w-2/5 h-full flex flex-col justify-between">
            <div className="w-full h-12 shadow-md rounded-md font-black flex justify-around">
            <div className="w-full h-full font-extrabold text-2xl flex">
                <span className="self-center pl-2 text-gray-700 tracking-wider">Results</span>
            </div>
            </div>
            <div className=" rounded-md shadow-md h-3/6   ">
              <div className="w-full m-auto h-full  ">
                <img
                  className="h-full w-full"
                  src={demoImage}
                  alt="no image found"
                />
              </div>
            </div>
            <div className="h-2/6 flex flex-row space-x-3">
              <div className="w-full h-full bg-white rounded-md shadow-md flex flex-col ">
                <div className="m-2.5 h-2 "></div>
                <div className="m-2.5 h-1/4 flex flex-row space-x-2 rounded-md shadow-md bg-rose-600 ">
                  <div className=" w-3/5 h-full  flex flex-row space-x-2 ">
                    <span className="text-2xl ml-1 self-center text-white">
                      <MdClass />
                    </span>
                    <span className="self-center font-semibold text-lg text-white">
                      Class
                    </span>
                  </div>
                  <div className=" w-2/5 h-full flex justify-around">
                    <span className="self-center font-semibold text-large text-white">
                      D21
                    </span>
                  </div>
                </div>
                <div className="m-2.5 h-1/4 flex flex-row space-x-2 rounded-md shadow-md bg-teal-600 ">
                  <div className=" w-3/5 h-full flex flex-row space-x-2 ">
                    <span className="text-2xl ml-1 self-center text-white">
                      <FaCube />
                    </span>
                    <span className="self-center font-semibold text-lg text-white">
                      Volume
                    </span>
                  </div>
                  <div className="w-3/5 h-full flex justify-around">
                    <span className="self-center font-semibold text-large text-white">
                      14599.0cm<sup>3</sup>
                    </span>
                  </div>
                </div>
                <div className="m-2.5 h-1 "></div>
              </div>
              <div className="w-full h-full bg-white rounded-md shadow-md flex flex-col ">
                <div className="m-2.5 h-1/4 flex flex-row space-x-2 rounded-md shadow-md bg-amber-600 ">
                  <div className=" w-3/5 h-full pl-2 flex flex-row space-x-2">
                    <span className="text-2xl ml-1 self-center text-white">
                      <FaRulerHorizontal />
                    </span>
                    <span className="self-center font-semibold text-lg text-white">
                      Length
                    </span>
                  </div>
                  <div className=" w-2/5 h-full flex justify-around">
                    <span className="self-center font-semibold text-large text-white">
                      28cm
                    </span>
                  </div>
                </div>
                <div className="m-2.5 h-1/4 flex flex-row space-x-2 rounded-md shadow-md bg-indigo-600 ">
                  <div className=" w-3/5 h-full pl-2 flex flex-row space-x-2 ">
                    <span className="text-2xl ml-1 self-center text-white">
                      <CgDisplayFullwidth />
                    </span>
                    <span className="self-center font-semibold text-lg text-white">
                      Width
                    </span>
                  </div>
                  <div className=" w-2/5 h-full flex justify-around">
                    <span className="self-center font-semibold text-large text-white">
                      23.7cm
                    </span>
                  </div>
                </div>
                <div className="m-2.5 h-1/4 flex flex-row space-x-2 rounded-md shadow-md bg-gray-600 ">
                  <div className=" w-3/5 h-full flex flex-row space-x-2 ">
                    <span className="text-2xl ml-2 self-center text-white">
                      <TbLineHeight />
                    </span>
                    <span className="self-center font-semibold text-lg text-white">
                      Height
                    </span>
                  </div>
                  <div className=" w-2/5 h-full flex justify-around">
                    <span className="self-center font-semibold text-large text-white">
                      22cm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

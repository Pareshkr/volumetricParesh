import React, { useEffect, useState } from "react";

import Box from "../image/box.jpg";
import { TbDimensions } from "react-icons/tb";
import { MdClass } from "react-icons/md";
import { FaCube } from "react-icons/fa";
import { FaRulerHorizontal } from "react-icons/fa";
import { TbLineHeight } from "react-icons/tb";
import { CgDisplayFullwidth } from "react-icons/cg";
import { CgRuler } from "react-icons/cg";
import { TbArrowAutofitWidth } from "react-icons/tb";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { HiOutlineCube } from "react-icons/hi";
import Logo from "../image/NeoPhyte_logo.gif";
import socketIOClient from "socket.io-client";
import axios from "axios";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import demoImage from '../image/demoimage.jpg';

export default function DetectedResult() {
  // const client = new W3CWebSocket("ws://192.168.29.167:9990/get_results");
  const [response, setResponse] = useState(false);
  //  const sendData = client.send("a");
  // console.log(client)

  useEffect(() => {
    const client = new W3CWebSocket("ws://192.168.29.167:9990/get_results");

    client.onopen = () => {
      console.log("Connection Established!");
    };
    //   setResponse(client)
  });

  // useEffect(() => {
  //     async function getResult() {
  //         const textData = "m"
  //       try {
  //         const data = await axios.get(`${url}/get_results`,textData,
  //         {
  //             headers: {
  //               Accept: "application/json",

  //             },
  //           }
  //         )
  //         // console.log(data.data);
  //         setResponse(data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     getResult();
  //   }, []);

  //   console.log("result is here ", response)

  return (
    <>
      <div className="w-full h-full flex flex-col space-y-4 pl-3 pb-3 ">
        <div className="border-b rounded-md shadow-md h-3/5   ">
          <div className="w-3/5 m-auto h-full  ">
            <img className="h-full w-full" src={demoImage} alt="no image found" />
          </div>
        </div>
        <div className="h-1/4 flex flex-row space-x-3">
          <div className="w-full h-full bg-white rounded-md shadow-md flex flex-col ">
            <div className="m-2.5 h-1 "></div>
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
          {/* <div className="w-full  flex ">
            <div className="flex space-x-2 w-1/2  ">
              <span className="text-4xl text-blue-900 font-bold">
                <CgRuler />
              </span>
              <span className="mt-1  text-blue-900 font-bold">Length</span>
            </div>
            <div className=" pt-1">
              <span className="text-blue-900 font-bold">:</span>
              <span className="text-blue-900 font-bold">60</span>
            </div>
          </div>

          <div className="w-full  flex">
            <div className="flex space-x-2 w-1/2">
              <span className="text-4xl text-blue-900 font-bold">
                <TbArrowAutofitWidth />
              </span>
              <span className="mt-1  text-blue-900 font-bold">Width</span>
            </div>
            <div className=" pt-1">
              <span className="text-blue-900 font-bold">:</span>
              <span className="text-blue-900 font-bold">60</span>
            </div>
          </div>

          <div className="w-full  flex ">
            <div className="flex space-x-2 w-1/2">
              <span className="text-4xl text-blue-900 font-bold">
                <TbArrowAutofitHeight />
              </span>
              <span className="mt-1  text-blue-900 font-bold">Height</span>
            </div>
            <div className=" pt-1">
              <span className="text-blue-900 font-bold">:</span>
              <span className="text-blue-900 font-bold">60</span>
            </div>
          </div>

          <div className="w-full  flex  ">
            <div className="flex space-x-2 w-1/2">
              <span className="text-4xl text-blue-900 font-bold">
                <HiOutlineCube  />
              </span>
              <span className="mt-1  text-blue-900 font-bold">Volume</span>
            </div>
            <div className=" pt-1">
              <span className="text-blue-900 font-bold">:</span>
              <span className="text-blue-900 font-bold">60</span>
            </div>
          </div>

          <div className="w-full  flex ">
            <div className="flex space-x-2 w-1/2">
              <span className="text-4xl text-blue-900 font-bold">
                <TbDimensions />
              </span>
              <span className="mt-1  text-blue-900 font-bold">Dim Weight</span>
            </div>
            <div className=" pt-1">
              <span className="text-blue-900 font-bold">:</span>
              <span className="text-blue-900 font-bold">60</span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

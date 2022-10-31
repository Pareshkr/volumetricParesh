import React, { useEffect, useState } from "react";

import Box from "../image/box.jpg";
import { TbDimensions } from "react-icons/tb";
import { MdClass } from "react-icons/md";
import { FaCube } from "react-icons/fa";
import { FaRulerHorizontal } from "react-icons/fa";
import { TbLineHeight } from "react-icons/tb";
import { CgDisplayFullwidth } from "react-icons/cg";
import { FaWeightHanging } from "react-icons/fa";
import { CgRuler } from "react-icons/cg";
import { TbArrowAutofitWidth } from "react-icons/tb";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { HiOutlineCube } from "react-icons/hi";
import Logo from "../image/NeoPhyte_logo.gif";
import socketIOClient from "socket.io-client";
import axios from "axios";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import demoImage from "../image/demoimage.jpg";
import useWebSocket, { ReadyState } from "react-use-websocket";

export default function DetectedResult() {
  const [socketUrl, setSocketUrl] = useState("ws://127.0.0.1:9990/get_results");
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  // console.log("lastMessage", lastMessage)

  const [response, setReponse] = useState(false);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));

      // console.log(lastMessage);
      setReponse(lastMessage);
    }
  }, [lastMessage, setMessageHistory]);

  let dataResult = "";

  if (response) {
    dataResult = response.data;
  }

  // console.log("dataResult", dataResult)

  const splitResult = dataResult.split("b'\\");

  const splitResult_detect_value = splitResult[0]
  const splitResult_detect_image = splitResult[1]
  // console.log(splitResult_detect_image)
  const vars = "b'\\"
  const img_byte = vars+splitResult_detect_image;
  const split_image = img_byte.split("]")
  console.log(split_image)
  // console.log("img_byte", img_byte)
  // const byteArray = img_byte.getBytes("UTF-8");
  // console.log("imageData", byteArray)
  const imageData = ""

  const split_result1= splitResult_detect_value.split(",")
  // console.log(split_result1)

  const split_l = split_result1[0].replace("[", "")
  // console.log("split_l", split_l)

  const split_b = split_result1[1]
  // console.log("split_b", split_b)

  const split_h = split_result1[2]
  // console.log("split_h", split_h)

  const split_w = split_result1[3]
  // console.log("split_w", split_w)



  
  // console.log("split result ",splitResult)

  // let replaceDataone = "";
  // let replaceDataTwo_B = "";
  // let replaceData_H = "";
  // let replaceData_w = "";
  
  // if (response) {
   
  //   replaceDataone = splitResult[0].replace("[", "");
  //   replaceDataTwo_B= splitResult[1].replace("[", "");
  //   replaceData_H = splitResult[2].replace("[", "");
  //   replaceData_w = splitResult[3].replace("[", "");
    
  // }



  return (
    <>
      <div className="w-2/5 h-full flex flex-col justify-between">
            <div className="w-full h-12 shadow-md rounded-md bg-white font-black flex justify-around">
            <div className="w-full h-full justify-center font-extrabold text-2xl flex">
                <span className="self-center pl-2 text-gray-700 tracking-wider">Analysis</span>
            </div>
            </div>
            <div className=" rounded-md shadow-md h-3/6   ">
              <div className="w-full m-auto h-full  ">
                <img
                  className="h-full w-full"
                  src={imageData}
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
                  <div className=" w-3/5 h-full flex flex-row pl-1 space-x-2 ">
                    <span className="text-2xl ml-1 self-center text-white">
                      <FaCube />
                    </span>
                    <span className="self-center font-semibold text-lg text-white">
                      Volume
                    </span>
                  </div>
                  <div className="w-3/5 h-full flex justify-around">
                    <span className="self-center font-semibold text-large text-white">
                      {split_h * split_l * split_b}cm<sup>3</sup>
                    </span>
                  </div>
                </div>

                <div className="m-2.5 h-1/4 flex flex-row space-x-2 rounded-md shadow-md bg-sky-600 ">
                  <div className=" w-3/5 h-full flex flex-row pl-1 space-x-2 ">
                    <span className="text-2xl ml-1 self-center text-white">
                      <FaWeightHanging />
                    </span>
                    <span className="self-center font-semibold text-lg text-white">
                      Weight
                    </span>
                  </div>
                  <div className="w-3/5 h-full flex justify-around">
                    <span className="self-center font-semibold text-large text-white">
                      {split_w}kg
                    </span>
                  </div>
                </div>
                <div className="m-2.5 h-1 "></div>
              </div>
              <div className="w-full h-full bg-white rounded-md shadow-md flex flex-col ">
              <div className="m-2.5 h-2 "></div>
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
                      {split_l}cm
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
                      {split_b}cm
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
                     {split_h}cm

                    </span>
                  </div>
                </div>
                <div className="m-2.5 h-2 "></div>
              </div>
            </div>
          </div>
    </>
  );
}

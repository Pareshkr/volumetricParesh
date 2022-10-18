import React from "react";

export default function ClassVolume() {
  return (
    <>
      <div className="w-full h-full rounded-md shadow-md flex space-between space-y-3 p-0.5 flex-col bg-white">
        <div className="w-full h-1/5 flex border-b-2">
          <div className="self-center pl-5 text-gray-600 font-semibold text-lg ">
           Volume by class
          </div>
        </div>
        <div className="w-full h-1/5 flex justify-center flex-row hover:bg-gray-100 text-gray-600 font-semibold text-md tracking-wider">
          <div className="w-1/2 h-full flex justify-between">
            <div className="w-4/6 self-center pl-5">Class</div>
            <div className="w-2/6 self-center">D15</div>
          </div>
          <div className="w-1/2 self-center text-right pr-5">20467</div>
        </div>
        <div className="w-full h-1/5 flex justify-center flex-row hover:bg-gray-100 text-gray-600 font-semibold text-md tracking-wider">
          <div className="w-1/2 h-full flex justify-between">
            <div className="w-4/6 self-center pl-5">Class</div>
            <div className="w-2/6 self-center">D9</div>
          </div>
          <div className="w-1/2 self-center text-right pr-5">10700</div>
        </div>
        <div className="w-full h-1/5 flex justify-center flex-row hover:bg-gray-100 text-gray-600 font-semibold text-md tracking-wider">
          <div className="w-1/2 h-full flex justify-between">
            <div className="w-4/6 self-center pl-5">Class</div>
            <div className="w-2/6 self-center">D27</div>
          </div>
          <div className="w-1/2 self-center text-right pr-5">8999</div>
        </div>
        <div className="w-full h-1/5 flex justify-center flex-row hover:bg-gray-100 text-gray-600 font-semibold text-md tracking-wider">
          <div className="w-1/2 h-full flex justify-between">
            <div className="w-4/6 self-center pl-5">Class</div>
            <div className="w-2/6 self-center">D35</div>
          </div>
          <div className="w-1/2 self-center text-right pr-5">7090</div>
        </div>
      </div>
    </>
  );
}

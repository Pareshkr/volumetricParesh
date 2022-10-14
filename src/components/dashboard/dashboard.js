import React from "react";
import SideNav from "../others/sidenav";

export default function Dashboard() {
  return (
    <>
      <div className="w-full  border h-full flex bg-gray-100 ">
        <SideNav />
        <div className="w-10/12 border border-black  ">
          <div className="border-2 w-full h-16">Header</div>
          <div className="w-full h-5/6  border border-blue-600 pt-6 pl-6 pr-6" >

          <div className="w-full h-1/5 border border-black">div1</div>
          <div className="w-full h-2/5 border border-black">div2</div>
          <div  className="w-full h-2/5 border border-black">DIV3</div>
          </div>
         
        </div>
      </div>
    </>
  );
}

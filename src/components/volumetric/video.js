import React from "react";

import Logo from "../image/NeoPhyte_logo_white.gif";
export default function Video() {
  return (
    <>
      <div className="w-full pr-3 pb-3   h-full ">
        <div className="bg-black grid w-full h-full rounded-lg">
          {/* <div></div> */}
          <div className="w-12/12 m-auto">
            <iframe
              width="600"
              height="400"
              src="https://www.youtube.com/embed/l0C3NQlyVys"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <img src={Logo} alt="Image not found " /> */}
            {/* <div className="font-bold text-white w-full text-center">
              Coming Soon....
            </div> */}
          </div>
          {/* <div></div> */}
        </div>
      </div>
    </>
  );
}

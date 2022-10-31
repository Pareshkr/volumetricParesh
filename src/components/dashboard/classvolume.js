import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

export default function ClassVolume(props) {

  const data = props.data
  console.log("class by volume data ", data)

  let sortData = "";
  if (data) {
    sortData = data.data.total_volume_box;
  }

  const sortedData = Object.entries(sortData).sort((a, b) => b[1] - a[1]);
    console.log("sortedData", sortedData)
    let largest_volume= ""
    let largest_box = ""
    let second_largest = ""
    let second_Largest_box = ""
    let third_largest=""
    let third_largest_box = ""
    if (sortedData.length>0) {
      largest_volume = sortedData[0][1].totalVolume;
      largest_box = sortedData[0][1]._id;
      second_largest = sortedData[1][1].totalVolume;
      second_Largest_box = sortedData[1][1]._id;
      third_largest = sortedData[2][1].totalVolume;
      third_largest_box = sortedData[2][1]._id;
    }
    console.log("largest_volume")
   
  
    



  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="w-full h-full rounded-md shadow-md flex flex-col bg-white">
        <div className="w-full h-1/6 flex border-b-2">
          <div className="self-center pl-5 text-gray-600 font-semibold text-lg ">
            Volume by class (cm<sup>3</sup>)
          </div>
        </div>

        <div className="w-full h-4/6 container overflow-x-auto">
          <div className="container overflow-x-auto">
            <table className="w-full sm:bg-white rounded-lg">
              <thead className="w-full h-1/6 bg-violet-300 text-black font-extrabold text-lg border-t-2 border-b-2 border-violet-600">
                <tr className="">
                  <th className="">Class</th>
                  <th className="">Volume</th>
                </tr>
              </thead>
              <tbody className="text-center font-semibold divide-y">
                <tr>
                  <td>{largest_box}</td>
                  <td>{largest_volume}</td>
                </tr>
                <tr className="bg-gray-200">
                  <td>D29</td>
                  <td>{second_largest}</td>
                </tr>
                <tr>
                  <td>D13</td>
                  <td>4335</td>
                </tr>
                <tr className="bg-gray-200">
                  <td>D25</td>
                  <td>3464</td>
                </tr>
                <tr>
                  <td>D32</td>
                  <td>9887</td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="">D27</td>
                  <td>8957</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full h-1/6 flex justify-end pr-5">
          <button
            type="button"
            onClick={handleClickOpen}
            className="self-center text-sm text-blue-600 hover:bg-blue-100"
          >
            View more
            <hr className="" />
          </button>
          <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
          >
            <DialogContent>
              <div className="w-full h-full flex flex-col space-y-3 p-2">
              <div className="w-full h-1/6 pb-2 text-gray-600 font-semibold text-lg">All Classes with volume (cm<sup>3</sup>)</div>
                <div className="w-full h-5/6 container overflow-x-auto">
                  <div className="container overflow-x-auto">
                    <table className="w-full sm:bg-white rounded-lg">
                      <thead className="w-full h-1/6 bg-violet-300 text-black font-extrabold text-lg border-t-2 border-b-2 border-violet-600">
                        <tr className="">
                          <th className="">Class</th>
                          <th className="">Volume</th>
                        </tr>
                      </thead>
                      <tbody className="text-center font-semibold divide-y">
                        <tr>
                          <td>D15</td>
                          <td>7869</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                        <tr>
                          <td>D9</td>
                          <td>8957</td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="">D9</td>
                          <td>8957</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {/* <div className="w-full h-1/5 flex justify-center flex-row hover:bg-gray-100 text-gray-600 font-semibold text-md tracking-wider">
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
            <div className="w-2/6 self-center">Others</div>
          </div>
          <div className="w-1/2 self-center text-right pr-5">187650</div>
        </div> */}
      </div>
    </>
  );
}

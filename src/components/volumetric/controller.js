import React from 'react';
import axios from 'axios';

export default function Controller () {

  const onSubmitStop = async() => {
    try{
      const res= await axios.get("http://127.0.0.1:9990/camera/preview",{
        headers: {
          Accept: "application/json",
        },
      })
      if(res) {
        console.log("video stop")
      }
      
    } catch (error) {
      console.log(error)
    }
  }

    return (
         <>
            <div className='w-full h-full rounded-md shadow-md bg-white flex justify-between'>
                <div  className='p-2 grid'>
                    <div className="flex space-x-4">
                        <div><input type="checkbox" /></div>
                        <div className='font-bold text-blue-800'>YOLO Model</div>
                    </div>
                    <div className="flex space-x-4">
                        <div><input type="checkbox" /></div>
                        <div className='font-bold text-blue-800'>Detectron Model</div>
                    </div>
                </div>
                <div className=' flex flex-row justify-end items-end space-x-4  w-1/2 m-2'>
                  <button className='w-24 bg-green-600 h-10  text-white font-bold text-md rounded-lg '>
                    START
                  </button>
                  <button onClick={onSubmitStop} className='w-24 bg-red-600 h-10  text-white font-bold text-md rounded-lg '>
                    STOP
                  </button>
                </div>
            </div>
         </>
    )
}
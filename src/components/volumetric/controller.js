import React from 'react';


export default function Controller () {

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
                  <button className='w-24 bg-red-600 h-10  text-white font-bold text-md rounded-lg '>
                    STOP
                  </button>
                </div>
            </div>
         </>
    )
}
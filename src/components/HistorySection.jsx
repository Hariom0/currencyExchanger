import React from 'react'
import {
  ArrowLeftRight,
  TrendingUp,
  History,
  RotateCcw,
  MoveRight,
} from "lucide-react";
import { time } from 'motion';

function HistorySection({savedData, setSavedData}) {
  
  return (
    <div className="p-5 ">
            <div className="flex justify-between mb-3">
              <div className="flex gap-2 items-center">
                <span>
                  <History />
                </span>{" "}
                <span className="text-base font-semibold">
                  Recent Conversions
                </span>
              </div>
              <div 
              className="text-gray-400"
              onClick={()=>setSavedData([])}
              >
                <RotateCcw size={25} />
              </div>
            </div>
            <div className='h-105 overflow-y-auto scrollbar-app px-1.5'>
            {savedData.map((elm,index)=>
            (
             <div className="flex mt-7 bg px-5 py-3 rounded-lg shadow border border-gray-200  justify-between" key={index}>
             <div>
               <div className="flex gap-1 font-semibold text-sm items-center font-mono">
                 <span>{elm.amount} {(elm.from).toUpperCase()}</span>
                 <MoveRight />
                 <span>{(elm.amount*elm.rate).toFixed(2)} {(elm.to).toUpperCase()}</span>
               </div>
               <span className="text-gray-500 font-mono px-1 text-xs">
                 {elm.time}
               </span>
             </div>
             <div className="flex items-center">
               <div className="border border-gray-300 px-2 rounded-xl font-mono text-[12px] font-semibold">
                 Rate:{(elm.rate).toFixed(2)}
               </div>
             </div>
           </div>
           ))}
            </div>
          </div>
  )
}

export default HistorySection
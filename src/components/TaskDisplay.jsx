import React, { useState } from "react";

const TaskDisplay = (props) => {
   const handleRemove = () => {
      document.getElementById("taskDisplayer").style.display = "none";
   };

   return (
      <div
         id="taskDisplayer"
         className="bg-[#D9D9D9] flex justify-center items-center pr-[10px] rounded-xl border-[2px] border-solid border-[#D9D9D9] hover:border-gray-400 hover:border-[2px] my-2"
      >
         <p key={props.index} className="bg-[#D9D9D9] w-[92%] p-2 m-2 rounded-md focus:outline-none text-black">
            {props.task}
         </p>
         <button
            onClick={handleRemove}
            className="text-black bg-[#B6B5B5] w-10 h-10 justify-center items-center rounded-full flex"
         >
            <p className="text-3xl relative bottom-[3px]">×</p>
         </button>
      </div>
   );
};

export default TaskDisplay;

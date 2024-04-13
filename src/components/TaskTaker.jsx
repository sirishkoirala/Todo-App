import React, { useState } from "react";
import TaskDisplay from "./TaskDisplay";

const TaskTaker = () => {
   const [task, setTask] = useState([]);

   const handleAdd = () => {
      const newTask = document.getElementById("inputBox").value;
      document.getElementById("inputBox").value = "";
      setTask((t) => [...t, newTask]);
      // setTask(task => [task, newTask]);
   };
   return (
      <>
         <div className="bg-[#D9D9D9] flex justify-center items-center pr-[10px] rounded-xl border-[2px] border-solid border-[#D9D9D9] hover:border-gray-400 hover:border-[2px]">
            <input
               type="text"
               id="inputBox"
               className="bg-[#D9D9D9] w-[92%] p-2 m-2 rounded-md focus:outline-none text-black"
               placeholder="Enter Yout Task..."
            />
            <button
               onClick={handleAdd}
               className="text-black bg-[#B6B5B5] w-10 h-10 justify-center items-center rounded-full flex"
            >
               <p className="text-3xl relative bottom-[3px]">+</p>
            </button>
         </div>
         <hr className="border-t-gray-400 mt-4" />
         <ul>{task.map((list, index) => <TaskDisplay task={list} key={index} />)}</ul>
      </>
   );
};

export default TaskTaker;

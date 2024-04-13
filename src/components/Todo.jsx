import React, { useState } from "react";

const Todo = () => {
   const [task, setTask] = useState([]);
   const [change, setChange] = useState("");
   const [count, setCount] = useState(0);
   const [deleted, setDeleted] = useState(0);

   const handleChange = (event) => {
      setChange(event.target.value);
   };

   const handleAdd = () => {
      if (change.trim() !== "") {
         setTask((t) => [...t, change]);
         setChange("");
         setCount((c) => c + 1);
      }
   };
   const handleRemove = (index) => {
      setTask(task.filter((_, i) => i !== index));
      setDeleted((d) => d + 1);
      setCount((c) => c - 1);
   };

   const handleUpBtn = (index) => {
      if (index > 0) {
         const newTask = [...task];
         [newTask[index - 1], newTask[index]] = [newTask[index], newTask[index - 1]];
         setTask(newTask);
      }
   };

   const handleDownBtn = (index) => {
      if (index < task.length - 1) {
         const newTask = [...task];
         [newTask[index], newTask[index + 1]] = [newTask[index + 1], newTask[index]];
         setTask(newTask);
      }
   };

   const handleDeleteAll = () => {
      setTask([]);
      setCount(0);
      setDeleted(0); 
      setChange("");
   };

   return (
      <>
         <nav className="text-center h-[7vh] bg-[#6F73A7] text-xl">You have {count} task(s) Todo...</nav>
         <div className="h-[86vh] flex1 bg-[#A4A7DE]">
            <div className="todoContainer">
               <div className="todoBox">
                  <div>
                     <input
                        onChange={handleChange}
                        type="text"
                        name=""
                        id="inputTask"
                        className="inputBox "
                        value={change}
                        placeholder="Enter your Todo..."
                     />
                     <button className="ml-1.5" onClick={handleAdd}>
                        ➕
                     </button>
                  </div>
                  <div>
                     <hr className="mt-4" />
                     <ol className="lists">
                        {task.map((lists, index) => (
                           <div className="flex1 mt-2" key={index}>
                              {/* <input type="" name="" id="" /> */}
                              <br />
                              <li className="list flex-1 font-medium">{lists}</li>
                              <button onClick={() => handleRemove(index)}>❌</button>
                              <button onClick={() => handleUpBtn(index)}>🔼</button>
                              <button onClick={() => handleDownBtn(index)}>🔽</button>
                           </div>
                        ))}
                     </ol>
                  </div>
               </div>
               <div className="flex1 mt-4 mx-1">
                  <button className="w-[250px] h-[50px] text-black rounded-md font-normal text-xl bg-[#47b149] shadow-[2px_2px_6px_grey]">
                     Finished Task
                  </button>
                  <button
                     onClick={handleDeleteAll}
                     className="w-[250px] h-[50px] bg-[#dc3f67] text-black rounded-md font-normal text-xl shadow-[2px_2px_6px_grey]"
                  >
                     Clear All
                  </button>
               </div>
            </div>
         </div>

         <footer className="text-center h-[7vh] bg-[#6F73A7] text-xl pt-1.5">
            You have finished {deleted} Task(s)...
         </footer>
      </>
   );
};
export default Todo;

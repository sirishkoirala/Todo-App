import React from "react";
import TaskTaker from "./TaskTaker";
import TaskDisplay from "./TaskDisplay";

const TodoBox = () => {
  return (
    <div className="h-auto w-[520px] bg-[#6F73A7] rounded-md shadow-[2px_2px_6px_grey] p-4" >
      <TaskTaker/>
      {/* <TaskDisplay/>   */}
    </div>
  );
};

export default TodoBox;

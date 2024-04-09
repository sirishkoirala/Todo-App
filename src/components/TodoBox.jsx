import React from "react";
import TaskTaker from "./TaskTaker";
import TaskDisplay from "./TaskDisplay";

const TodoBox = () => {
  return (
    <div className="h-[425px] w-[520px] bg-[#F9F9F9] rounded-md shadow-[0px_0px_6px_0px_white] p-4" >
      <TaskTaker/>
      <TaskDisplay/>
    </div>
  );
};

export default TodoBox;

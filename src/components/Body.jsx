import React from "react";
import TodoBox from "./TodoBox";
import Btn from "./Btn";

const Body = () => {
  return (
    <>
      <div className="h-[88vh] w-auto bg-[#000020] text-white flex justify-center items-center">
        <div>
        <TodoBox />
        <Btn/>
        </div>
      </div>
    </>
  );
};

export default Body;

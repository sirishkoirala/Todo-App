import React from "react";
import TodoBox from "./TodoBox";
import Btn from "./Btn";

const Body = () => {
  return (
    <>
      <div className="h-[88vh] w-auto bg-[#A4A7DE] text-white flex justify-center items-center">
        <div>
        <TodoBox />
        <Btn/>
        </div>
      </div>
    </>
  );
};

export default Body;

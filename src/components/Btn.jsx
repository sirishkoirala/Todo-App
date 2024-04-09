import React from "react";

const Btn = () => {
  return (
    <>
      <div className="flex justify-between mt-2 mx-1">
        <button className="w-[250px] h-[50px] bg-[#B1FAA5] text-black rounded-md font-normal text-xl">
          Finished Task
        </button>
        <button className="w-[250px] h-[50px] bg-[#FAC1C8] text-black rounded-md font-normal text-xl">
          Clear All
        </button>
      </div>
    </>
  );
};

export default Btn;

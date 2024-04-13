import React from "react";


const Btn = () => {
  return (
    <>
      <div className="flex justify-between mt-2 mx-1">
        <button className="w-[250px] h-[50px] text-black rounded-md font-normal text-xl bg-[#47b149] shadow-[2px_2px_6px_grey]">
          Finished Task
        </button>
        <button className="w-[250px] h-[50px] bg-[#dc3f67] text-black rounded-md font-normal text-xl shadow-[2px_2px_6px_grey]">
          Clear All
        </button>
      </div>
    </>
  );
};

export default Btn;

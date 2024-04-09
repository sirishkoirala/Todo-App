import React from 'react'

const TaskDisplay = () => {
  return (
    <div className="bg-[#f2efef] flex justify-center items-center px-[10px] rounded-xl border-[2px] border-solid border-[#D9D9D9] hover:border-gray-400 hover:border-[2px]">
        <input
          type="text"
          className="bg-[#D9D9D9] w-[92%] p-2 m-2 rounded-md focus:outline-none text-black"
          placeholder="Enter Yout Task..."
        />
        <button className="  text-black bg-[#B6B5B5] w-10 h-10 justify-center items-center rounded-full flex">
          <p className="text-3xl relative bottom-[3px]">+</p>
        </button>
      </div>
)
}

export default TaskDisplay
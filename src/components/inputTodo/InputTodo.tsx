import React from "react";

const InputTodo = () => {
  return (
    <div className="w-screen flex justify-center gap-x-2 mt-32 ">
      <form>
        <input
          className="flex justify-center items-center border border-solid rounded-md border-b-emerald-100
               md:w-[550px] sm:w-fit text-2xl px-2 py-2"
        />
      </form>

      <button 
         className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 text-2xl rounded-lg"
         onClick={() => {}}
      > 
            Add
      </button>
    </div>
  );
};

export default InputTodo;

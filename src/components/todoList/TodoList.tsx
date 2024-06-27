import React, { useState } from "react";
import data from "../.././database/data.json";
import InputTodo from "../inputTodo/InputTodo";

const TodoList = () => {
  const [todo, setTodo] = useState([]);

  

  return (
    <div className="flex flex-col justify-center items-center ">
      <div>
        <InputTodo />
      </div>
      <div>
        <table className="md:min-w-[700px] sm:w-full divide-y divide-gray-200 mt-14 ">
          <thead>
            <tr>
              <th className="px-6 py-3 text-lg  font-medium text-gray-200 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-lg  font-medium text-gray-200 uppercase tracking-wider"> Description</th>
              <th className="px- py-3 text-lg  font-medium text-gray-200 uppercase tracking-wider"> Edit </th>
              <th className="px- py-3 text-lg  font-medium text-gray-200 uppercase tracking-wider"> Delete </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr>
               <td className="px-6 py-4 whitespace-nowrap">1</td>
               <td className="px-6 py-4 whitespace-nowrap">jane@example.com</td>

               <td>
                 <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
               </td>
               
               <td>
                 <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
               </td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default TodoList;



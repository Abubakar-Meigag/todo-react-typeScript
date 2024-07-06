import React, { useEffect, useState } from "react";
import InputTodo from "../inputTodo/InputTodo";
import axios from "axios";

interface Todo {
  todo_id: number;
  description: string;
}



const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    const url: string = 'https://beko-todo-app.onrender.com/todo';

    try {
      let res = await axios.get(url);
      if (res.status !== 200) {
        throw new Error('Network response was not ok');
      }

      setTodoList(res.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addTodo = (newTodo: Todo) => {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };

  const deleteTodo = async (id: number) => {
    try {
      const deleteTodoElement = await axios.delete(`https://beko-todo-app.onrender.com/todo/${id}`);
      if (deleteTodoElement.status === 200) {
        setTodoList(prevTodoList => prevTodoList.filter(todo => todo.todo_id !== id));
      } else {
        throw new Error('Failed to delete the todo');
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-9xl mt-32 font-bold">Loading....!!</div>;
  if (error) return <div className="text-9xl mt-32 font-bold">Error....!!</div>;

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <InputTodo addTodo={addTodo} />
      </div>
      <div>
        <table className="md:min-w-[800px] sm:w-full divide-y divide-gray-200 mt-16">
          <thead>
            <tr>
              <th className="px-6 py-3 text-2xl font-medium text-gray-200 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-2xl font-medium text-gray-200 uppercase tracking-wider">Description</th>
              <th className="px- py-3 text-2xl font-medium text-gray-200 uppercase tracking-wider">Edit</th>
              <th className="px- py-3 text-2xl font-medium text-gray-200 uppercase tracking-wider">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {todoList.map((todo) => (
              <tr key={todo.todo_id}>
                <td className="px-6 text-2xl py-4 whitespace-nowrap text-neutral-100">{todo.todo_id}</td>
                <td className="px-6 text-2xl font-semibold py-4 whitespace-nowrap text-neutral-100">{todo.description}</td>
                <td>
                  <button
                    className="px-4 py-3 text-xl font-semibold text-black bg-yellow-500 rounded-md hover:bg-amber-200 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                    onClick={() => {}}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="ml-2 px-4 py-2 text-xl font-semibold text-neutral-100 bg-red-600 rounded-md hover:bg-red-400 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;

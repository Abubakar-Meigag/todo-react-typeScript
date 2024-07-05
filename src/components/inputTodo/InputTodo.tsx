import React, { ChangeEvent, FormEvent, useState } from "react"; 
import toast from "react-hot-toast";

interface Todo {
  todo_id: number;
  description: string;
}

interface InputTodoProps {
  addTodo: (newTodo: Todo) => void;
}

const InputTodo: React.FC<InputTodoProps> = ({ addTodo }) => {
  const [description, setDescription] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (description.trim().length === 0 || description.trim().length < 3) {
      toast.error('Description must not be empty and should contain at least 3 characters.');
      return;
    }

    try {
      const body = { description };
      const res = await fetch("https://beko-todo-app.onrender.com/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const result = await res.json();
        const newTodo = result.rows ? result.rows[0] : null;
        if (newTodo && newTodo.todo_id) {
          addTodo(newTodo);
          toast.success('You added a todo successfully');
          setDescription("");
        } else {
          toast.error('Failed to add todo - invalid response from server');
        }
      } else {
        toast.error('Failed to add todo');
      }
      
    } catch (err: any) {
      console.error(err.message);
      toast.error('An error occurred');
    } 
  };

  return (
    <div className="w-screen">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center gap-x-2 mt-32"
      >
        <input
          className="flex justify-center items-center border border-solid rounded-md border-b-emerald-100
               md:w-[550px] sm:w-fit text-2xl px-2 py-2"
          value={description}
          type="text"
          onChange={handleChange}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 text-2xl rounded-lg"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InputTodo;

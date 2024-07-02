import React, { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

const InputTodo: React.FC = () => {
  const [description, setDescription] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (description.trim().length === 0 || description.trim().length < 3) {
      alert("Description must not be empty and should contain at least 3 characters.");
      return;
    }

    try {
      const body = { description };
      const res = await fetch("https://beko-todo-app.onrender.com/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),        
      });
      toast.success('You add todo successfully')
      console.log(res, 'You add todo successfully');
      
    } catch (err: any) {
      console.error(err.message);
    } finally {
      window.location.href = "/";
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

//   const addTodo = async () => {

//     if (description.trim().length === 0 || description.trim().length < 3) {
//       alert("Description must not be empty and should contain at least 3 characters.");
//       return;
//     }

//     const url: string = "https://beko-todo-app.onrender.com/todo";

//     try {
//       const res = await axios.post(url, { description });
//       if (res.status !== 201) {
//         throw new Error("Something went wrong");
//       }
//       setDescription("");
//       window.location.href = "/";
//     } catch (error: any) {
//       console.error(error.message);
//     }
//   };

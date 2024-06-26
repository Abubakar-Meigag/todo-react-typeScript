import TodoList from "../todoList/TodoList";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
        <div className="text-7xl m-5 p-16 border-double border-4 border-sky-500">
            Add todo list
        </div>
        <div>
          <TodoList />
        </div>
    </div>
  );
};

export default Home;

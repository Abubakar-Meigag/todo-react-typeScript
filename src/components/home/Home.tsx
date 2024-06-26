import TodoList from "../todoList/TodoList";

const Home = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center max-w-3xl mx-auto text-center">
      <div className="relative inline-block mt-16">
        <span className="text-8xl md:text-7xl font-bold">
          Add Todo List App
        </span>
        <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-teal-400 to-yellow-600 rounded-full"></span>
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
};

export default Home;

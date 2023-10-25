import React from "react";
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";

const App = () => {
  return (
    <div className="w-full h-screen bg-slate-500 flex flex-col content-center items-center py-10">
      <AddTodo />
      <Todo />
    </div>
  );
};

export default App;

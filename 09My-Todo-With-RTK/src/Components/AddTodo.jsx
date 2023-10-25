import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Todo/todoSlice";

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch()
    
    const submitHandler = (e) => {
        e.preventDefault()
        if(input === '') return
        dispatch(addTodo(input))
        setInput("")
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="w-96 px-4 py-2 rounded-xl border-2 border-black focus:outline-none bg-transparent text-white text-lg"
          />
          <button
            type="submit"
            className="text-md text-white bg-black px-8 py-2 ml-6 rounded-xl"
          >
            Add Items
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;

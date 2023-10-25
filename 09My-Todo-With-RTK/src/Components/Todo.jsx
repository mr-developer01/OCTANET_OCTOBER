import React, { useState } from "react";
import { FaLock, FaTrashCan, FaFilePen } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../Features/Todo/todoSlice";

const Todo = () => {
  const [editIcon, setEditIcon] = useState(true);
  const [editText, setEditText] = useState('');
  

  const todos = useSelector((state) => state.myTodo.todos);
  const dispatch = useDispatch();

  return (
    <div className="w-4/5 h-5/6 border-2 border-black mt-6 rounded-xl py-5 px-5 overflow-auto scroll-smooth">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="w-full h-20 bg-black rounded-xl mb-4 flex justify-between items-center px-8"
        >
          <div className="text-white">
            {/* <h3 className="text-2xl">{todo.text}</h3> */}
            {editIcon ? (
              <h3 className="text-2xl">{todo.text}</h3>
            ) : (
              <input
                type="text"
                className="border-2 border-red-400 bg-transparent text-white"
                value={editText}
                onChange={(e) => {
                    setEditText(e.target.value)
                }}
              />
            )}
          </div>
          <div className="text-white flex gap-14 items-center">
            {editIcon ? 
              <FaFilePen
                className="cursor-pointer"
                onClick={() => setEditIcon((prev) => !prev)}
              />
             : 
              <FaLock
                className="cursor-pointer"
                onClick={(e) => {
                    if(editText === '') return
                    dispatch(editTodo({id: todo.id, text: editText}))
                    setEditText("")
                    setEditIcon((prev) => !prev)
                }}
              />
            }
            <FaTrashCan
              className="text-2xl cursor-pointer"
              onClick={() => dispatch(deleteTodo(todo.id))}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;

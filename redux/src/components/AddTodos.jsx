import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const mainDisplay = useSelector((state) => state.displayReducer.display);

  const addTodoHandler = (e) => {
    if (input.length > 1) {
      e.preventDefault();

      dispatch(addTodo({ text: input }));
      setInput("");
    }
    e.preventDefault();
  };

  return (
    <>
      <div
        style={{
          minWidth: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={addTodoHandler}
          style={{
            minWidth: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            visibility: mainDisplay ? "visible" : "hidden",
          }}
          className="space-x-3 mt-12"
        >
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ minWidth: "25%", maxWidth: "25%" }}
          />
          <button
            type="submit"
            style={{ minWidth: "10%", maxWidth: "10%" }}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTodo;

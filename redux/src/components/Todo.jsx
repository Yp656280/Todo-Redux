import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import updateImg from "../assets/updated.png";
import { updateDisplay } from "../features/display/displaySlice";

function Todos() {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState("");
  const [updateId, setUpdateId] = useState("");
  const [check, setCheck] = useState([]);
  const handleCheck = (id, value) => {
    if (value) {
      setCheck([...check, id]);
    } else {
      setCheck(
        check.filter((cur) => {
          cur !== id;
        })
      );
    }
  };
  //change
  const [display, setDisplay] = useState(false);
  const updateTodoHandler = (e) => {
    e.preventDefault();
    setUpdate("");
    dispatch(updateTodo({ id: updateId, text: update }));
    setDisplay(false);
    dispatch(updateDisplay({ display: true }));
  };
  const handleUpdate = (id, text) => {
    setUpdate(text);
    setUpdateId(id);
    setDisplay(true);
    dispatch(updateDisplay({ display: false }));
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          // border: "solid black 1px",

          minWidth: "100%",
        }}
      >
        <form
          onSubmit={updateTodoHandler}
          style={{
            minWidth: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            visibility: display ? "visible" : "hidden",
            // border: "solid black 1px",
          }}
          className="space-x-3 "
        >
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={update}
            onChange={(e) => setUpdate(e.target.value)}
            style={{ minWidth: "25%", maxWidth: "25%" }}
          />
          <button
            type="submit"
            style={{ minWidth: "10%", maxWidth: "10%" }}
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Update Todo
          </button>
        </form>
        <ul
          className="list-none"
          style={{
            width: "80%",
            overflow: "scroll",
            scrollbarWidth: "none",
            maxHeight: "47vh",
            marginTop: "30px",
          }}
        >
          {todos.map((todo) => (
            <li
              className="mt-4 flex  flex-row justify-between items-center bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}
            >
              <div
                style={{
                  display: "flex",
                  minWidth: "6%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <input
                  type="checkbox"
                  onChange={(e) => handleCheck(todo.id, e.target.checked)}
                />
                <div
                  className="text-white"
                  style={{
                    textDecoration: check.includes(todo.id)
                      ? "line-through"
                      : "none",
                    fontSize: "22px",
                    paddingLeft: "25px",
                    fontWeight: "500",
                  }}
                >
                  {todo.text}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // border: "solid blue 2px",
                }}
              >
                {" "}
                <button
                  className="py-0  "
                  style={{
                    height: "50px",
                    // border: "solid blue 1px",
                    marginRight: "40px",
                    // paddingBottom: "10px",
                  }}
                  onClick={() => handleUpdate(todo.id, todo.text)}
                >
                  <img
                    src={updateImg}
                    style={{ height: "80%", width: "100%" }}
                    alt=""
                  />
                </button>
                <button
                  onClick={() => dispatch(removeTodo({ id: todo.id }))}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // border: "solid blue 2px",
                  }}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todos;

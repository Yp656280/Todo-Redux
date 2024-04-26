import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodos";
import Todos from "./components/Todo";
function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          backgroundColor: "beige",
          minHeight: "100vh",
        }}
      >
        {" "}
        <div style={{ fontSize: "40px", fontWeight: "700", marginTop: "10px" }}>
          Todo Manager{" "}
        </div>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;

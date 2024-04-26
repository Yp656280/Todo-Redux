import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", text: "hello" }],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload.text,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((cur) => cur.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      console.log(action.payload.id, action.payload.text);
      state.todos = state.todos.map((cur) => {
        return cur.id === action.payload.id
          ? { id: action.payload.id, text: action.payload.text }
          : cur;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

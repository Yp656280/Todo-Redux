import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import displayReducer from "../features/display/displaySlice";
export const store = configureStore({
  reducer: {
    todoReducer,
    displayReducer,
  },
});

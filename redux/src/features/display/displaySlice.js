import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  display: true,
};
export const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    updateDisplay: (state, action) => {
      state.display = action.payload.display;
    },
  },
});

export const { updateDisplay } = displaySlice.actions;

export default displaySlice.reducer;

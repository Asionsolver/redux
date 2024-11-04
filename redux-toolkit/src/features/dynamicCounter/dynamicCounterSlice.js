import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

const dynamicCountersSlice = createSlice({
  name: "dynamicCounter",
    initialState,
    reducers:{
        increment: (state, action) => {
           state.count += action.payload;
        },
        decrement: (state, action) => {
            state.count -= action.payload
        },
    }
});

export default countersSlice.reducer;

export const { increment, decrement } = countersSlice.actions;
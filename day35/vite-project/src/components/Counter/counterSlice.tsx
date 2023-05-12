import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  arr: Array<string>;
}

const initialState: CounterState = {
  count: 0,
  arr: [],
};

export const counterSlice: any = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    storeArray: (state, data) => {
      state.arr = data.payload;
    },
  },
});

export const { increment, decrement, reset, storeArray } = counterSlice.actions;

export default counterSlice.reducer;

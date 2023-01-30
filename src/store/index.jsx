import { createSlice, legacy_createStore } from "@reduxjs/toolkit";

const iniState = { count: 0 };

const counterSlice = createSlice({
  name: "conter",
  initialState: iniState,
  reducers: {
    INC: (state, action) => {
      state.count += action.payload;
    },
    DEC: (state, action) => {
      state.count -= action.payload;
    },
  },
});

const store = legacy_createStore(counterSlice.reducer);

export const counterActions = counterSlice.actions;

export default store;

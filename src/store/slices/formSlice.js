import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  record: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setRecord(state, { payload }) {
      state.record = payload;
    },
  },
});

export const { setRecord } = formSlice.actions;
export default formSlice.reducer;

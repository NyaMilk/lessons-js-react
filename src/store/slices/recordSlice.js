import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  records: [],
  sort: "dateDesc",
  currentPage: 0,
};

const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    setRecords(state, { payload }) {
      state.records = payload;
    },
    setSort(state, { payload }) {
      state.sort = payload;
    },
    setCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
  },
});

export const { setRecords, setSort, setCurrentPage } = recordSlice.actions;
export default recordSlice.reducer;

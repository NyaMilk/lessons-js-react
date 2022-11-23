import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  records: [],
  sortColumn: "date",
  sortDirection: "desc",
  currentPage: 1,
  pageCount: 1,
};

const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    setRecords(state, { payload }) {
      state.records = payload;
    },
    setSortColumn(state, { payload }) {
      state.sortColumn = payload;
    },
    setSortDirection(state, { payload }) {
      state.sortDirection = payload;
    },
    setCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
    setPageCount(state, { payload }) {
      state.pageCount = payload;
    },
  },
});

export const {
  setRecords,
  setSortColumn,
  setSortDirection,
  setCurrentPage,
  setPageCount,
} = recordSlice.actions;
export default recordSlice.reducer;

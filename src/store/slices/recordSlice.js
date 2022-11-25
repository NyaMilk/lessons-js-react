import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  records: [],
  sortColumn: "date",
  sortDirection: "desc",
  currentPage: 1,
  pageCount: 1,
  selectedRecordsIds: [],
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
    setSelectedRecordsIds(state, { payload }) {
      state.selectedRecordsIds = payload;
    },
  },
});

export const {
  setRecords,
  setSortColumn,
  setSortDirection,
  setCurrentPage,
  setPageCount,
  setSelectedRecordsIds,
} = recordSlice.actions;
export default recordSlice.reducer;

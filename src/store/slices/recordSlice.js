import { createSlice } from "@reduxjs/toolkit";
import { setFilters, setSearch } from "./filterSlice";

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
    updateRecord(state, { payload: { id, key, value } }) {
      state.records.forEach((record) => {
        if (record.id === id) {
          record[key] = value;
        }
      });
      state.selectedRecordsIds = [];
    },
    deleteRecords(state) {
      state.records = state.records.filter(
        ({ id }) => !state.selectedRecordsIds.includes(id)
      );
      state.selectedRecordsIds = [];
    },
    setSortColumn(state, { payload }) {
      state.sortColumn = payload;
      state.selectedRecordsIds = [];
    },
    setSortDirection(state, { payload }) {
      state.sortDirection = payload;
    },
    setCurrentPage(state, { payload }) {
      state.currentPage = payload;
      state.selectedRecordsIds = [];
    },
    setPageCount(state, { payload }) {
      state.pageCount = payload;
    },
    setSelectedRecordsIds(state, { payload }) {
      state.selectedRecordsIds = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setSearch, (state) => {
        state.selectedRecordsIds = [];
      })
      .addCase(setFilters, (state) => {
        state.selectedRecordsIds = [];
      });
  },
});

export const {
  setRecords,
  updateRecord,
  deleteRecords,
  setSortColumn,
  setSortDirection,
  setCurrentPage,
  setPageCount,
  setSelectedRecordsIds,
} = recordSlice.actions;
export default recordSlice.reducer;

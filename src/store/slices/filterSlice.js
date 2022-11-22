import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  search: "",
  dateFrom: "",
  dateTo: "",
  amountFrom: "",
  amountTo: "",
  statuses: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter(state, { payload: { name, value } }) {
      state[name] = value;
    },
    setStatus(state, { payload }) {
      state.statuses = payload;
    },
    clearFilters() {
      return initialState;
    },
  },
});

export const { setFilter, setStatus, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;

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
    setSearch(state, { payload }) {
      state.search = payload;
    },
    setFilters(state, { payload: { filters } }) {
      Object.keys(filters).map((filter) => (state[filter] = filters[filter]));
    },
    setStatus(state, { payload }) {
      state.statuses = payload;
    },
    clearFilters() {
      return initialState;
    },
  },
});

export const { setSearch, setFilters, setStatus, clearFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  sort: "Asc",
  dateFrom: 0,
  dateTo: 0,
  amountFrom: 0,
  amountTo: 0,
  data: {},
  rowCount: null,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    tableClear: () => initialState,
    getAllDate: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { tableClear, getAllDate } = tableSlice.actions;
export default tableSlice.reducer;

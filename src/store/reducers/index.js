import { combineReducers } from "redux";
import filters from "../slices/filterSlice";
import records from "../slices/recordSlice";

const reducers = combineReducers({
  filters,
  records,
});

export default reducers;

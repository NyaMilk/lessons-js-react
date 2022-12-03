import { combineReducers } from "redux";
import filters from "../slices/filterSlice";
import records from "../slices/recordSlice";
import form from "../slices/formSlice";

const reducers = combineReducers({
  filters,
  records,
  form,
});

export default reducers;

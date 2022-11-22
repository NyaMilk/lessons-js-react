import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index.js";
import logger from "redux-logger";

const store = configureStore({
  reducer: reducers,
  middleware: [logger],
});

export default store;

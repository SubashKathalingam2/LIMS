// store.js
import { configureStore } from "@reduxjs/toolkit";
import laboratoryReducer from "./laboratorySlice";
const store = configureStore({
  reducer: {
    laboratories: laboratoryReducer,
  },
});
export default store;

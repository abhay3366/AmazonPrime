// Import necessary modules
import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./searchSlice";
import userNameReducer from "./userSlice";

// Combine Reducers
const rootReducer = {
  user: userNameReducer,
  input: inputReducer,
};

// Create the store with the combined reducer
const store = configureStore({
  reducer: rootReducer,
});

export default store;

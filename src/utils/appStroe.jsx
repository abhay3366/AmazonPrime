import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./searchSlice";


const store=configureStore({
    reducer: {
        input:inputReducer
    }
})
export default store;
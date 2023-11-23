import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name: 'input',
    initialState:{
       inputData:'', //initial value of input data
    },
    reducers:{
        searchMovies:(state,action)=>{
            state.inputData=action.payload;
        }
    },
})


const inputReducer = searchSlice.reducer;
export const {searchMovies}=searchSlice.actions;
export default inputReducer;
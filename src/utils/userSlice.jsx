import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name: 'user',
    initialState:{
        userDetails: '',
    },
    reducers:{
        userName:(state,action)=>{
            state.userDetails = action.payload
        }
    }
})

const userNameReducer=userSlice.reducer;
export const {userName} = userSlice.actions;
export default userNameReducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loader : "Ideal",
    imageURL : ""
}

 const treadingSlice = createSlice({
    name: "treadingMovie",
    initialState,
    reducers:{
      addImage: (state,action)=>{
        state.imageURL = action.payload
      }
    },
   extraReducers : (builder)=>{
    builder
    .addCase(getTreadingMovie.fulfilled,(state,action)=>{
         state.data = action.payload
         state.loader = "Ideal";
    })
    .addCase(getTreadingMovie.pending,(state,action)=>{
        state.loader = "Loading"
    })
    .addCase(getTreadingMovie.rejected,(state,action)=>{
        state.loader = "error"
    })
   }
})

export default treadingSlice.reducer
export const {addImage} =  treadingSlice.actions
export const getTreadingMovie = createAsyncThunk('/trending/get',async()=>{
    const response = await axios.get('/trending/all/week')
    return response.data.results
})





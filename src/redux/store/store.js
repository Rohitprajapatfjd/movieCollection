import { configureStore } from "@reduxjs/toolkit";
import treadingDataSlice from "../slices/treadingDataSlice";
const  store =  configureStore({
    reducer:{
        treadingMovie: treadingDataSlice
    }
})

export default store;
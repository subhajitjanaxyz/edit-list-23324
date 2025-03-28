import { configureStore } from "@reduxjs/toolkit";
import dataproduct from "./dataSlice"

 export const store=configureStore({
    reducer:{
        product: dataproduct

    }
})
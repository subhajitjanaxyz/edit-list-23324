import { createSlice } from "@reduxjs/toolkit";
import dataedit from './data/data.json'
const initialState=dataedit;
// console.log(initialState)
const data=createSlice({
    name:"data",
    initialState,
    reducers:{
        edit:(state,aciton)=>{
           const alldataobj=JSON.parse(JSON.stringify(state))
          const muteddata= alldataobj.products.map((data)=>{
            return data.id === aciton.payload.id ? {...data,title:aciton.payload.title,description:aciton.payload.description,brand:aciton.payload.brand}:data
           })
           state.products=muteddata;
            
           }
    }
})
export const{edit}=data.actions;
export default data.reducer
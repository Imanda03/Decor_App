import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'Cart',
    initialState:{
        items:[],
    },
    reducers:{
       addCart(state,action){

       },
       removeCart(state,action){
        
       }
    },

})

export const {addCart,removeCart}=cartSlice.actions;
export default cartSlice.reducer;
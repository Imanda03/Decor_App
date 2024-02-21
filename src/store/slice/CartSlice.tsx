import { createSlice } from "@reduxjs/toolkit";
import { singleProduct } from "../../interface";

  interface CartState{
    items:singleProduct[];
    count:number;
  }

  const initialState: CartState={
    items:[],
    count:0,
  }

const cartSlice=createSlice({
    name:'Cart',
    initialState,
    reducers:{
       addCart(state,action){
        const existingItem=state.items.find(item=>item.id===action.payload.id);
        if(existingItem){
            return{
            ...state,
            items:state.items.map((item:singleProduct)=>
                item.id===existingItem.id? {...item, quantity:item.quantity+1}: item)
            };
        }else{
            return{
                ...state,
                items:[...state.items,{...action.payload,quantity:1}],
            };
        }
       
        
    },
       removeCart(state,action){
        const itemToRemove=action.payload;
        return{
            ...state,
            items:state.items.filter(item=>item.id!==itemToRemove),
        };
       },
    //    increaseQuantity(state,action){
    //     return{

    //     }
    //    }
    },

});

export const {addCart,removeCart}=cartSlice.actions;
export default cartSlice.reducer;
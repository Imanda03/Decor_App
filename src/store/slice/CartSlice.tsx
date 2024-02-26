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
                item.id===existingItem.id? {...item, quantity:item.quantity+1}: item),
                count:state.count+1,
            };
           
        }else{
            return{
                ...state,
                items:[...state.items,{...action.payload,quantity:1,totalproducts:1}],
                count:state.count+1,

            };
        }
       
        
    },
       removeCart(state,action){
        const itemToRemove=action.payload;
        return{
            ...state,
            items:state.items.filter(item=>item.id!==itemToRemove),
            count:0,

        };
       },
        increaseQuantity(state,action){
            const increaseId=action.payload;
            return{
                ...state,
                items:state.items.map(item=>item.id===increaseId?{...item,quantity:item.quantity+1}:item),
                count:state.count+1,
            };
        },
        decreaseQuantity(state,action){
            const decreaseId=action.payload;
            return{
                ...state,
                items:state.items.map(item=>item.id===decreaseId?{...item,quantity:item.quantity-1}:item),
                count:state.count-1,
            }
        }
    },

});

export const {addCart,removeCart,increaseQuantity,decreaseQuantity}=cartSlice.actions;
export default cartSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";
// import { singleProduct } from "../../interface";

//   interface CartState{
//     items:singleProduct[];
//     count:number;
//   }

//   const initialState: CartState={
//     items:[],
//     count:0,
//   }

// const cartSlice=createSlice({
//     name:'Cart',
//     initialState,
//     reducers:{
//        addCart(state,action){
//         const existingItem=state.items.find(item=>item.id===action.payload.id);
//         if(existingItem){
//             return{
//             ...state,
//             items:state.items.map((item:singleProduct)=>
//                 item.id===existingItem.id? {...item, quantity:item.quantity+1}: item),
//                 count:state.count+1,
//             };
//         }else{
//             return{
//                 ...state,
//                 items:[...state.items,{...action.payload,quantity:1,totalproducts:1}],
//                 count:state.count+1,

//             };
//         }
       
        
//     },
//        removeCart(state,action){
//         const itemToRemove=action.payload;
//         return{
//             ...state,
//             items:state.items.filter(item=>item.id!==itemToRemove),
//             count:0,

//         };
//        },
//         increaseQuantity(state,action){
//             const increaseId=action.payload;
//             return{
//                 ...state,
//                 items:state.items.map(item=>item.id===increaseId?{...item,quantity:item.quantity+1}:item),
//                 // count:state.count+1,
//             };
//         },
//         decreaseQuantity(state,action){
//             const decreaseId=action.payload;
//             return{
//                 ...state,
//                 items:state.items.map(item=>item.id===decreaseId?{...item,quantity:item.quantity-1}:item),
//                 count:state.count-1,
//             }
//         }
//     },

// });

// export const {addCart,removeCart,increaseQuantity,decreaseQuantity}=cartSlice.actions;
// export default cartSlice.reducer;
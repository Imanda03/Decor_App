import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slice/CartSlice';

const store=configureStore({
    reducer:{
        carts:cartSlice,
    },
});

export default store;
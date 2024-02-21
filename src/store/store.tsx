import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slice/CartSlice';

const store=configureStore({
    reducer:{
        carts:cartSlice,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
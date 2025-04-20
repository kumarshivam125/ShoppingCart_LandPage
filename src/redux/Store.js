import { configureStore } from "@reduxjs/toolkit";

import  CartSlice  from "./Slices/CartSlice"; //Mind the way of importing (see your copy)
 
export const store=configureStore({
    reducer:{
        cart:CartSlice
    },
})
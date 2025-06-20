// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cart:[],
    catalog:[]
}
export const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        setCatalog:(state,action)=>{
            state.catalog=action.payload;
        },
        addToCart:(state,action)=>{
            state.cart.push(action.payload);
            state.cart=state.cart.map(x=>({...x,qty:1}));
            state.catalog=state.catalog.map(x=>x.id==action.payload.id?{...x,qty:1}:x);
        },
        removeFromCart:(state,action)=>{
            state.cart=state.cart.filter((item)=>item.id!==action.payload);
            state.catalog=state.catalog.map(x=>x.id==action.payload?{...x,qty:0}:x);
        },
        increment:(state,action)=>{
            state.cart=state.cart.map(x=>x.id==action.payload?{...x,qty:x.qty+1}:x);
            state.catalog=state.catalog.map(x=>x.id==action.payload?{...x,qty:x.qty+1}:x);
        },
        decrement:(state,action)=>{
            state.cart=state.cart.map(x=>x.id==action.payload?{...x,qty:x.qty-1}:x);
            state.catalog=state.catalog.map(x=>x.id==action.payload?{...x,qty:x.qty-1}:x);
        },
        
    }
})
export const {addToCart,removeFromCart,increment,decrement,setCatalog}=CartSlice.actions;
export default CartSlice.reducer;
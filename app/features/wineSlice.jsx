import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    wines: [],
    toogle: false,
    infos: []
};



const addOrder = createSlice({
  name: "addOrder",
  initialState,
  reducers:{
    addToOrder: (state, action) => {
        state.wines = [...state.wines, action.payload];
    },
    AddToOrder: (state, action) => {
        const {name, orders, table , promocode } = action.payload
        state.wines = [...state.wines, {
            name:name,
            orders:orders,
            table:table,
            promocode:promocode,
        }];
    },

        AddContacts: (state, action) => {
        const {name, email, message} = action.payload
        state.infos = [...state.wines, {
            name:name,
            email:email,
            message:message,
        }];
    },


       RemoveOrder: (state , action)=>{
        state.wines = [...state.wines.filter(wine=>wine !== action.payload)]
    },

    removeOrder: (state , action)=>{
        state.wines = [...state.wines.filter(wine=>wine !== action.payload)]
    },
    addTocart : (state, action)=>{
        const {myId, quantity}= action.payload;
        const productcount = state.wines.findIndex((wine) => wine.id === myId);
        if (productcount>=0) {
            state.wines[productcount].quantity += 1;
        } else {
            state.wines.push({ id: myId, quantity: 1 });
        }
             
    },
    addingTotheCart: (state, action) => {
        const { myId } = action.payload;
        const {quantity} = action.payload;
        state.wines = [...state.wines , {
            id : myId,
            quantity: quantity
        }]
    },
    addcartitem: (state, action)=>{
        const { myId} = action.payload;
        const {quantity} = action.payload;
        const productIndex = state.wines.findIndex((wine) => wine.id === myId);
        if (quantity > 0){
            state.wines[productIndex].quantity = quantity;
        }else{
            state.wines = [...state.tasks.filter(wine => wine.id !== myId)];
        }

    },
    cartToogle: (state, action)=>{
        if (state.toogle === false){
            state.toogle = true;
        }else{
            state.toogle = false
        }
    }

},

});

export const {addToOrder, AddToOrder,removeOrder, AddContacts,addTocart, addingTotheCart, addcartitem, cartToogle} = addOrder.actions
export default addOrder.reducer
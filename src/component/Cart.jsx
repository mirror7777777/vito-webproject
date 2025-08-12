import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  addingTotheCart, addcartitem, cartToogle } from '../../app/features/wineSlice';
import CartItem from './cartItems';
import { useState, useEffect } from 'react';

export default function CartTab() {
  const cartTab =  useSelector((state) => state.addOrder.wines);
  const Togglecart = useSelector((state) => state.addOrder.toogle);
  const dispatch = useDispatch();
  function additemTocart() {
    dispatch(addcartitem({
      myId : cartTab.id,
      quantity: cartTab.quantity
    }))

    
  }
  function closeCart() {
    dispatch(cartToogle())
  }
  return (
    <div>
        <div className={`bg-orange-500 w-96 h-full fixed top-0 right-0 z-50 grid grid-rows-[auto_1fr_auto] transform ${Togglecart === false ? 'translate-x-full' : 'translate-x-0'} transition-transform duration-300 ease-in-out`}>
            <h2 className='p-3 text-white text-2xl'>Shopping Cart Item</h2>

            <div>
               {cartTab && (cartTab.map((item)=><CartItem key={item.id} prop={item} />))}
            </div>
            <div className='grid grid-cols-2'>
                <button className='bg-black text-white cursor-pointer' onClick={closeCart}>close</button>
                 <button className='bg-brand-300 text-white cursor-pointer' onClick={additemTocart}>checkout</button>
            </div>

        </div>
      
    </div>
  )
}
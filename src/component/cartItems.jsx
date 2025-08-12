import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addingTotheCart, addcartitem } from '../../app/features/wineSlice';
import { useState,useEffect } from 'react';
export default function CartItem(prop) {
  const [cartdisplay, setCartDisplay] = React.useState([]);
   const [products, setProduct] = useState([]);
  const dispatch = useDispatch();
  const { id , quantity} = prop.prop;
  React.useEffect(()=>{
    const product = async () => {
       await fetch('http://localhost:5689').then((response)=>{
       if (response.ok) {
         return response.json()
         
       } else {
         throw new Error('network response error')
         
       }
     }).then((data)=>{
       if (!data) {
         throw new Error('data error')
         
       } else {
        console.log(data)
       setProduct(data)
       }

      
     })
       
     }
     

    product();
    
  } , [id])

  React.useEffect(()=>{
    const cartitem = products.find((items)=> items.id === id);
    if (!cartitem){
      console.error('No cart items found');
      setCartDisplay([]);
    }else{
      setCartDisplay(cartitem);
    }



  }, [products , id])
  

function handleAddToCart() {
  dispatch(addcartitem(
    {
      myId : id,
      quantity: quantity+1
    }
  ))
}
function handleRemoveCart() {
  dispatch(addcartitem(
    {
      myId : id,
      quantity: quantity-1
    }
  ))
}

  

  return (
    <div className="bg-white shadow-lg rounded-lg  p-4 transition-transform hover:scale-105 mb-6">
      {cartdisplay && cartdisplay ? (
        <div className="flex justify-between items-center">
          <img
            src={cartdisplay.image}
            alt={cartdisplay.name}
            className="w-24 h-24 object-cover rounded-lg border-2 border-gray-200 shadow-sm"
          />
          <div className="flex-1 ml-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{cartdisplay.name}</h3>
            <p className="text-base text-gray-600 mb-1">
              <span className="font-medium">Price:</span> <span className="text-green-600">${cartdisplay.price}</span>
            </p>
            <p className="text-base text-gray-600">
              <span className="font-medium">Quantity:</span> {quantity}
            </p>
          </div>
          <div className="flex flex-row items-center gap-2  position-relative  md:w-15">
            <button
              onClick={handleAddToCart}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full cursor-pointer border-2 border-green-600 shadow transition "
              aria-label="Increase quantity"
            >
              +
            </button>
            <button
              onClick={handleRemoveCart}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-full cursor-pointer border-3 border-red-600 shadow transition mx-w-10 w-3.5"
              aria-label="Decrease quantity"
            >
              -
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-red-500 font-semibold py-4">No cart item found</div>
      )}
    </div>
  )
}
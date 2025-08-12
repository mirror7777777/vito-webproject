import React, { use } from 'react';
import { useState , useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  addingTotheCart } from '../../app/features/wineSlice';



export default function Details() {
  const [display , useDisplay] = useState();
  const [Error , useError] = useState();
  const {slug} = useParams();
  const [cartCount , useCartcount] = useState(1);
  const cart = useSelector((state)=> state.addOrder.wines);
  const dispatch = useDispatch();

  useEffect(()=>{
    const productdisplay = products.find((item)=> item.slug === slug)
    if (!productdisplay){
      useError('Product not found');
    }else{
      useDisplay(productdisplay);

    }
    if(Error){
      console.error(Error);
    }
    

  }, [] , )

  function increaseCart(params) {
    params.preventDefault();
    useCartcount(cartCount + 1)



    
  }
  
  function decreaseCart(params) {
    params.preventDefault();
    useCartcount(cartCount - 1 < 1 ? 1 : cartCount - 1);
  }
  function handleAddToCart(events) {
    events.preventDefault();
    dispatch( addingTotheCart({
      quantity: cartCount,
      myId : display.id
    })
    )
    console.log(cart);
  }






  return (
    <div>{display && (
           <div>
          <h1>Product details</h1>
          <div className='flex flex-col md:flex-row gap-5 p-5 bg-white rounded-lg shadow-md'>
            <div className=''>
              <img src={display.image} alt={display.name} className='w-full h-50 object-cover' />
            </div>
            <div>
              <h2 className='text-2xl py-3 text-center font-medium'>{display.name}</h2>
              <p className='text-lg'>{display.price}</p>
              <div>
                 <button className='bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-blue-600 transition-colors duration-300 md:w-30' onClick={handleAddToCart} name='addtocart'>
                Add To Cart
              </button>
              </div>
              <div className=''>
                <button onClick={increaseCart}>ADD</button>
                <span>{cartCount}</span>
                <button onClick={decreaseCart}>remove</button>
              </div>
             

            </div>

          </div>


        </div>
    )}
   
    </div>
  )
}
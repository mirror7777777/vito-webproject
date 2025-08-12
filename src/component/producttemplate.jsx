import { use } from 'react';
import { Link } from 'react-router-dom';
import { addTocart } from '../../app/features/wineSlice';
import { useDispatch, useSelector } from 'react-redux';
import cart from "../../server/public/images/cart.jpeg"

export default function TemplateProps(prop) {
    const {id, name,image, price, slug,} = prop.prop;
    const dispatch = useDispatch();
    const addtoCart = useSelector((state) => state.addOrder.wines);

    function handleAddToCart(events) {
        events.preventDefault();
        dispatch(addTocart({
            myId: id,}));
    }


  return (
    <div className='bg-white p-5 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100'>
       <Link to={slug}>
         <img
           className='w-full h-65 object-cover object-center drop-shadow-[0_8px_30px_#0007] rounded-lg hover:scale-105 transition-transform duration-300'
           alt=''
           src={image}
         />
       </Link>
       <h3 className='text-2xl py-3 text-center font-medium text-gray-800 tracking-wide'>{name}</h3>
       <div className='flex justify-between items-center mt-2'>
         <p className='text-lg text-gray-700'>
           $<span className='text-2xl font-semibold'>{price}</span>
         </p>
         <button
           className='bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors duration-300 md:w-30 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400'
           onClick={handleAddToCart}
           name='addtocart'
         >
           <img src={cart} alt='a cart' className='w-5' />
           Add To Cart
         </button>
       </div>
    </div>
  )
}
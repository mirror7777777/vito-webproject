import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../../server/public/images/cart.jpeg'
import { useSelector, useDispatch } from 'react-redux'
import { addingTotheCart , cartToogle, addcartitem} from '../../app/features/wineSlice'


export default function Header() {
  const cartitems = useSelector((state)=> state.addOrder.wines);
  const toggleCart = useSelector((state) => state.addOrder.toogle);
  const dispatch = useDispatch();
  function openCartToogle() {
    dispatch(cartToogle());
    
  }
  const [cartCount, setCartCount] = React.useState(0);
  React.useEffect(() => {
    let count = 0;
    cartitems.forEach(items => {
      count += items.quantity;
      setCartCount(count);
    });
  }, [cartitems]);

  return (
    <div className='headertemplate'>
      <header className='flex justify-between items-center cursor-pointer -mb-20 dis'>
        <Link to='/' className='text-xl font-semibold text-white'>Home</Link>
        <div className='mb-1.5 relative header' onClick={openCartToogle}>
          <img src={cart} alt='shopping cart' className='max-w-full w-13' />
          <span className='absolute top-2 right-3 bg-red-500 text-white text-sm w-4 h-4 rounded-full flex items-center justify-center' style={{transform: 'translate(50%,-50%)'}}>
            {cartCount}
          </span>
        </div>
      </header>
    </div>
  )
}
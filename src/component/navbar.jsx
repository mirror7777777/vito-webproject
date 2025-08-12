import React from 'react'
import cart from '../../server/public/images/cart.jpeg'
import {NavLink, replace} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import vito from '../../server/public/images/VITO-COLOR.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { addingTotheCart , cartToogle, addcartitem} from '../../app/features/wineSlice'

function Navbar() {
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
  const navigate = useNavigate()
  return (
    <div class='navbar bg-amber-500 text-primary-content headerborder'>
      <nav class="nav">
        <img src={vito} alt="logo" class='myLogo'/>
        <ul>
          <NavLink to='/about' class=' text-2xl textstyle '><li>About</li></NavLink>
          <NavLink to='/product' class=' text-2xl textstyle '><li>product</li></NavLink>
          <NavLink to='/contact' class=' text-2xl textstyle'><li>Contact</li></NavLink>
        </ul>
        <header class='flex justify-between items-center cursor-pointer -mb-20'>
          <div class='mb-1.5 relative header' onClick={openCartToogle}>
            <img src={cart} alt='shopping cart' class="cartImage"/>
            <span class='absolute top-2 right-3 bg-red-500 text-white text-sm w-4 h-4 rounded-full flex items-center justify-center translates'>
              {cartCount}
            </span>
          </div>
        </header>
      </nav>
    </div>
  )
}

export default Navbar
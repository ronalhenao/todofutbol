import { useContext } from 'react';
import { CartContext } from '../../context/globalContext';
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from "lucide-react";

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <NavLink to='cart' className='cart relative flex items-center justify-center bg-neutral-200 rounded-full w-10 h-10'>
      <ShoppingCart size={20} />
      {totalQuantity() > 0 && (
        <span 
          className='bg-teal-500 rounded-full absolute -top-0.5 -right-0.5 w-5 h-5 flex justify-center items-center font-medium text-sm text-teal-50'>
            { totalQuantity() }
        </span>
      )}
    </NavLink>
  );
}

export default CartWidget;

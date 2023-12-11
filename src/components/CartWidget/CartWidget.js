import React from 'react';

import { ShoppingCart } from "lucide-react";
// https://lucide.dev/

function CartWidget({ number }) {
  return (
    <button className='cart relative flex items-center justify-center bg-neutral-200 rounded-full w-10 h-10'> 
      < ShoppingCart size={20} />
      <span className='bg-teal-500 rounded-full absolute -top-0.5 -right-0.5 w-5 h-5 flex justify-center items-center font-medium text-sm text-teal-50'>{ number }</span>
    </button>
  )
}

export default CartWidget
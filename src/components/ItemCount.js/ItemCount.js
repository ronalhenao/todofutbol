import { useState } from 'react'
import { ShoppingCart } from 'lucide-react';

function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if( count < stock )
    setCount(count + 1)
  }

  const handleDecrease = () => {
    if( count > 1 ) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className='flex bg-neutral-300 items-center gap-6 rounded-full px-5 py-2'>
        <button
          type='button'
          onClick={ handleDecrease }
          className=' text-neutral-600 font-bold w-4 text-lg'
        >-</button>
        <span className='w-6 text-center font-bold'>{ count }</span>
        <button
          type='button'
          onClick={ handleIncrease }
          className=' text-neutral-600 font-bold w-4 text-lg'
        >+</button>
      </div>
      <button
        type='button'
        onClick={ () => onAdd( count ) }
        disabled={ !stock }
        className='font-normal text-sm text-neutral-50 rounded-full px-5 py-2 flex items-center gap-3 bg-neutral-600'>
          <ShoppingCart size={ 16 }/>
          <span className=' font-semibold'>Añadir al carrito</span>
      </button>
    </>
  )
}

export default ItemCount
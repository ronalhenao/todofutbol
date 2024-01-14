import { useContext } from 'react';
import { CartContext } from '../../context/globalContext';
import CartItem from '../CartItem/CartItem';
import { NavLink } from 'react-router-dom'
import { Trash } from 'lucide-react';

function Cart() {

  const { cart, clearCart, totalQuantity, totalPrice  } = useContext(CartContext);

  if( totalQuantity() === 0 ) {
    return (
      <section className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-semibold text-neutral-900 mb-10'>No hay productos en el carrito</h2>
        <NavLink 
          to='/'
          className='font-normal text-sm text-neutral-950 border border-neutral-950 rounded-full px-4 py-1 flex items-center gap-1 mb-6'
        >Ver productos</NavLink>
      </section>
    )
  }

  return (
    <div className='grid grid-cols-3 items-start gap-10'>
      <section className=' col-span-2'>
        { 
          cart.map( product => <CartItem key={product.id} {...product} /> ) 
        }
        <button
          onClick={ () => clearCart() }
          className='font-normal text-sm text-neutral-950 border border-neutral-950 rounded-full px-6 py-2 flex items-center gap-2 mb-6'
        >
          <Trash size={16}/>
          <span>Vaciar carrito</span></button>
      </section>
      <aside className='bg-white rounded-lg shadow-md px-12 py-7'>
        <h3 className='font-semibold text-base'>Resumen de compra</h3>

        <h4 className='font-normal text-lg flex items-center justify-between'>Productos: <span>{ totalQuantity() } </span></h4>
        
        <h4 className='font-semibold text-xl flex items-center justify-between'>Total: <span>$ { totalPrice() }</span></h4>
        <NavLink 
          to='/checkout'
          className=' font-semibold text-md text-center text-neutral-50 rounded-full px-5 py-3 bg-neutral-600 block mt-7'
        >Continuar compra</NavLink>
      </aside>
    </div>
  )
}

export default Cart
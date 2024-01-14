import { useContext } from 'react';
import { CartContext } from '../../context/globalContext';
import { X } from 'lucide-react';

function CartItem({ name, price, id, quantity, image }) {

  const { removeItem } = useContext(CartContext);

  return (
    <article className='flex items-center mb-8 justify-between bg-white rounded-lg shadow-md px-12 py-7'>
      <img src={ image } alt={name} className=' w-20' />
      <h2 className=' font-semibold text-base'>{name}</h2>
      <ul className='flex items-center gap-16'>
        <li>Cantidad: <span className='font-medium'>{quantity}</span></li>
        <li>Precio Unidad: <span className='font-medium'>$ {price}</span></li>
        <li>Subtotal: <span className=' font-medium text-base'>$ {price * quantity}</span></li>
      </ul>
      <button onClick={() => removeItem(id)} className='bg-neutral-200 rounded-full w-10 h-10 flex items-center justify-center'><X size={20} /></button>
    </article>
  )
}

export default CartItem
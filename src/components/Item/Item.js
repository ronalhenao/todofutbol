import { Plus } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Item({product}) {
  const { id, name, price, image, category } = product;
  
  return (
    <NavLink to={`/productos/${ id }`}>
      <div className='bg-white cursor-pointer relative rounded-lg px-3 py-4 shadow'>
        <figure>
          <img src={ image } alt={ name } />
        </figure>
        <span className=' font-normal text-xs text-black/50'>{ category ? category.charAt(0).toUpperCase() + category.slice(1).toLowerCase() : '' }</span>
        <h3 className=' font-normal text-base text-neutral-900'>{ name }</h3>
        <p className='font-medium text-xl text-neutral-950 mb-2'>${ price }</p>
        <button 
          type='button'
          className='font-normal text-sm text-neutral-950 border border-neutral-950 rounded-full px-4 py-1 flex items-center gap-1'>
            <Plus size={16} />
            Ver más
        </button>
      </div>
    </NavLink>
  )
}

export default Item
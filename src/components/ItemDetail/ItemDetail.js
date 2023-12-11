import { NavLink } from 'react-router-dom'
import ItemCount from '../ItemCount.js/ItemCount';
import { MoveLeft } from 'lucide-react';

function ItemDetail({ product }) {
  const { category, description, image, name, price, stock  } = product;
  return (
    <>
      <button
        type='button'
        className='font-normal text-sm text-neutral-950 border border-neutral-950 rounded-full px-4 py-1 flex items-center gap-1 mb-6'>
          <MoveLeft />
          <NavLink to={`/`}>Volver</NavLink>
      </button>
      <article className=' grid grid-cols-2 items-center gap-16 bg-white rounded-lg shadow-md px-12 py-7'>
        <figure>
          <img src={ image } alt={ name } />
        </figure>
        <section>
          <small className='font-normal text-xs text-neutral-500/70'>{ category.toUpperCase() }</small>
          <h2 className=' font-semibold text-4xl text-neutral-800 mb-8'>{name}</h2>
          <p className='text-neutral-500 mb-8'>{description}</p>
          <p className='font-medium text-3xl text-neutral-800 mb-1'>$ { price }</p>
          <span className='text-neutral-500 text-sm mb-10 inline-block'>Stock: ({stock} disponibles)</span>
          
          <ItemCount stock={stock} />
        </section>
      </article>
    </>
  )
}

export default ItemDetail
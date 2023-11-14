import React from 'react'

function ItemListContainer({ greeting }) {

  return (
    <section>
      <h2 className='text-2xl font-semibold text-teal-900 mb-10'>{ greeting }</h2>
    </section>
  )
}

export default ItemListContainer
import Item from '../Item/Item'

function ItemList({ greeting, products }) {

  return (
    <>
      <h2 className='text-2xl font-semibold text-neutral-900 mb-10'>{greeting}</h2>
      
      <section className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-6'>
        {
          products?.map((product) => (
            <Item
              key={ product.id } 
              product={ product } 
            />
          ))
        }
      </section>
    </>
  )
}

export default ItemList
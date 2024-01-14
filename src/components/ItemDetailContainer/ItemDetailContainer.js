import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase'

import Spinner from "../Spinner/Spinner";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const getProductById = doc(db, 'items', productId)

    getDoc( getProductById )
      .then(response => {
        if(response.exists()){
          const data = response.data()
          const productsAdapted = { id: response.id, ...data }
          setProduct( productsAdapted )
        }else{
          setError('Producto no encontrado')
        }
      })
      .catch(error => {
        console.log(error)
        setError("Error al cargar el producto");
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [productId])

  if (error) {
    return (
      <section className='flex flex-col items-center justify-center'>
        <h2 className="text-2xl font-semibold text-neutral-900 mb-10">{error}</h2>
        <NavLink 
          to={`/`}
          className='font-normal text-sm text-neutral-950 border border-neutral-950 rounded-full px-4 py-1 flex items-center gap-1 mb-6'>Ver productos</NavLink>
      </section>
    );
  }
  
  return (
    isLoading ? <Spinner /> : <ItemDetail product={ product } /> 
  )
}

export default ItemDetailContainer
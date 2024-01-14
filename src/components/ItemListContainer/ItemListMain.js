import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase'

import Spinner from "../Spinner/Spinner";

function ItemListMain() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams()

  useEffect(() => {
    setIsLoading(true);

    const filteredProducts = categoryId 
      ? query( collection(db,'items'), where( 'category', '==', categoryId ) )
      : collection(db, 'items')

    getDocs( filteredProducts )
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProducts( productsAdapted )
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })

  }, [categoryId])

  return (
    isLoading 
      ? <Spinner /> 
      : <ItemList 
          greeting="Productos"
          products={ products }
        />
  );
}

export default ItemListMain
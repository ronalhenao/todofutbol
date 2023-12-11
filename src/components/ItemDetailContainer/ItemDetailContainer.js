import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../db/productsMock";
import ItemDetail from '../ItemDetail/ItemDetail'

import Spinner from "../Spinner/Spinner";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getProductById(productId)
      .then(response => {
        setProduct(response)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId])
  
  return (
    isLoading ? <Spinner /> : <ItemDetail product={ product } /> 
    // <ItemDetail 
    //   // { ...product }
    //   product={ product }
    // />
  )
}

export default ItemDetailContainer
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import { getProducts, getProductsByCategory } from "../../db/productsMock";

function ItemListMain() {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams()

  useEffect(() => {

    const filteredProducts = categoryId ? getProductsByCategory : getProducts

    filteredProducts( categoryId )
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.log(error)
      })

  }, [categoryId])

  return (
    <ItemList 
      greeting="Listado productos"
      products={ products }
    />
  )
}

export default ItemListMain
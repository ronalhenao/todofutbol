import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if( !isInCart( item.id ) ) {
      setCart( prev => [...prev, { ...item, quantity }] )
    } else {
      console.log('El producto ya fue agregado')
    }
  }

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prodructs => prodructs.id !== itemId)
    setCart(cartUpdated)
  }

  const clearCart = () => {
    setCart([]);
  }

  const isInCart = (itemId) => {
    return cart.some(prodructs => prodructs.id === itemId)
  }

  const totalPrice = () => {
    return cart.reduce((prev, product) => prev + product.quantity * product.price, 0);
  }

  const totalQuantity = () =>  cart.reduce((acumulador, productsActual) => acumulador + productsActual.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      addItem,
      removeItem,
      clearCart,
      totalPrice,
      totalQuantity,
    }}>
      { children }
    </CartContext.Provider>
  )
}
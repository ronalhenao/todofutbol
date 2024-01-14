import { useContext, useState } from 'react';
import { CartContext } from '../../context/globalContext';
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { db } from '../../firebase'
import { Timestamp, collection, addDoc } from "firebase/firestore";

function Checkout() {
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  const {cart, totalPrice, clearCart} = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setIsLoading(true)

    try {
      const objOrder = {
        buyer: {
          name, phone, email,
        },
        items: cart,
        total: totalPrice(),
        date: Timestamp.fromDate(new Date()),
      };

      const orderRef = collection(db, 'orders')
      const orderAdded = await addDoc(orderRef, objOrder)
      setOrderId(orderAdded.id)
      clearCart()

    } catch (error) {
      console.error("Error durante la creación de la orden:", error);
    } finally {
      setIsLoading(false)
    }
  }
  
  if (isLoading) {
    return (
      <section className='flex flex-col items-center justify-center'>
        <h2 className="text-2xl font-semibold text-neutral-900 mb-10">Se está generando su orden</h2>
      </section>
    )
  }

  if (orderId) {
    return (
      <section className='flex flex-col items-center justify-center'>
        <h2 className="text-2xl font-semibold text-neutral-900 mb-10">El ID de su orden es: {orderId}</h2>
      </section>
    )
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-semibold text-neutral-800 mb-10'>Checkout</h1>
      <CheckoutForm onConfirm={ createOrder } />
    </div>
  )
}

export default Checkout
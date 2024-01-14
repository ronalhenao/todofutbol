import { useState } from 'react';

function CheckoutForm({ onConfirm }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleConfirm = (e) => {
    e.preventDefault()
    const userData = {
      name, phone, email
    }
    onConfirm(userData)
}

  return (
    <div className='bg-white shadow-md p-4 py-6 sm:p-6 rounded-lg w-1/4'>
      <form onSubmit={handleConfirm} className="space-y-5">
        <div>
          <label className="font-medium">Nombre</label>
          <input
            type="text"
            value={ name }
            onChange={({ target }) => setName(target.value)}
            required
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-neutral-600 shadow-sm rounded-full"
          />
        </div>
        <div>
          <label className="font-medium">Email</label>
          <input
            type="email"
            value={ email }
            onChange={({ target }) => setEmail(target.value)}
            required
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-neutral-600 shadow-sm rounded-full"
          />
        </div>
        <div>
          <label className="font-medium">Teléfono</label>
          <input
            type="text"
            value={ phone }
            onChange={({ target }) => setPhone(target.value)}
            required
            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-neutral-600 shadow-sm rounded-full"
          />
        </div>

        <input 
          type="submit" 
          value="Crear Orden"
          className='text-sm text-neutral-50 rounded-full px-5 py-3 flex items-center gap-3 bg-neutral-600 font-semibold cursor-pointer' />
      </form>
  </div>
  )
}

export default CheckoutForm
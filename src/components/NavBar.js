import React from 'react';
import CartWidget from './CartWidget'

import logo from './../assets/logo-tf.svg';

function NavBar() {
  return (
    <>
      <header className="flex items-center justify-between bg-neutral-100 py-4 mb-10">
        <div className='flex items-center space-x-8'>
          <a href='/'>
            <img src={logo} alt="TodoFútbol" />
          </a>

          <nav>
            <ul className='flex items-center'>
              <li className='mx-4'>
                <a href="/" className=' font-normal text-base text-teal-900 px-1'>Inicio</a>
              </li>
              <li className='mx-4'>
                <a href="/" className=' font-normal text-base text-teal-900 px-1'>Hombre</a>
              </li>
              <li className='mx-4'>
                <a href="/" className=' font-normal text-base text-teal-900 px-1'>Mujer</a>
              </li>
              <li className='mx-4'>
                <a href="/" className=' font-normal text-base text-teal-900 px-1'>Niños</a>
              </li>
            </ul>
          </nav>

        </div>

        <CartWidget 
          number={ 3 }
        />

      </header>
    </>
  )
}

export default NavBar;
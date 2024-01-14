import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

import logo from '../../assets/logo-tf.svg';

function NavBar() {
  return (
    <header className="flex justify-between items-center mb-12">
      <div className='flex items-center gap-12'>
        <NavLink to='/'>
          <img src={logo} alt="TodoFútbol" />
        </NavLink>
        <nav className="flex items-center">
          <ul className="flex items-center gap-8">
            <li className="font-normal text-base text-neutral-950">
              <NavLink to='/'>Inicio</NavLink>
            </li>
            <li className="font-normal text-base text-neutral-950">
              <NavLink to='/categoria/hombres'>Hombres</NavLink>
            </li>
            <li className="font-normal text-base text-neutral-950">
              <NavLink to='/categoria/mujeres'>Mujeres</NavLink>
            </li>
            <li className="font-normal text-base text-neutral-950">
              <NavLink to='/categoria/niños'>Niños</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-12">
        <CartWidget />
      </div>
    </header>
  )
}

export default NavBar;
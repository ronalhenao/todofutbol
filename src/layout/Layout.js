import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'

function Layout() {
  return (
    <div className="bg-neutral-50 px-10 py-2">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
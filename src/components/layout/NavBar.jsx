import { Link } from 'react-router-dom'

import CartWidget from './CartWidget'

function Navbar() {
  return (
    <nav className="navbar">
      <h2>PreEntrega-JV</h2>

      <div className="links-nav">
        <Link to="/">Inicio</Link>

        <Link to="/productos">
          Productos
        </Link>

        <Link to="/carrito">
          <CartWidget />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar

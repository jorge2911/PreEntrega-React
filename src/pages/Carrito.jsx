import { useContext } from 'react'

import { CartContext } from '../context/CartContext'

function Carrito() {
  const {
    carrito,
    eliminarProducto,
    vaciarCarrito,
    totalCarrito
  } = useContext(CartContext)

  if (carrito.length === 0) {
    return <h2>El carrito está vacío</h2>
  }

  return (
    <div className="carrito">
      <h1>Carrito de compras</h1>

      {carrito.map((prod) => (
        <div
          key={prod.id}
          className="card-carrito"
        >
          <img
            src={prod.imagen}
            alt={prod.nombre}
          />

          <div>
            <h2>{prod.nombre}</h2>

            <p>
              Precio: ${prod.precio}
            </p>

            <p>
              Cantidad: {prod.cantidad}
            </p>

            <p>
              Subtotal: $
              {prod.precio *
                prod.cantidad}
            </p>

            <button
              onClick={() =>
                eliminarProducto(prod.id)
              }
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <h2>Total: ${totalCarrito}</h2>

      <button onClick={vaciarCarrito}>
        Vaciar carrito
      </button>
    </div>
  )
}

export default Carrito

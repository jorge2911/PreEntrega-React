import { useContext, useState } from 'react'

import { CartContext } from '../../context/CartContext'

function ItemDetail({ producto }) {
  const { addToCart } = useContext(CartContext)

  const [cantidad, setCantidad] = useState(1)

  const manejarAgregar = () => {
    addToCart(producto, cantidad)

    alert('Producto agregado al carrito')
  }

  return (
    <div className="detalle-producto">
      <img
        src={producto.imagen}
        alt={producto.nombre}
      />

      <h2>{producto.nombre}</h2>

      <p>{producto.descripcion}</p>

      <p>Precio: ${producto.precio}</p>

      <p>Stock: {producto.stock}</p>

      <div className="contador">
        <button
          onClick={() =>
            setCantidad(cantidad - 1)
          }
          disabled={cantidad <= 1}
        >
          -
        </button>

        <span>{cantidad}</span>

        <button
          onClick={() =>
            setCantidad(cantidad + 1)
          }
        >
          +
        </button>
      </div>

      <button onClick={manejarAgregar}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemDetail

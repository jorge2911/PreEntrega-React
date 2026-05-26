import { createContext, useState } from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([])

  // Agregar producto
  const addToCart = (producto, cantidad) => {
    const existe = carrito.find(
      (prod) => prod.id === producto.id
    )

    if (existe) {
      const nuevoCarrito = carrito.map((prod) =>
        prod.id === producto.id
          ? {
              ...prod,
              cantidad:
                prod.cantidad + cantidad
            }
          : prod
      )

      setCarrito(nuevoCarrito)
    } else {
      setCarrito([
        ...carrito,
        { ...producto, cantidad }
      ])
    }
  }

  // Eliminar producto
  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter(
      (prod) => prod.id !== id
    )

    setCarrito(nuevoCarrito)
  }

  // Vaciar carrito
  const vaciarCarrito = () => {
    setCarrito([])
  }

  // Cantidad total
  const cantidadTotal = carrito.reduce(
    (acc, prod) => acc + prod.cantidad,
    0
  )

  // Precio total
  const totalCarrito = carrito.reduce(
    (acc, prod) =>
      acc + prod.precio * prod.cantidad,
    0
  )

  return (
    <CartContext.Provider
      value={{
        carrito,
        addToCart,
        eliminarProducto,
        vaciarCarrito,
        cantidadTotal,
        totalCarrito
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

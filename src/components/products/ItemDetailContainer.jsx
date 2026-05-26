import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    fetch('/productos.json')
      .then((respuesta) => respuesta.json())
      .then((data) => {
        const productoEncontrado = data.find(
          (prod) => prod.id === Number(id)
        )

        setProducto(productoEncontrado)
      })
      .catch((error) => console.log(error))
  }, [id])

  if (!producto) {
    return <h2>Cargando producto...</h2>
  }

  return <ItemDetail producto={producto} />
}

export default ItemDetailContainer
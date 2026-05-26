import { useEffect, useState } from 'react'

import ItemList from './ItemList'

function ItemListContainer() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('/productos.json')
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setProductos(data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <h2>Productos tecnológicos</h2>

      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer

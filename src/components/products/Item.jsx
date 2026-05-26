import { Link } from 'react-router-dom'

function Item({ id, nombre, precio, imagen }) {
  return (
    <div className="card-producto">
      <img src={imagen} alt={nombre} />

      <h3>{nombre}</h3>

      <p>${precio}</p>

      <Link to={`/producto/${id}`}>
        Ver detalle
      </Link>
    </div>
  )
}

export default Item

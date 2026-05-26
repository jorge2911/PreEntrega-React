import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-texto">
          <h1>
            Bienvenidos 

          </h1>

          <p>
            Tecnología, innovación y los
            mejores productos para vos.
          </p>

          <Link
            to="/productos"
            className="btn-home"
          >
            Ver productos
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop"
          alt="Tecnología"
        />
      </section>
    </div>
  )
}

export default Home
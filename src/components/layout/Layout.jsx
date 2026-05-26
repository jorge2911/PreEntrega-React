import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div>
      <Header />

      <NavBar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout

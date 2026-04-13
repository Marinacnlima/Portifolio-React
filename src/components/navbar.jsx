import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__content">

        <Link to="/">
          <p>MCabral</p>
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className={`navbar__links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
          <li><a href="#footer">Contato</a></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
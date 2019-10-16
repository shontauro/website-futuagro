import Link from 'next/link'

import './Header.scss'

const Header = () => (
  <header>
    <img src="/static/images/lg_futuagro_white.png" alt="futuagro-logo" />
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a>Acerca de</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)
export default Header

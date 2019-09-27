import Link from 'next/link'

import './Header.scss'

const Header = () => (
  <header>
    <img src="/static/images/lg_futuagro_white.png" alt="futuagro-logo" />
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Acerca de</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)
export default Header

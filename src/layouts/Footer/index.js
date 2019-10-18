import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWhatsapp,
  faFacebookF,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

import './Footer.scss'

import '@fortawesome/fontawesome-svg-core/styles.css'

const Footer = () => (
  <footer>
    <div className="contact-info-panel">
      <div className="contact-info-panel__column">
        <span>
          <FontAwesomeIcon
            className="contact-info-panel--margin-left"
            icon={faWhatsapp}
          />
          +57 311 5366601
        </span>
      </div>
      <div className="contact-info-panel__column">
        <span>Síguenos en nuestras redes sociales</span>
        <FontAwesomeIcon
          className="contact-info-panel--margin-w"
          icon={faFacebookF}
        />
        <FontAwesomeIcon
          className="contact-info-panel--margin-w"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          className="contact-info-panel--margin-w"
          icon={faInstagram}
        />
      </div>
    </div>

    <div className="copyright-panel">
      <span>© 2019 Futuagro.</span>
    </div>
  </footer>
)
export default Footer

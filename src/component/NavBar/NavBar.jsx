import { moveToPositionPage } from '.'
import { Home, Megaphone, Tools, WhatsApp } from '../svg'
import './NavBar.scss'

const navLogo = `${process.env.PUBLIC_URL}/static/CLF_logotipo.png`
const msg = 'Hola Cristian, me gustaría que agendemos una reunión '
const number = 2616824699

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <ul>
        <li>
          <span onClick={() => moveToPositionPage("inicio")}>
            <Home />
            <p>Inicio</p>
          </span>
        </li>
        <li>
          <span onClick={() => moveToPositionPage("Services")}>
            <Tools />
            <p>Servicios</p>
          </span>
        </li>
        <li className='NavBar-logo'>
          <img src={navLogo} alt="logo CLF" />
        </li>
        <li>
          <span onClick={() => moveToPositionPage("ContactForm")}>
            <Megaphone />
            <p>Contáctame</p>
          </span>
        </li>
        <li>
          <a
            href={`https://wa.me/${number}?text=${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            className='NavBar-Whatsapp'
          >
            <WhatsApp />
            <p>WhatsApp</p>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
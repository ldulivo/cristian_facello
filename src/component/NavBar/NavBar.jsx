import { Home, Megaphone, Tools, WhatsApp } from '../svg'
import './NavBar.scss'

const navLogo = `${process.env.PUBLIC_URL}/static/CLF_logotipo.png`
const msg = 'Hola Cristian, me gustaría que agendemos una reunión '
const number = 2616824699

const NavBar = () => {
  console.log(process.env.PUBLIC_URL)
  return (
    <nav className='NavBar'>
      <ul>
        <li>
          <a href="#inicio">
            <Home />
            <p>Inicio</p>
          </a>
        </li>
        <li>
          <a href="#Services">
            <Tools />
            <p>Servicios</p>
          </a>
        </li>
        <li className='NavBar-logo'>
          <img src={navLogo} alt="logo CLF" />
        </li>
        <li>
          <a href="#ContactForm">
            <Megaphone />
            <p>Contáctame</p>
          </a>
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
/* Más de 20 años brindando compromiso, seriedad y calidad a mis clientes */
/* Climatización y Mantenimiento */
import './Header.scss'
/* import headerVideo from '../../assets/videos/background.mp4' */
/* import imgLogo from '../../assets/img/c2237b45e00f6f63b6dbb8235b9fe327.png' */
import { CurveSeparator } from '../svg'
import Carousel from '../Carousel'

const data = [
  {
    img: `${process.env.PUBLIC_URL}/static/aire01.png`,
    h1: 'Aires Acondicionados',
    li1: 'Instalación',
    li2: 'Reparación',
    li3: 'Presupuesto',
    transform: 0,
    opacity: 1,
    zindex: 2
  },
  {
    img: `${process.env.PUBLIC_URL}/static/camarafrio01.png`,
    h1: 'Cámara Frigorífica',
    li1: 'Armado',
    li2: 'a medida',
    li3: 'Reparación',
    transform: 1,
    opacity: 1,
    zindex: 2
  },
  {
    img: `${process.env.PUBLIC_URL}/static/electricista.png`,
    h1: 'Electricista',
    li1: 'Instalación',
    li2: 'Reparación',
    li3: 'Fugas',
    transform: 2,
    opacity: 1,
    zindex: 2
  },
  {
    img: `${process.env.PUBLIC_URL}/static/plomerogas.png`,
    h1: 'Plomero Gasista',
    li1: 'Cañerias',
    li2: 'Termos solar',
    li3: 'Chequeos',
    transform: 3,
    opacity: 1,
    zindex: 2
  },
  {
    img: `${process.env.PUBLIC_URL}/static/soldadura.png`,
    h1: 'Arreglos en general',
    li1: 'Soldadura',
    li2: 'Arreglos',
    li3: 'Presupuesto',
    transform: 4,
    opacity: 1,
    zindex: 2
  },
]
const Header = () => {
  return (
    <section className="Header">
      <section>
          <h1>Cristian Facello</h1>
          <Carousel data={data}/>
      </section>
      <CurveSeparator SVGstyle='Header-CurveSeparator' />
    </section>
  )
}

export default Header
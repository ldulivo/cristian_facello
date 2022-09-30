/* Más de 20 años brindando compromiso, seriedad y calidad a mis clientes */
/* Climatización y Mantenimiento */
import './Header.scss'
/* import headerVideo from '../../assets/videos/background.mp4' */
import imgLogo from '../../assets/img/c2237b45e00f6f63b6dbb8235b9fe327.png'
import { CurveSeparator } from '../svg'
import Carousel from '../Carousel'

const data = [
  {
    img: 'static/c2237b45e00f6f63b6dbb8235b9fe327.png'
  }
]
const Header = () => {
  return (
    <section className="Header">
      <section>
          <h1>Cristian Facello</h1>
          <Carousel data={data}/>
          {/* <span className='Carousel'>
            <div className="Header-logo">
              <img src={imgLogo} alt="Logo Cristian Facello" />
            </div>
            <ul>
              <li>Climatización</li>
              <li>Electricidad</li>
              <li>Plomería</li>
              <li>Otros</li>
            </ul>
          </span> */}
      </section>
      <CurveSeparator SVGstyle='Header-CurveSeparator' />
      {/* <div className="Header-background--content">
        <video
          src={headerVideo}
          autoPlay
          muted
          loop
          className="Header-background--video">
          </video>
      </div> */}
    </section>
  )
}

export default Header
import './Header.scss'
import Carousel from '../Carousel'
import { Waves } from '../svg'

const logotipoTransparent = `${process.env.PUBLIC_URL}/static/CLF_logotipo_transparent.png`
const Header = () => {
  return (
    <section className="Header" id='inicio'>
      <section>
        <img src={logotipoTransparent} alt="Logotipo" className="Header-logotipo" />
        <h1>Cristian Facello</h1>
        <Carousel>
          <div>
            <h2>Camaras frigoríficas</h2>
            <ul>
              <li>Construcción a medida.</li>
              <li>Instalación.</li>
              <li>Reparación.</li>
            </ul>
          </div>
          <div>
            <h2>Heladeras comerciales</h2>
            <ul>
              <li>Reparación.</li>
              <li>Presupuestos.</li>
            </ul>
          </div>
          <div>
            <h2>Heladeras familiares</h2>
            <ul>
              <li>Reparación.</li>
              <li>Presupuestos.</li>
            </ul>
          </div>
          <div>
            <h2>Electricidad</h2>
            <ul>
              <li>Tableros</li>
              <li>Fugas</li>
              <li>Chequeos</li>
            </ul>
          </div>
        </Carousel>
      </section>

      <Waves />
    </section>
  )
}

export default Header
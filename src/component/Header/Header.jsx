import './Header.scss'
import Carousel from '../Carousel'
import { Waves } from '../svg'

const Header = () => {
  return (
    <section className="Header">
      <section>
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
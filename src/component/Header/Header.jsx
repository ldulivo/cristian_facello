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
            <h2>Aires acondicionados</h2>
            <ul>
              <li>Instalación.</li>
              <li>Reparación.</li>
              <li>Presupuestos.</li>
            </ul>
          </div>
          <div>
            <h2>Mantenimiento en general</h2>
            <ul>
              <li>Electricidad y tableros eléctricos, fugas, etc.</li>
              <li>Plomero gasista, Termo solares, chequeos.</li>
              <li>Soldadura.</li>
            </ul>
          </div>
        </Carousel>
      </section>

      <Waves />
    </section>
  )
}

export default Header
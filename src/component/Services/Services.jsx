import './Services.scss'
import cardCamaraFrio from '../../assets/img/cardCamaraFrio.jpg'
import cardHeladeras from '../../assets/img/cardHeladeras.jpg'
import cardAires from '../../assets/img/cardAires.jpg'
import cardElectricidad from '../../assets/img/cardElectricidad.jpg'
import cardTermoSolar from '../../assets/img/cardTermoSolar.jpg'


const Services = () => {
  return (
    <div className="Services">

      <h2>Servicios</h2>
      <section>

        <div className="Services-card">
          <header>
            <img src={cardCamaraFrio} alt="cardCamaraFrio" />
          </header>
          <main>
            <h3>Camaras frigoríficas</h3>
            <p>Construcción e instalación desde cero totalmente a medida según la necesidad del cliente. Se realizan reparaciones y mantenimiento de cámaras frigoríficas.</p>
          </main>
        </div>

        <div className="Services-card">
          <header>
            <img src={cardHeladeras} alt="cardHeladeras" />
          </header>
          <main>
            <h3>Heladeras</h3>
            <p>Se realizan todo tipo de tareas de mantenimiento y reparación de heladeras comerciales como así también sobre heladeras de hogar.</p>
          </main>
        </div>

        <div className="Services-card">
          <header>
            <img src={cardAires} alt="cardAires" />
          </header>
          <main>
            <h3>Aires acondicionados</h3>
            <p>Instalación de aires acondicionados industriales y de hogar. Reparación y mantenimiento.</p>
          </main>
        </div>

        <div className="Services-card">
          <header>
            <img src={cardElectricidad} alt="cardElectricidad" />
          </header>
          <main>
            <h3>Electricidad</h3>
            <p>Instalación de tendido eléctrico y tableros eléctricos. Detección de fugas y mantenimiento preventivo.</p>
          </main>
        </div>

        <div className="Services-card">
          <header>
            <img src={cardTermoSolar} alt="cardTermoSolar" />
          </header>
          <main>
            <h3>Mantenimiento en general</h3>
            <p>Servicio de plomería, gasista, termotanques y termotanques solares, soldadura, etc.</p>
          </main>
        </div>

      </section>
    </div>
  )
}

export default Services
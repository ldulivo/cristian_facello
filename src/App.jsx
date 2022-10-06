import Header from './component/Header';
import Parallax from './component/Parallax';
import backgroundTrayectoria from './assets/img/backgroundTrayectoria.jpg'
import Services from './component/Services';
import ContactForm from './component/ContactForm';
import Dialog from './component/Dialog';
import NavBar, { moveToPositionPage } from './component/NavBar';

function App() {
  const ParallaxMan = `${process.env.PUBLIC_URL}/static/a.webp`
  const ParallaxAirConditioner = `${process.env.PUBLIC_URL}/static/camarafrio2.png`
  return (
    <div className="App">
      <Header />
      <Parallax>
        <div className="box">
          <div className="text-box">
            <h2>Más de 20 años de trayectoria junto a mis clientes</h2>
            <h3>Compromiso, seriedad y calidad</h3>
            <button onClick={() => moveToPositionPage("ContactForm")} className="btn">Contáctame</button>
          </div>
          {/* <img src={backgroundTrayectoria} alt="background" /> */}
          <img src={ParallaxMan} alt="" className="Parallax-man" />
          <img src={ParallaxAirConditioner} alt="" className="Parallax-air-conditioner" />
        </div>
      </Parallax>
      <Services />
      <ContactForm />
      <Dialog />
      <NavBar />
    </div>
  );
}

export default App;

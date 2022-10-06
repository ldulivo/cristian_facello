import Header from './component/Header';
import Parallax from './component/Parallax';
import backgroundTrayectoria from './assets/img/backgroundTrayectoria.jpg'
import Services from './component/Services';
import ContactForm from './component/ContactForm';
import Dialog from './component/Dialog';
import NavBar from './component/NavBar';

function App() {
  return (
    <div className="App">
      <Header />
      <Parallax>
        <div className="box">
          <h2>Más de 20 años de trayectoria junto a mis clientes</h2>
          <h3>Compromiso, seriedad y calidad</h3>
          <a href='#ContactForm' className="btn">Contáctame</a>
          <img src={backgroundTrayectoria} alt="background" />
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

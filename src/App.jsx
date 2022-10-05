import Header from './component/Header';
import Parallax from './component/Parallax';
import { CurveSeparator } from './component/svg';

function App() {
  return (
    <div className="App">
      <Header />
      <Parallax>
        <div className="box">
          <h2>Más de 20 años junto a mis clientes</h2>
          <h3>Compromiso, seriedad y calidad</h3>
          <div className="btn">Contáctame</div>
        </div>
        <CurveSeparator />
      </Parallax>
      <div className="relleno">

      </div>
    </div>
  );
}

export default App;

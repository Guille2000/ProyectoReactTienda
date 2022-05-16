import { BrowserRouter } from 'react-router-dom';
import GlobalStateContenxt from './Context/GlobalStateContenxt';
import Rutas from './routes/Rutas';
import './scss/app.scss';


function App() {
  return (
      <>
      <GlobalStateContenxt>
      <Rutas/>
      </GlobalStateContenxt>
      </>

  

  );
}



export default App;
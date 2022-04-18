import Navbar from './componentes/Navbar/Navbar';
import Cartwidget from './componentes/Cartwidget/Cartwidget';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Descuentos from './componentes/Descuentos/Descuentos';
import Cursos from './componentes/Cursos/Cursos';
import './scss/app.scss';


function App() {
  return (
    <div>
      <Navbar/>
      <Descuentos/>
      <ItemListContainer/>
    </div>

  

  );
}



export default App;
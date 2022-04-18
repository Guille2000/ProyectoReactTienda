import Navbar from './componentes/Navbar/Navbar';
import Cartwidget from './componentes/Cartwidget/Cartwidget';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Descuentos from './componentes/Descuentos/Descuentos';
import Cursos from './componentes/Cursos/Cursos';
import Producto from './componentes/Producto/Producto';
import './scss/app.scss';
import Descripcion from './componentes/Descripcion/Descripcion';
import Contenido from './componentes/Contenido/Contenido';


function App() {
  return (
    <div>
      <Navbar/>
      <Descuentos/>
      <ItemListContainer/>
      <Producto/>
      <Descripcion/>
      <Contenido/>
    </div>

  

  );
}



export default App;
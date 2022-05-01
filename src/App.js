import Navbar from './componentes/Navbar/Navbar';
import './scss/app.scss';
import Descuentos from './componentes/Descuentos/Descuentos';
import Contenido from './componentes/Contenido/Contenido';
import Caracteristicas from './componentes/Caracteristicas/Caracteristicas';
import Cursos from './componentes/Cursos/Cursos';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div>
      <Navbar/>
      <Descuentos/>
      <Cursos/>
      <ItemDetailContainer/>
      <Contenido/>
      <Caracteristicas/>
    </div>

  

  );
}



export default App;
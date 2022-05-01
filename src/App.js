import Navbar from './componentes/Navbar/Navbar';
import './scss/app.scss';
import Descuentos from './componentes/Descuentos/Descuentos';
import Contenido from './componentes/Contenido/Contenido';
import Caracteristicas from './componentes/Caracteristicas/Caracteristicas';
import Cursos from './componentes/Cursos/Cursos';



function App() {
  return (
    <div>
      <Navbar/>
      <Descuentos/>
      <Cursos/>
      <Contenido/>
      <Caracteristicas/>
    </div>

  

  );
}



export default App;
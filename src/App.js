import Navbar from './componentes/Navbar/Navbar';
import Cartwidget from './componentes/Cartwidget/Cartwidget';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Descuentos from './componentes/Descuentos/Descuentos';
import Cursos from './componentes/Cursos/Cursos';
import Item from './componentes/Item/Item';
import './scss/app.scss';
import Descripcion from './componentes/Descripcion/Descripcion';
import Contenido from './componentes/Contenido/Contenido';
import Caracteristicas from './componentes/Caracteristicas/Caracteristicas';
import curso1 from './img/curso_6.jpg'
import estrellas from './img/estrellas.png';



function App() {
  return (
    <div>
      <Navbar/>
      <Descuentos/>
      <ItemListContainer/>
      {/* <Item
        img={curso1}
        h2={'Curso de JavaScript moderno creando +40 proyectos'}
        parrafo={'Aprende el Lenguaje de Programación Web más popular paso a paso con +15 Proyectos - Incluye Proyecto MERN Full Stack'}
        puntaje={'4.07'}
        estrellitas={estrellas}
        calificacion={"10.867 calificacion"}
        creador={'Creado por'}
        autor={'Guillermo Mabel'}
        actualizacion={'Última actualización: 3/2022'}
        idioma={'Español'}
        precio={'10$USD'}

      /> */}
      <Descripcion/>
      <Contenido/>
      <Caracteristicas/>
    </div>

  

  );
}



export default App;
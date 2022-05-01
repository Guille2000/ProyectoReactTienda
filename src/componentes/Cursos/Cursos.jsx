import React from 'react'
import Cards from '../Contenedor/Contenedor'
import '../../scss/app.scss'
import curso1 from '../../img/curso_6.jpg';
import estrellas from '../../img/estrellas.png';
import Contenedor from '../Contenedor/Contenedor';




const Cursos = () => {
  return (
    <section className="cursos container-xl mt-5 pt-5">
      <h3>Elige tu curso preferido</h3>
      <p className="fs-4">Entre los cursos disponibles, con contenido actualizado</p>

      <nav className="nav masonry-filter">
        <li className="nav-item">
          <a className="nav-link text-dark">Javascript</a>
        </li>
        <li className="nav-item">
          <a  className="nav-link text-dark">UI Y UIX</a>
        </li>

        <li className="nav-item">
          <a  className="nav-link text-dark">Desarrollo Web Completo</a>
        </li>

        
      </nav>
      <Contenedor/>

    </section>
  )
}

export default Cursos
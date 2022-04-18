import React from 'react'
import Cards from '../Cards/Cards'
import '../../scss/app.scss'


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
      <Cards/>

    </section>
  )
}

export default Cursos
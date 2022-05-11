import React from 'react'
import '../../scss/app.scss'
import Contenedor from '../Contenedor/Contenedor'
import {NavLink} from 'react-router-dom'


const Cursos = () => {
  return (
    <section className="cursos container-xl mt-5 pt-5">
      <h3>Elige tu curso preferido</h3>
      <p className="fs-4">Entre los cursos disponibles, con contenido actualizado</p>

      <nav className="nav masonry-filter">
        <li className="nav-item">
          <NavLink to="/category/javascript" className="nav-link text-dark">Javascript</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/diseño"  className="nav-link text-dark">UI Y UIX</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/category/desarrollo"  className="nav-link text-dark">Desarrollo Web Completo</NavLink>
        </li>

        
      </nav>
      <Contenedor/>

    </section>
  )
}

export default Cursos
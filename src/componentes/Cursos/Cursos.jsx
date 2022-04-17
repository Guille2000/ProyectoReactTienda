import React from 'react'
import Cards from '../Cards/Cards'
import '../styles/cursos.css'


const Cursos = () => {
  return (
    <section className="cursos container-xl mt-5 pt-5">
      <h3>Elige tu curso tu curso preferido</h3>
      <p className="fs-4">Entre los cursos disponibles, con contenido actualizado</p>

      <nav className="nav masonry-filter">
        <li className="nav-item">
          <a className="nav-link text-dark" data-filter=".javascript">Javascript</a>
        </li>
        <li className="nav-item">
          <a  className="nav-link text-dark" data-filter=".react">React</a>
        </li>

        <li className="nav-item">
          <a  className="nav-link text-dark" data-filter=".php">PHP</a>
        </li>

        
      </nav>
      <div class="masonry-container row mx-n4 mt-n6">
      <Cards/>
      </div>

    </section>
  )
}

export default Cursos
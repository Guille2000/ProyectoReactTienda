import React,{useState} from 'react'
import '../../scss/app.scss'
import Contenedor from '../Contenedor/Contenedor'
import {NavLink} from 'react-router-dom'


const Cursos = () => {
  const [curso,setCurso] = useState(null)
  return (
    <section className="cursos container-xl mt-5 pt-5">
      <h3>Elige tu curso preferido</h3>
      <p className="fs-4">Entre los cursos disponibles, con contenido actualizado</p>

      <nav className="nav masonry-filter">
        <li className="nav-item">
          <button className="nav-link text-dark"  onClick={()=>setCurso(null)}>Todos</button>
          <button onClick={()=>setCurso('javascript')}className="nav-link text-dark">Javascript</button>
        </li>
        <li className="nav-item">
          <button onClick={()=>setCurso('diseño')}  className="nav-link text-dark">UI Y UIX</button>
        </li>

        <li className="nav-item">
          <button onClick={()=>setCurso('desarrollo')}  className="nav-link text-dark">Desarrollo Web Completo</button>
        </li>

        
      </nav>
      <Contenedor curso={curso}/>

    </section>
  )
}

export default Cursos
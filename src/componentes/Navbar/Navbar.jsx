import React from 'react'
import Cartwidget from '../Cartwidget/Cartwidget'
import '../../scss/app.scss'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <header className="header container-fluid d-lg-block">
      <div className="d-flex justify-content-between align-items-center p-3 shadow-sm">
        <p className="fs-3 fw-bold m-0 me-4"> <span className="text-primary">u</span>niversidad </p>

        <form className="flex-grow-1">
          <input
            type="search"
            className="form-control bg-light d-none d-md-block"
            placeholder="Busca cualquier cosa"
          />
        </form>
        <nav className="d-md-flex d-none" id="navegacion">
          <NavLink to="/Business" className="nav-link text-dark text-decoration-none fw-lighter">U For Business</NavLink>
          <NavLink to="/" className="nav-link text-dark text-decoration-none fw-lighter">Inicio</NavLink>
          <NavLink to="/Aprendizaje" className="nav-link text-dark text-decoration-none fw-lighter">Mi aprendizaje</NavLink>

        </nav>

         <Cartwidget/>

      
      </div>
    </header>
  )
}

export default Navbar

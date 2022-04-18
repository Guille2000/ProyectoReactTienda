import React from 'react';
import Cartwidget from '../Cartwidget/Cartwidget';
import '../../scss/app.scss'
import Producto from '../Producto/Producto';



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
          <a href="#" className="nav-link text-dark text-decoration-none">U For Business</a>
          <a href="#" className="nav-link text-dark text-decoration-none">Enseña en U</a>
          <a href="#" className="nav-link text-dark text-decoration-none">Mi aprendizaje</a>

        </nav>

         <Cartwidget/>

      
      </div>
    </header>
  )
}

export default Navbar

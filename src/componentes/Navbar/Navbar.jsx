import React from 'react';
import carrito from '../../img/carrito-de-compras.png';
import heart from '../../img/heart.png';
import notification from '../../img/notification.png';
import user from '../../img/user.png';




const Navbar = () => {
  return (
    <header className="header container-fluid d-lg-block">
      <div className="d-flex justify-content-between align-items-center p-3 shadow-sm">
        <p className="fs-3 fw-bold m-0 me-4"> <span className="text-primary">u</span>niversidad </p>

        <form className="flex-grow-1">
          <input
            type="search"
            className="form-control bg-light"
            placeholder="Busca cualquier cosa"
          />
        </form>

        <nav className="d-flex">
          <a href="#" className="nav-link text-dark text-decoration-none">U For Business</a>
          <a href="#" className="nav-link text-dark text-decoration-none">Enseña en U</a>
          <a href="#" className="nav-link text-dark text-decoration-none">Mi aprendizaje</a>

        </nav>

        <nav className="d-flex  gap-3">
          <a href="#"><img src={carrito} alt="" /></a>
          <a href="#"><img src={heart} alt="" /></a>
          <a href="#"><img src={notification} alt="" /></a>
          <a href="#"><img src={user} alt="" /></a>



        </nav>
      </div>
    </header>
  )
}

export default Navbar
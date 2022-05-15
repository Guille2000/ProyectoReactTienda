import React from 'react';
import carrito from '../../img/carrito-de-compras.png';
import heart from '../../img/heart.png';
import notification from '../../img/notification.png';
import user from '../../img/user.png';
import { Link } from 'react-router-dom';


const Cartwidget = () => {
  return (

    <nav className="d-flex  gap-3">
    <Link to="/Cart"><span>0</span><img src={carrito} alt="" /></Link>
    <a href="#"><img src={heart} alt="" /></a>
    <a href="#"><img src={notification} alt="" /></a>
    <a href="#"><img src={user} alt="" /></a>
    </nav>


  )
}

export default Cartwidget
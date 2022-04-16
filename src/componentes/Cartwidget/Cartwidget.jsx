import React from 'react';
import carrito from '../../img/carrito-de-compras.png';
import heart from '../../img/heart.png';
import notification from '../../img/notification.png';
import user from '../../img/user.png';

const Cartwidget = () => {
  return (

    <nav className="d-flex  gap-3">
    <a href="#"><img src={carrito} alt="" /></a>
    <a href="#"><img src={heart} alt="" /></a>
    <a href="#"><img src={notification} alt="" /></a>
    <a href="#"><img src={user} alt="" /></a>
    </nav>


  )
}

export default Cartwidget
import React, { useContext } from 'react';
import carrito from '../../img/carrito-de-compras.png';
import heart from '../../img/heart.png';
import notification from '../../img/notification.png';
import user from '../../img/user.png';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalStateContenxt';



const Cartwidget = () => {
  const {cantidad} = useContext(GlobalContext)
  return (

    <nav className="d-flex  gap-3">
    <Link to="/Cart"><span>{cantidad}</span><img src={carrito} alt="" /></Link>
    <a href="#"><img src={heart} alt="" /></a>
    <a href="#"><img src={notification} alt="" /></a>
    <a href="#"><img src={user} alt="" /></a>
    </nav>


  )
}

export default Cartwidget
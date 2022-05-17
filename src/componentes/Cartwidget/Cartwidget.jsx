import React, { useContext } from 'react';
import carro from '../../img/carrito-de-compras.png';
import heart from '../../img/heart.png';
import notification from '../../img/notification.png';
import user from '../../img/user.png';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalStateContenxt';



const Cartwidget = () => {
  const {carrito } = useContext(GlobalContext) //el nombre del context a consumir, el proveedor

  return (
    <nav className="d-flex  gap-3">
    <Link to="/Cart"><span className="text-primary">{carrito.length}</span><img src={carro} alt="Cantidad de productos que tiene en el carro" /></Link>
    <a href="#"><img src={heart} alt="" /></a>
    <a href="#"><img src={notification} alt="" /></a>
    <a href="#"><img src={user} alt="" /></a>
    </nav>


  )
}

export default Cartwidget
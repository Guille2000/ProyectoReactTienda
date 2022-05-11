import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalStateContenxt'
import ItemCount from '../ItemCount/ItemCount'

const Cart = () => {
  const {carrito} = useContext(GlobalContext)
  return (
    <ul>
       {carrito.length > 0 ? carrito.map((item, index) => {
        <li key={index}>{item.name}</li>
      }) : <h1>No hay productos</h1>}
    </ul>
  )
}

export default Cart
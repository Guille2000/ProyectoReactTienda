import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalStateContenxt'

const Cart = () => {
  const {carrito} = useContext(GlobalContext) //el nombre del context a consumir, el proveedor
  console.log(carrito)
  return (
    <ul>
       {carrito.length > 0 ? carrito.map((prod, index) => { 
         return(
        <li key={index}>{prod.img}</li>
      )}) : <h1>No hay productos</h1>}
      
    </ul>
  )
}

export default Cart
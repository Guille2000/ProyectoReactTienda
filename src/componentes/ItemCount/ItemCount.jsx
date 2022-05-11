import React from 'react'
import { useState } from 'react'
import { createRoutesFromChildren, Link } from 'react-router-dom'


const ItemCount = ({manejarClick, stock}) => {


  const [cantidad, setcantidad] = useState(1)

  function sumar(){
    cantidad < 5 ? setcantidad(cantidad + 1) : setcantidad(cantidad)
  }
  function restar(){
   cantidad > 1 ? setcantidad (cantidad - 1) : setcantidad(cantidad)

  }



  return (
    <>
    <Link to="" onClick={() => manejarClick(cantidad)}  className="btn btn-success w-100 text-light">Añadir a la cesta</Link>

    <p className="text-white text-center fs-5"> 
    <i onClick={restar}  className="bi bi-dash-circle mx-3"></i>
      La cantidad es {cantidad}      
      <i onClick={sumar} className="bi bi-plus-circle mx-3"></i> 
      </p>


    </>

  )
}

export default ItemCount
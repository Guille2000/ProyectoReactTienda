import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemCount = ({manejarClick}) => {

  const [stock, setStock] = useState(1)

  function sumar(){
    stock < 5 ? setStock(stock + 1) : setStock(stock)
  }
  function restar(){
   stock > 1 ? setStock (stock - 1) : setStock(stock)

  }



  return (
    <>
    <Link to="" onClick={manejarClick} className="btn btn-success w-100 text-light">Añadir a la cesta</Link>

    <p className="text-white text-center fs-5"> 
    <i onClick={restar}  className="bi bi-dash-circle mx-3"></i>
      La cantidad es {stock}      
      <i onClick={sumar} className="bi bi-plus-circle mx-3"></i> 
      </p>


    </>

  )
}

export default ItemCount
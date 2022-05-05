import React from 'react'
import { useState } from 'react'

const ItemCount = () => {

  const [stock, setStock] = useState(1)

  function sumar(){
    stock < 5 ? setStock(stock + 1) : setStock(stock)
  }
  function restar(){
   stock > 1 ? setStock (stock - 1) : setStock(stock)

  }



  return (
    <>
    <a className="btn btn-success w-100 text-light"href="">Añadir a la cesta</a>

    <p className="text-white text-center fs-5"> 
    <i onClick={restar}  className="bi bi-dash-circle mx-3"></i>
      La cantidad es {stock}      
      <i onClick={sumar} className="bi bi-plus-circle mx-3"></i> 
      </p>

    </>

  )
}

export default ItemCount
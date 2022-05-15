import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalStateContenxt'
import {Link} from 'react-router-dom'

const Cart = () => {
  const { carrito, eliminarProducto, vaciarCart } = useContext(GlobalContext) //el nombre del context a consumir, el proveedor
    console.log(carrito.cantidad)

  return (
    <>
      {carrito.length > 0 ? carrito.map((prod, index) => {

        return (
          <section className="mt-5" key={index}>
            <div className="text-center">
              <img src={prod.img} alt="Imagen del producto" style={{ width: '50%' }} />
            </div>
            <div className="texto mt-5 p-3">
              <h2 className="text-dark fs-3 fw-700 programacion">{prod.h2}</h2>
              <p className="text-dark fs-5 fw-400">{prod.parrafo}</p>
              <div className="d-flex align-items-center">
                <p className="m-0 me-2 puntaje fw-bold text-secondary">
                  {prod.puntaje}
                </p>
                <img className="me-2 calificacion" src={prod.estrellitas} alt="calificacion estrellas" />
                <p className="m-0 total text-primary">{prod.calificacion}</p><p className="text-dark m-0 mx-2">{prod.estudiantes}</p>
              </div>
              <p className="precio fw-bold text-dark">{prod.creador} <span className="original fw-normal text-primary">{prod.autor}</span> </p>
              <p className="text-dark m-0"><i class="bi bi-patch-exclamation m-1"></i>{prod.actualizacion}</p>
              <p className="text-dark m-0"> <i class="bi bi-badge-cc m-1"></i>{prod.idioma}</p>
              <p>Cantidad: {prod.cantidad}</p>
              <h3 className="fs-1 text-dark mt-3 fw-bold">{prod.precio}</h3>
              <button onClick={() => eliminarProducto(prod.id)}>X</button>
            </div>

          </section>
        )
      }) :
        <h1>No hay productos</h1> 
      }

{carrito.length > 0 ? (
               <button onClick={() => vaciarCart(carrito)}>Vaciar carrito</button>

                ) : (
                  <Link to="/">Volver</Link>
                )}
    </>
  )
}

export default Cart
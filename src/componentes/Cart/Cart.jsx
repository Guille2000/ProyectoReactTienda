import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalStateContenxt'
import {Link} from 'react-router-dom'
import '../../scss/app.scss'


const Cart = () => {
  const {carrito, eliminarProducto, vaciarCart, total } = useContext(GlobalContext) //el nombre del context a consumir, el proveedor
    console.log(carrito.cantidad)

    

  return (
    <>
      {carrito.length > 0 ? carrito.map((prod, index) => {

        return (
          
          <section className="mt-5 d-md-flex align-items-center" key={index}>
            <div className="contenedor-texto">
            <div className="">
              <img src={prod.img} alt="Imagen del producto" className="img-fluid mx-2" style={{ width: '30%' }} />
            </div>
            <div className="mt-2 mx-2">
              <h2 className="text-dark fw-700 h2-carrito">{prod.h2}</h2>
              <p className="text-dark descripcion-carrito fw-400">{prod.parrafo}</p>
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
              <h3 className="fs-5 text-dark mt-3 fw-bold">Precio:{prod.precio}$</h3>
            </div>
            </div>
            <div className="contenedor-compra">
            <h5>Resumen del pedido:</h5>
            <p className="text-primary">Cantidad: {prod.cantidad}</p>
            <p className="text-danger">El subtotal es: {prod.precio}$</p>
            <p className="text-warning">El total a pagar es: {total}$</p>

            <button className="btn btn-warning text-dark" onClick={() => eliminarProducto(prod.id)  }><i className="mx-2 bi bi-x-lg"></i>Eliminar Curso</button>
         
            
            </div>
          </section>
        )
      }) :
        <h4 className="text-center mt-3">¡No agregaste ningun curso! No dudes en agilizar tu aprendizaje.</h4> 
      }

{carrito.length > 0 ? (
                <div className="text-center">
               <button className="btn btn-danger" onClick={() => vaciarCart(carrito)}><i className="bi bi-trash mx-2"></i>Vaciar carrito</button>
               <button className="btn terminar-btn text-white d-block"><i className="mx-2 bi bi-bag-check"></i>Terminar Compra</button>
               </div>
                ) : (
                  <div className="text-center">
                  <Link className="btn btn-primary mt-2" to="/"><i className="mx-1 bi bi-arrow-left"></i>Volver</Link>
                  </div>
                )}
    </>
  )
}

export default Cart
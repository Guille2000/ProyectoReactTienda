import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalStateContenxt'

const ItemDetail = ({ productos: {id,stock, img, h2, parrafo, cantidad, puntaje, estrellitas, calificacion, estudiantes, creador, autor, actualizacion, idioma, precio } }) => {

    const { carrito, agregarCarrito } = useContext(GlobalContext)

    useEffect(() => {
      setState({id, img, h2, parrafo, cantidad, puntaje, estrellitas, calificacion, estudiantes, creador, autor, actualizacion, idioma, precio })
    }, [img])

    const [state, setState] = useState({})
       

    const [cantidadComprada, setCantidadComprada] = useState(0)
    const quantityToAdd = (cantidad) => {
        setCantidadComprada(cantidad)
        carrito.cantidad = cantidad
        console.log(carrito.cantidad)
    }

    const itemCarro = {h2:h2, img:img, 
        parrafo:parrafo, 
        puntaje:puntaje, 
        estrellitas:estrellitas, 
        calificacion:calificacion, 
        estudiantes:estudiantes, 
        creador:creador, 
        autor:autor, 
        actualizacion:actualizacion, 
        idioma:idioma, 
        precio:precio,
        cantidad:cantidadComprada}



    return (

        <section className="fondo">
            <div className="text-center">
                <img src={img} alt="Producto imagen" />
            </div>
            <div className="texto mt-5 p-3">
                <h2 className="text-light fs-3 fw-700 programacion">{h2}</h2>
                <p className="text-light fs-5 fw-400">{parrafo}</p>
                <div className="d-flex align-items-center">
                    <p className="m-0 me-2 puntaje fw-bold text-secondary">
                        {puntaje}
                    </p>
                    <img className="me-2 calificacion" src={estrellitas} alt="calificacion estrellas" />
                    <p className="m-0 total text-primary">{calificacion}</p><p className="text-light m-0 mx-2">{estudiantes}</p>
                </div>
                <p className="precio fw-bold text-light">{creador} <span className="original fw-normal text-primary">{autor}</span> </p>
                <p className="text-light m-0"><i class="bi bi-patch-exclamation m-1"></i>{actualizacion}</p>
                <p className="text-light m-0"> <i class="bi bi-badge-cc m-1"></i>{idioma}</p>

                <h3 className="fs-1 text-light mt-3 fw-bold">{precio}</h3>
                {cantidadComprada > 0 ? (
                    <Link to={'/cart'} onClick={() => agregarCarrito(itemCarro, cantidad)} className='btn btn-success text-light' >Terminar Compra</Link>
                ) : (
                    <ItemCount  manejarClick={quantityToAdd}
                        stock={stock}
                    />
                )}
            </div>
        </section>
    )
}


export default ItemDetail
import React from 'react'
import ItemDetail from '../../ItemDetail/ItemDetail'

const ItemListDetails = ({productos}) => {
    return (
        <>
          {
            productos.length > 0 ? productos.map(producto=> (
              <ItemDetail
                img={producto.img}
                h2= {producto.h2}
                parrafo={producto.parrafo}
                puntaje = {producto.puntaje}
                estrellitas = {producto.estrellitas}
                creador = {producto.creador}
                autor = {producto.autor}
                actualizacion = {producto.actualizacion}
                idioma = {producto.idioma}
                precio = {producto.precio}
              />
            )) : <h4>Cargando...</h4>
          }
    
    </>
      )
    }

export default ItemListDetails
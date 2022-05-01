import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <>
      {
        productos.length > 0 ? productos.map(producto=> (
          <Item
            img={producto.img}
            h4 = {producto.h4}
            instructor = {producto.instructor}
            puntaje = {producto.puntaje}
            estrellas = {producto.estrellas}
            calificacion = {producto.calificacion}
            precio = {producto.precio}
            original = {producto.original}
          />
        )) : <h4>Cargando...</h4>
      }

</>
  )
}

export default ItemList
import React from 'react'
import Item from '../Item/Item'
import '../../scss/app.scss'


const ItemList = ({productos}) => {
  return (
  <div className="items">
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
        )) : <h2>Cargando...</h2>
      }
      </div>

  )
}

export default ItemList
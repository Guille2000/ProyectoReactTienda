import React from 'react'
import Item from '../Item/Item'
import '../../scss/app.scss'


const ItemList = ({productos}) => {
  return (
  <div className="items">
      {
        productos.length > 0 ? (productos.map((productos) => (<Item key={productos.id} productos={productos} />) ) )

        : (
          <h1>Cargando...</h1>
        )

        }

        </div>

  )
}

export default ItemList
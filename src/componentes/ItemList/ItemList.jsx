import React from 'react'
import Item from '../Item/Item'
import '../../scss/app.scss'


const ItemList = ({productos}) => {
  return (
  <div className="items">
      {
        productos.length > 0 ? (productos.map((productos) => (<Item key={productos.id} productos={productos} />) ) )

        : (
          <div className="spinner-border text-primary mx-3" role="status">
            <span className="sr-only">Cargando...</span>
          </div>
        )

        }

        </div>

  )
}

export default ItemList
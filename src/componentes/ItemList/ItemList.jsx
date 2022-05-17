import React from 'react'
import Item from '../Item/Item'
import '../../scss/app.scss'
import Loader from '../Loader/Loader'


const ItemList = ({ productos }) => {
  return (
    <div className="items">
      {
        productos.length > 0 ? (productos.map((productos) => (<Item key={productos.id} productos={productos} />)))

          : (
            <Loader />
          )

      }

    </div>


  )
}

export default ItemList
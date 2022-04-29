import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
    return (
        <div>
            {
                productos.length > 0 ? (productos.map(
                    (producto) => (<Item 
                            h2 = {producto.h2}
                        />)
                )) : (
                    <h1>Cargando...</h1>
                )
            }
        </div>
    )
}

export default ItemList
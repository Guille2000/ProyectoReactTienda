import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { data } from '../../config'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    


useEffect(() => {
 const promesa = new Promise((resolve, reject) => {
     setTimeout(() => {
     resolve(data)
     }, 2000)
    })
promesa.then((res) => {
setProductos(res)
  })

 return () => {

        }
    }, [])


    return (
        <div>
              {<ItemList productos={productos}/>}

        </div>
    )
}

export default ItemListContainer
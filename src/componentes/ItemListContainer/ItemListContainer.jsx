import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { data } from '../../config'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const {cat} = useParams()
    const [productos, setProductos] = useState([])



    


useEffect(() => {
 const promesa = new Promise((resolve, reject) => {
     setTimeout(() => {
         let filtrarData = data
         if(cat === 'javascript'){
            filtrarData = data.filter((curso => curso.categoria === 'javascript'))
         }
         if(cat === 'diseño'){
             filtrarData = data.filter((curso => curso.categoria === 'diseño'))
         }
         if(cat === 'desarrollo'){
            filtrarData = data.filter((curso => curso.categoria === 'desarrollo'))
         }
     resolve(filtrarData)
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
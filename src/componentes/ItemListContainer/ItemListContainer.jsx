import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { data } from '../../config'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

const ItemListContainer = ({curso}) => {
    const {cat} = useParams()
    const [productos, setProductos] = useState([])





    


useEffect(() => {
 const promesa = new Promise((resolve, reject) => {
     setTimeout(() => {
         let filtrarData = data
  
            if(curso){
             
                filtrarData = data.filter((e => e.categoria == curso))
            }
       

     resolve(filtrarData)
     }, 2000)
    })
promesa.then((res) => {
setProductos(res)
  })

 return () => {

        }
    }, [curso])

    return (
        <div>
            
              {productos ? <ItemList productos={productos}/> : <Loader/>}

        </div>
    )
}

export default ItemListContainer
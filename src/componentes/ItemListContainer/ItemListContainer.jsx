import React, { useState, useEffect } from 'react'
import Cursos from '../Cursos/Cursos'
import ItemList from '../ItemList/ItemList'



function ItemListContainer({Producto}) {
  const [productos, setProductos] = useState([])

  const data = [
    {
      
    }
  ]



  useEffect(() => {
    const promise = new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 2000)
    })
    promise.then((res) => {
      setProductos(res)
    }).catch ((err) => 
      console.log(err)
    ) .then(() => console.log(productos)
    )
  
    return () => {
      
    }
  }, [])
  



  return (
    <div>
      <Cursos/>
      <ItemList productos={productos}/>
    </div>
  )


}

export default ItemListContainer
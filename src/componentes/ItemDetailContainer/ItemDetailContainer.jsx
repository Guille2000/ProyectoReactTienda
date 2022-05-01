import React, { useState, useEffect } from 'react'
import curso1 from '../../img/curso_6.jpg';
import estrellas from '../../img/estrellas.png';
import ItemListDetails from '../ItemListContainer/ItemListDetails/ItemListDetails';



const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])

    const data = [
        {
            id: 1,
            img: `${curso1}`,
            h2: 'Curso de JavaScript moderno 20 proyectos',
            parrafo:'Aprende JavaScript moderno con un curso 100% practico',
            puntaje: '4.7',
            estrellitas: `${estrellas}`,
            creador: 'Creado por: ',
            autor: 'Guillermo Mabel',
            actualizacion: '3/22',
            idioma: 'Español',
            precio:'10USD$'

        }

    ]
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve(data)
            }, 2000)
           })
       promesa.then((res) => {
       setProductos(res)
         }).catch((err) => 
         console.log(err)
        ) .then(() =>
        console.log(productos)
       )
       
       return () => {

    }
}, [])


return (
    <div>
          {<ItemListDetails productos={productos}/>}
    </div>
)
}

export default ItemDetailContainer
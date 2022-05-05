import React, { useState, useEffect } from 'react'
import curso1 from '../../img/curso_6.jpg';
import estrellas from '../../img/estrellas.png';
import ItemList from '../ItemList/ItemList';




const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const data = [
        {
            id: 1,
            img: `${curso1}`,
            h4: 'Curso de JavaScript moderno',
            instructor: 'Guillermo Mabel',
            puntaje: '4.7',
            estrellas: `${estrellas}`,
            calificacion: '(3121)',
            precio: '10 USD$',
            original: '200USD$'
        },
        {
            id: 2,
            img: `${curso1}`,
            h4: 'Curso de JavaScript moderno',
            instructor: 'Guillermo Mabel',
            puntaje: '4.7',
            estrellas: `${estrellas}`,
            calificacion: '(3121)',
            precio: '10 USD$',
            original: '200USD$'
        },
        {
            id: 3,
            img: `${curso1}`,
            h4: 'Curso de JavaScript moderno',
            instructor: 'Guillermo Mabel',
            puntaje: '4.7',
            estrellas: `${estrellas}`,
            calificacion: '(3121)',
            precio: '10 USD$',
            original: '200USD$'
        },
        {
            id: 4,
            img: `${curso1}`,
            h4: 'Curso de JavaScript moderno',
            instructor: 'Guillermo Mabel',
            puntaje: '4.7',
            estrellas: `${estrellas}`,
            calificacion: '(3121)',
            precio: '10 USD$',
            original: '200USD$'
        },
        {
            id: 5,
            img: `${curso1}`,
            h4: 'Curso de JavaScript moderno',
            instructor: 'Guillermo Mabel',
            puntaje: '4.7',
            estrellas: `${estrellas}`,
            calificacion: '(3121)',
            precio: '10 USD$',
            original: '200USD$'
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
              {<ItemList productos={productos}/>}
        </div>
    )
}

export default ItemListContainer
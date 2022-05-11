import React, { useState, useEffect } from 'react'
import { data } from '../../config';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';



const ItemDetailContainer = () => {


    const { id } = useParams()

    const [productos, setProductos] = useState([])
    const filtrado = data.find((prod) => prod.id === Number(id))


    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filtrado)
            }, 2000)
        })
        promesa.then((res) => {
            setProductos(res)
        })
            .then(() => console.log(productos))
            .catch((err) => console.log(err))
        return () => {

        }
    }, [])


    return (
        <div>
            {productos ? <ItemDetail productos={productos} /> : <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>}
        </div>
    )
}

export default ItemDetailContainer
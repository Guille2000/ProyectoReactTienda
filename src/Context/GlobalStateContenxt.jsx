import React, { createContext, useState } from 'react'
export const GlobalContext = createContext('')

    const GlobalStateContenxt = ({children}) => {
    const [carrito, setCarrito] = useState([])


    const agregarCarrito = (producto) => {
      //no acepta duplicados
      //some solo devuelve true o false. lo usamos para saber si un valor existe
        if(carrito.some(curso => curso.id === producto.id)){
          //con el map iteramos sobre cada uno de los registros para detectar cual es el duplicado
          const carritoActualizado = carrito.map(curso => {
            if(curso.id === producto.id){
              curso.cantidad = producto.cantidad
            }
            return curso
          })
          alert('Curso ya agregado')
        } else {
          setCarrito([...carrito, producto])
        }

    }


    const eliminarProducto = (id) => {
        const prodEliminar = carrito.filter( curso => curso.id !== id)
        setCarrito(prodEliminar)
    }

    const vaciarCart = () => setCarrito([])

  return (
    //en el value digo la informacion que voy a proveer
    <GlobalContext.Provider value={{carrito, agregarCarrito, eliminarProducto, vaciarCart}} >
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContenxt
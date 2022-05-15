import React, { createContext, useState } from 'react'
export const GlobalContext = createContext('')

    const GlobalStateContenxt = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const agregarCarrito = (producto) => {
      if(carrito.some(curso => curso.id === producto.id)){
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
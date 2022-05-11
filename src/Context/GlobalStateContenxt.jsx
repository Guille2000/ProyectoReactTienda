import React, { createContext, useState } from 'react'
export const GlobalContext = createContext('')

    const GlobalStateContenxt = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto])
    }

  return (
    <GlobalContext.Provider value={{carrito, agregarCarrito}} >
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContenxt
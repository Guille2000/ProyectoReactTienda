import React, { createContext, useState } from 'react'
export const GlobalContext = createContext('')

    const GlobalStateContenxt = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto])
    }

  return (
    //en el value digo la informacion que voy a proveer
    <GlobalContext.Provider value={{carrito, agregarCarrito}} >
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContenxt
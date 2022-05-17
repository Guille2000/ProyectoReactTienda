import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Business from '../componentes/Business/Business'
import Aprendizaje from '../componentes/Aprendizaje/Aprendizaje'
import Layout from '../componentes/Layout/Layout'
import Inicio from '../componentes/Inicio/Inicio'
import Error from '../componentes/Error/Error'
import ItemDetailContainer from '../componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer'
import Cart from '../componentes/Cart/Cart'
const Rutas = () => {
  return (
      <>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout/>}>

        <Route index element={<Inicio/>} />
       {/*<Route path="/category/:cat" element={<ItemListContainer/> } />*/}
        <Route path="/cart"  element={<Cart/>} />
        <Route path="/Business" element={<Business/>}/>
        <Route path="/Aprendizaje" element={<Aprendizaje/>}/>


        <Route path="item-detail/:id" element={<ItemDetailContainer/>}/>        

        </Route>

        <Route path="*" element={<Error/>}/>
     
      </Routes>


      </BrowserRouter>
      </>
      
  )
}

export default Rutas
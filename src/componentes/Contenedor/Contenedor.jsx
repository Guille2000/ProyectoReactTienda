import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Caracteristicas from '../Caracteristicas/Caracteristicas';





const Contenedor = ({curso}) => {
  return (
    <>
    <div className="categoria-curso p-4 mt-3 mb-5">
            <p className="fs-4 fw-bold">Amplia tus oportunidades con Javascript y el desarrollo web</p>
            <p>La programación es uno de los sectores mejores pagados de la industria. No dudes en adquirir nuestros cursos para darle ese cambio a tu vida.</p>
            <ul className="list-unstyled mt-5 listado-cursos">
            <ItemListContainer curso={curso}/>
        </ul>
        </div>

        <Caracteristicas/>
        </>

    

            
  )
}

export default Contenedor
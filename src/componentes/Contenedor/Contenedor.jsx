import React from 'react'
import Item from '../Item/Item'
import curso1 from '../../img/curso_6.jpg';
import curso2 from '../../img/curso_2.jpg';
import curso3 from '../../img/curso_10.jpg';
import curso4 from '../../img/curso_9.jpg';
import curso5 from '../../img/curso_3.jpg';
import estrellas from '../../img/estrellas.png';
import ItemListContainer from '../ItemListContainer/ItemListContainer';



const Contenedor = () => {
  return (
    <div className="categoria-curso p-4 mt-3 mb-5">
            <p className="fs-4 fw-bold">Amplia tus oportunidades con Javascript y el desarrollo web</p>
            <p>La programación es uno de los sectores mejores pagados de la industria. No dudes en adquirir nuestros cursos para darle ese cambio a tu vida.</p>
            <ul className="list-unstyled mt-5 listado-cursos">
            <ItemListContainer/>
        </ul>
        </div>
    

            
  )
}

export default Contenedor
import React from 'react';
import persona from '../../img/persona1.png';
import Cursos from '../Cursos/Cursos';


const Inicio = () => {
    return (
        <>
        <section className="descuentos container-xl">
            <div className="row justify-content-around align-items-lg-end bg-light">
                <div className="col-lg-4 shadow bg-white">
                    <div className="p-3">
                        <h2>Último día para disfrutar descuentos</h2>
                        <p className="descripcion">Cursos desde 10 USD$. Utiliza el cupón 10USD para pagar únicamente 10 dolares en cualquier curso</p>
                        <input 
                            placeholder='¿Qué quieres aprender'
                            type="search"
                            className="form-control buscar"
                        
                        />
                    </div>
                </div>
                 <div className="col-lg-5">
                     <img className="img-fluid" src={persona} alt="imagen persona universidad"/>
                 </div>
            </div>
        </section>

        <Cursos/>
        </>
        

      
    )
}

export default Inicio
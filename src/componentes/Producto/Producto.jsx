import React from 'react'
import curso1 from '../../img/curso_6.jpg';
import estrellas from '../../img/estrellas.png';
import '../../scss/app.scss'


const Producto = () => {
  return (
    <section className="fondo">
    <div className="text-center">
        <img className="img-fluid" src={curso1} alt=""/>
    </div>
    <div className="texto mt-5 p-3">
        <h2 className="text-light fs-3 fw-700 programacion">Curso de JavaScript moderno creando +40 proyectos</h2>
        <p className="text-light fw-400">Aprende el Lenguaje de Programación Web más popular paso a paso con +15 Proyectos - Incluye Proyecto MERN Full Stack</p>
        <div className="d-flex align-items-center">
            <p className="m-0 me-2 puntaje fw-bold text-secondary">
                4.7
            </p>
            <img className="me-2 calificacion" src={estrellas} alt="calificacion estrellas"/>
            <p className="m-0 total text-primary">(10.867 calificacion)</p>
        </div>
        <p className="precio fw-bold text-light">Creado por <span className="original fw-normal text-primary">Guillermo Mabel</span> </p>
        <p className="text-light m-0">Última actualización: 3/2022</p>
        <p  className="text-light m-0">Español</p>

        <h3 className="fs-1 text-light mt-3 fw-bold">10$USD</h3>

        <a className="btn btn-success w-100 text-light"href="">Añadir a la cesta</a>
    </div>
</section>




  )
}

export default Producto
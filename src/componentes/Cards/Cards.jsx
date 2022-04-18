import React from 'react';
import curso1 from '../../img/curso_6.jpg';
import curso2 from '../../img/curso_2.jpg';
import curso3 from '../../img/curso_3.jpg';
import curso9 from '../../img/curso_9.jpg';
import curso10 from '../../img/curso_10.jpg';
import curso12 from '../../img/curso_12.jpg';
import estrellas from '../../img/estrellas.png';
import '../../scss/app.scss'




const Cards = () => {
    return (
        <div className="categoria-curso p-4 mt-3">
            <p className="fs-4 fw-bold">Amplia tus oportunidades con Javascript y el desarrollo web</p>
            <p>La programación es uno de los sectores mejores pagados de la industria. No dudes en adquirir nuestros cursos para darle ese cambio a tu vida.</p>
            <ul className="list-unstyled mt-5 listado-cursos">
                <li className="curso">
                    <div className="card">
                        <img className="img-top" src={curso1} alt="Imagen del curso" />

                        <div className="card-body">
                            <h4 className="titulo">Curso de JavaScript moderno creando +40 proyectos</h4>
                            <p className="instructor m-0">Guillermo Mabel</p>
                            <div className="d-flex align-items-center">

                                <p className="puntaje me-2 fw-bold text-secondary m-0">
                                    4.5</p>
                                <img className="me-2 calificacion" src={estrellas} alt="Calificación" />
                                <p className="total m-0">(2560)</p>

                            </div>
                            <p className="precio fw-bold ">10 USD$ <span className="original fw-normal">
                                150 USD$</span></p>
                        </div>
                    </div>

                </li>
                <li className="curso">
                    <div className="card">
                        <img className="img-top" src={curso2} alt="Imagen del curso" />

                        <div className="card-body">
                            <h4 className="titulo">Diseño UX y UI, la guia completa para principiantes</h4>
                            <p className="instructor m-0">Fernanda Sotera</p>
                            <div className="d-flex align-items-center">

                                <p className="puntaje me-2 fw-bold text-secondary m-0">
                                    4.5</p>
                                <img className="me-2 calificacion" src={estrellas} alt="Calificación" />
                                <p className="total m-0">(2760)</p>

                            </div>
                            <p className="precio fw-bold ">10 USD$ <span className="original fw-normal">
                                150 USD$</span></p>
                        </div>
                    </div>

                </li>
                <li className="curso">
                    <div className="card">
                        <img className="img-top" src={curso10} alt="Imagen del curso" />

                        <div className="card-body">
                            <h4 className="titulo">Full Stack JavaScript, domina el lenguaje al 100%</h4>
                            <p className="instructor m-0">Maria Rieta</p>
                            <div className="d-flex align-items-center">

                                <p className="puntaje me-2 fw-bold text-secondary m-0">
                                    4.5</p>
                                <img className="me-2 calificacion" src={estrellas} alt="Calificación" />
                                <p className="total m-0">(2550)</p>

                            </div>
                            <p className="precio fw-bold ">10 USD$ <span className="original fw-normal">
                                150 USD$</span></p>
                        </div>
                    </div>

                </li>
                <li className="curso">
                    <div className="card">
                        <img className="img-top" src={curso9} alt="Imagen del curso" />

                        <div className="card-body">
                            <h4 className="titulo">Desarrollo Web Completo, React y Angular</h4>
                            <p className="instructor m-0">Guillermo Mabel</p>
                            <div className="d-flex align-items-center">

                                <p className="puntaje me-2 fw-bold text-secondary m-0">
                                    4.5</p>
                                <img className="me-2 calificacion" src={estrellas} alt="Calificación" />
                                <p className="total m-0">(2200)</p>

                            </div>
                            <p className="precio fw-bold ">10 USD$ <span className="original fw-normal">
                                150 USD$</span></p>
                        </div>
                    </div>

                </li>
                <li className="curso">
                    <div className="card">
                        <img className="img-top" src={curso3} alt="Imagen del curso" />

                        <div className="card-body">
                            <h4 className="titulo">Diseño de Interfaces de Usuarios para APP Movil</h4>
                            <p className="instructor m-0">Guillermo Mabel</p>
                            <div className="d-flex align-items-center">

                                <p className="puntaje me-2 fw-bold text-secondary m-0">
                                    4.5</p>
                                <img className="me-2 calificacion" src={estrellas} alt="Calificación" />
                                <p className="total m-0">(2400)</p>

                            </div>
                            <p className="precio fw-bold ">10 USD$ <span className="original fw-normal">
                                150 USD$</span></p>
                        </div>

                    </div>
                </li>
                <li className="curso d-lg-none">
                    <div className="card">
                        <img className="img-top" src={curso12} alt="Imagen del curso" />

                        <div className="card-body">
                            <h4 className="titulo">Bootcamp Backed</h4>
                            <p className="instructor m-0">Guillermo Mabel</p>
                            <div className="d-flex align-items-center">

                                <p className="puntaje me-2 fw-bold text-secondary m-0">
                                    4.5</p>
                                <img className="me-2 calificacion " src={estrellas} alt="Calificación" />
                                <p className="total m-0">(3500)</p>

                            </div>
                            <p className="precio fw-bold ">10 USD$ <span className="original fw-normal">
                                300 USD$</span></p>
                        </div>

                    </div>
                </li>
            </ul>
        </div>

    )
}

export default Cards
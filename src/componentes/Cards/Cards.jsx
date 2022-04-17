import React from 'react';
import curso1 from '../../img/curso_6.jpg';
import curso2 from '../../img/curso_2.jpg';
import curso3 from '../../img/curso_3.jpg';
import curso9 from '../../img/curso_9.jpg';
import curso10 from '../../img/curso_10.jpg';
import estrellas from '../../img/estrellas.png';
import '../styles/cursos.css'




const Cards = () => {
    return (
        <div className="categoria-curso p-4 mt-3 masonry-item javascript">
            <p className="fs-4 fw-bold">Amplia tus oportunidades con Javascript y FrontEnd</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aperiam officiis exercitationem similique mollitia, voluptates eaque accusantium inventore soluta tempore commodi facilis dolorum, rerum fugit at temporibus sed aspernatur ut.</p>
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
                                <img className="me-2" src={estrellas} alt="Calificación" />
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
                            <h4 className="titulo">Diseño UX y UI</h4>
                            <p className="instructor m-0">Fernanda Sotera</p>
                            <div className="d-flex align-items-center">

                                <p className="puntaje me-2 fw-bold text-secondary m-0">
                                    4.5</p>
                                <img className="me-2" src={estrellas} alt="Calificación" />
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
                            <h4 className="titulo">Full Stack JavaScript</h4>
                            <p className="instructor m-0">Maria Rieta</p>
                            <div className="d-flex align-items-center">

                                <p className="puntaje me-2 fw-bold text-secondary m-0">
                                    4.5</p>
                                <img className="me-2" src={estrellas} alt="Calificación" />
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
                            <h4 className="titulo">Desarrollo Web Completo React + Angular</h4>
                            <p className="instructor m-0">Guillermo Mabel</p>
                            <div className="d-flex align-items-center">

                                <p className="puntaje me-2 fw-bold text-secondary m-0">
                                    4.5</p>
                                <img className="me-2" src={estrellas} alt="Calificación" />
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
                                <img className="me-2" src={estrellas} alt="Calificación" />
                                <p className="total m-0">(2400)</p>

                            </div>
                            <p className="precio fw-bold ">10 USD$ <span className="original fw-normal">
                                150 USD$</span></p>
                        </div>

                    </div>
                </li>
            </ul>
        </div>

    )
}

export default Cards
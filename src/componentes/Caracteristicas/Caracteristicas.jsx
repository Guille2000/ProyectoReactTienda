import React from 'react'

const Caracteristicas = () => {
  return (
    <section className="bg-light my-5 py-5">
        <div className="container xl">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-3 mb-5 mb-md-0">
                    <div className="d-flex justify-content-around align-items-center">
                        <div className="me-3">
                            <div className="icono">
                            <i className="bi bi-play-fill fs-3"></i>
                            </div>
                        </div>
                        <p className="fw-bold m-0">Aprende habilidades a tu ritmo</p>
                    </div>
                </div>
                <div className="col-md-3 mb-5 mb-md-0">
                    <div className="d-flex justify-content-around align-items-center">
                        <div className="me-3">
                            <div className="icono">
                            <i className="bi bi-star-fill fs-3"></i>
                            </div>
                        </div>
                        <p className="fw-bold m-0">Con descuentos en todos nuestros cursos</p>
                    </div>
                </div>
                <div className="col-md-3 mb-5 mb-md-0">
                    <div className="d-flex justify-content-around align-items-center">
                        <div className="me-3">
                            <div className="icono">
                            <i className="bi bi-phone-fill fs-3"></i>
                            </div>
                        </div>
                        <p className="fw-bold m-0">Desde tu dispositivo movil o pc, como tú quieras</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Caracteristicas
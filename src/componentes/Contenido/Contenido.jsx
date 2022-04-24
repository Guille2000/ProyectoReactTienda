import React from 'react'
import '../../scss/app.scss'

const Contenido = () => {
    return (
        <section className="container p-4">
            <h2 className="fuente">Contenido del curso</h2>
            <div className="d-md-flex text-center gap-3 mt-3">
                <p>3 secciones</p>
                <p>• 50 clases</p>
                <p>• 50  horas de duración total</p>
            </div>
            <div className="container fondo-cursos p-2 categoria-curso">
           <div className="row align-items-center">
               <div className="col-md-6">
                <h3 className="headings-contenido m-0 fw-700"><i class="bi bi-caret-down-fill p-2"></i>Introducción al curso</h3>
               </div>
               <div className="col-md-6">
                   <p className="m-0">10 clases • 10h</p>
               </div>
           </div>
           <hr/>
           <div className="row align-items-center mt-3">
               <div className="col-md-6">
                <h3 className="headings-contenido m-0"><i class="bi bi-caret-down-fill p-2"></i>Variables, tipos de datos</h3>
               </div>
               <div className="col-md-6">
                   <p className="m-0">20 clases • 20h</p>
               </div>
           </div>
           <hr />
           <div className="row align-items-center mt-3">
               <div className="col-md-6">
                <h3 className="headings-contenido m-0"><i class="bi bi-caret-down-fill p-2"></i>Ejercicios con Arrays, Proyectos y despedida</h3>
               </div>
               <div className="col-md-6">
                   <p className="m-0">20 clases • 20h</p>
               </div>
           </div>
 
           </div>

        </section>
    )
}

export default Contenido
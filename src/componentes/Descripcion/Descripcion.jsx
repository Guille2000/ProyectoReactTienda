import React from 'react'
import '../../scss/app.scss'

const Descripcion = () => {
  return (
    <section className="container p-4 categoria-curso mt-5">
      <h2 className="fs-5">Lo que aprenderás</h2>
      <div className="row align-items-center p-4">
        <div className="col-md-6 mb-3">
          <p class="m-0"><i class="bi bi-check"></i>A dominar JavaScript a la perfección</p>
          <p class="m-0"><i class="bi bi-check"></i>Uso de importaciones y sintaxis moderna de JavaScript</p>
          <p class="m-0"><i class="bi bi-check"></i>Aprenderás conceptos nuevos en ES6 como Template Literals, arrow functions, generadores, iteradores, promises, async / await, fetch api y mucho mas</p>
        </div>
        <div className="col-md-6 mb-3">

          <p class="m-0"><i class="bi bi-check"></i>Aprenderás programación orientada a objetos con Classes (ES6) y Prototypes (ES5)</p>
          <p class="m-0"><i class="bi bi-check"></i>Aprenderas programación Asincrona con Promises, Callbacks y Async Await</p>
          <p class="m-0"><i class="bi bi-check"></i>Agregar interacción a tus aplicaciones y páginas web</p>
        </div>
      </div>
    </section>
  )
}

export default Descripcion
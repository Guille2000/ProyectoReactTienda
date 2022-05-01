import React from 'react'


const Item = ({img, h4, instructor, puntaje, estrellas, calificacion, precio, original}) => {
  return (
    <li className="curso">
    <div className="card">
        <img className="img-top" src={img} alt="Imagen del curso" />

        <div className="card-body">
            <h4 className="titulo">{h4}</h4>
            <p className="instructor m-0">{instructor}</p>
            <div className="d-flex align-items-center">

                <p className="puntaje me-2 fw-bold text-secondary m-0">
                    {puntaje}</p>
                <img className="me-2 calificacion" src={estrellas} alt="Calificación" />
                <p className="total m-0">{calificacion}</p>

            </div>
            <p className="precio fw-bold ">{precio} <span className="original fw-normal">
                {original}</span></p>
        </div>
    </div>

</li>
  )
}

export default Item
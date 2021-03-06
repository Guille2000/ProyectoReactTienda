import React from "react"
import curso1 from '../img/curso_6.jpg'
import curso2 from '../img/curso_2.jpg';
import curso3 from '../img/curso_10.jpg';
import curso4 from '../img/curso_9.jpg';
import curso5 from '../img/curso_3.jpg';
import curso6 from '../img/curso_12.jpg'
import estrellas from '../img/estrellas.png';



export const data = [
    {
        id: 1,
        categoria:'javascript',
        stock:5,
        img:`${curso1}`,
        h4: 'Curso de JavaScript moderno +30 proyectos',
        h2:'Curso de JavaScript moderno',
        parrafo:'Webpack, Clases, Propiedades privadas, ESNext, Node, Npm, Babel, Hot Reaload, CRUD, Carga de archivos y más!',
        instructor: 'Guillermo Mabel',
        estrellas:`${estrellas}`,
        puntaje: '4.7',
        estrellitas:`${estrellas}`,
        calificacion: '(3121)',
        estudiantes:'3000 estudiantes',
        creador:'Creado por',
        autor:'Guillermo Mabel',
        actualizacion:'3/22',
        idioma:'Español',
        precio: 10,
        original: '200USD$'
    },
    {
        id: 2,
        categoria:'diseño',
        stock:5,
        img:`${curso2}`,
        h4: 'Diseño de UX y UI con Figma - 5 Apps practicas',
        h2:'Diseño de UX y UI con Figma - 5 Apps ',
        parrafo:'Aprende, conoce y aplica técnicas de User Experience Design - Un curso de UX UI Design + Diseño Web y Mobile',
        instructor: 'Lorena Caraballo',
        estrellas:`${estrellas}`,
        puntaje: '4.9',
        estrellitas:`${estrellas}`,
        calificacion: '(2900)',
        estudiantes:'2695 estudiantes',
        creador:'Creado por',
        autor:'Lorena Caraballo',
        actualizacion:'4/22',
        idioma:'Español',
        precio: 10,
        original: '200USD$'
    },
    {
        id: 3,
        categoria:'javascript',
        stock:5,
        img:`${curso3}`,
        h4: 'FullStack JavaScript - Node, React y Electron',
        h2:'FullStack JavaScript - Node, React y Electron',
        parrafo:'Aprende el Lenguaje de Programación Web más popular paso a paso con +15 Proyectos - Incluye Proyecto MERN Full Stack',
        instructor: 'Elsin Nombre',
        estrellas:`${estrellas}`,
        puntaje: '4.6',
        estrellitas:`${estrellas}`,
        calificacion: '(2800)',
        estudiantes:'3250 estudiantes',
        creador:'Creado por',
        autor:'Elsin Nombre',
        actualizacion:'3/22',
        idioma:'Español',
        precio: 10,
        original: '200USD$'
    },
    {
        id: 4,
        categoria:'desarrollo',
        stock:5,
        img:`${curso4}`,
        h4: 'Desarrollo Web Completo con react y Django',
        h2:'Desarrollo Web Completo con react y Django',
        parrafo:'Crea una carta digital con pedidos con React, Django, Python, Hooks, Formik, Yup, JWT, REST API, buenas practicas y mas',
        instructor: 'Martin Suarez',
        estrellas:`${estrellas}`,
        calificacion: '(2800)',
        puntaje: '4.7',
        estrellitas:`${estrellas}`,
        calificacion: '(3121)',
        estudiantes:'6045 estudiantes',
        creador:'Creado por',
        autor:'Martin Suarez',
        actualizacion:'2/22',
        idioma:'Español',
        precio: 10,
        original: '200USD$'
    },
    {
        id: 5,
        categoria:'diseño',
        stock:5,
        img:`${curso5}`,
        h4: 'Diseño de Interfaces de Usuario Apps Móviles',
        h2:'Diseño de Interfaces de Usuario Apps Móviles',
        parrafo:'Aprende test de Interfaz de Usuario para tus aplicaciones Android',
        instructor: 'Victoria Latorre',
        estrellas:`${estrellas}`,
        puntaje: '4.7',
        estrellitas:`${estrellas}`,
        calificacion: '(2570)',
        estudiantes:'2694 estudiantes',
        creador:'Creado por',
        autor:'Victoria Latorre',
        actualizacion:'3/22',
        idioma:'Español',
        precio: 10,
        original: '200USD$'
    },
    {
        id: 6,
        categoria:'diseño',
        stock:5,
        categoria:'desarrollo',
        img:`${curso6}`,
        h4: 'Bootcamp Desarrollo Web Completo',
        h2:'Bootcamp Desarrollo Web Completo',
        parrafo:'En este bootcamp, aprenderás desarrollo web en su totalidad, ¡ideal para quienes quieran ingresar al mundo laboral!',
        instructor: 'Nahuel Serpentino',
        estrellas:`${estrellas}`,
        puntaje: '4.7',
        estrellitas:`${estrellas}`,
        calificacion: '(2570)',
        estudiantes:'2694 estudiantes',
        creador:'Creado por',
        autor:'Nahuel Serpentino',
        actualizacion:'5/22',
        idioma:'Español',
        precio: 10,
        original: '200USD$'
    }
    
]
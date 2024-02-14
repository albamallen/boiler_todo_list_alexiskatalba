// import { tareas } from '../assets/data/tareas.js';

// window.onload = () => {
//     let lista = document.querySelector("#lista");

//     tareas.forEach((tarea) => {
//         let elem = `
//             <li class="lista_elemento" id="${tarea.id}">
//                 <p>${tarea.titulo}</p>
//                 <button class="btn_cerrar">X</button>
//             </li>
//         `;
//         console.log(elem)
//         lista.innerHTML+=elem;
//     })
// }

import { tareas } from '../assets/data/tareas.js';

window.onload = () => {
    let lista = document.querySelector("#lista");

    tareas.forEach((tarea) => {
        let elem = `
            <li class="lista_elemento" id="${tarea.id}">
                <p>${tarea.titulo}</p>
                <button class="btn_cerrar">X</button>
            </li>
        `;
        lista.innerHTML+=elem;
    });

    // Agregar evento click a los botones de cierre
    let botonesCerrar = document.querySelectorAll(".btn_cerrar");
    botonesCerrar.forEach((boton) => {
        boton.addEventListener("click", () => {
            // Obtener el elemento padre del botón (que es el <li>)
            let elementoPadre = boton.parentNode;
            // Eliminar el elemento de la lista
            lista.removeChild(elementoPadre);
        });
    });
}
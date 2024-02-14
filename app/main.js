import { tareas } from '../assets/data/tareas.js';

window.onload = () => {
    const lista = document.querySelector("#lista");

    const contenedorTareas = document.createElement("div");
    contenedorTareas.className = "contenedor-tareas";

    const campoTexto = document.createElement("input");
    campoTexto.type = "text";
    campoTexto.classList.add("addtarea")
    campoTexto.placeholder = "Escribe una nueva tarea";

    campoTexto.addEventListener("keypress", function(e) {
        if (e.key === "Enter" && this.value.trim() !== "") {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.className = "lista_elemento";
            nuevaTarea.innerHTML = `
                <p>${this.value.trim()}</p>
                <button class="btn_cerrar">X</button>
            `;
            lista.appendChild(nuevaTarea);
            this.value = "";
        }
    });

    contenedorTareas.appendChild(campoTexto);
    lista.parentElement.insertBefore(contenedorTareas, lista);

    tareas.forEach((tarea) => {
        const elemento = document.createElement("li");
        elemento.className = "lista_elemento";
        elemento.id = tarea.id;
        elemento.innerHTML = `
            <p>${tarea.titulo}</p>
            <button class="btn_cerrar">X</button>
        `;
        lista.appendChild(elemento);
    });
};


let tareas = [];


const formularioTarea = document.getElementById("formularioTarea");
const inputTarea = document.getElementById("inputTarea");
const listaTareas = document.getElementById("listaTareas");


function renderizarTareas() {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.textContent = tarea.nombre;
        if (tarea.completada) {
            li.classList.add("completed");
        }
        li.addEventListener("click", () => {
            completarTarea(index);
        });
        listaTareas.appendChild(li);
    });
}


function agregarTarea(nombre) {
    const nuevaTarea = {
        nombre: nombre,
        completada: false
    };
    tareas.push(nuevaTarea);
    renderizarTareas();
}


function completarTarea(index) {
    tareas[index].completada = !tareas[index].completada;
    renderizarTareas();
}


formularioTarea.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombreTarea = inputTarea.value.trim();
    if (nombreTarea !== "") {
        agregarTarea(nombreTarea);
        inputTarea.value = "";
    }
});


renderizarTareas();

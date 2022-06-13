//Constantes

    //Información de fecha
const dateNumber = document.getElementById('dateNumber'); //Trae el id dateNumber desde el HTML
const dateText = document.getElementById('dateText'); //Trae el id dateText desde el HTML
const dateMonth = document.getElementById('dateMonth'); //Trae el id dateMonth desde el HTML
const dateYear = document.getElementById('dateYear'); //Trae el id dateYear desde el HTML
   
    //Contenedor de tareas
const tasksContainer = document.getElementById('tasksContainer'); //Trae el id tasksContainer desde el HTML y es donde agregaremos las tareas


//Funciones

    /*Setear la fecha (poner la fecha actual automaticamente)*/
const setDate = () => {
    const date = new Date(); //Date proporciona JS para poner fecha actual
    dateNumber.textContent = date.toLocaleString('es',{day: 'numeric'}); //Modifica el texto y lo pone en 'español' y el dia en valor numerico
    dateText.textContent = date.toLocaleString('es',{weekday: 'long'}); //Modifica el texto y lo pone en 'español' y el dia escrito en letras completamente (ej: Miercoles y no Mie)
    dateMonth.textContent = date.toLocaleString('es',{month: 'short'}); //Modifica el texto y lo pone en 'español' y el dia escrito en letras reducido (ej: Ene y no Enero)
    dateYear.textContent = date.toLocaleString('es',{year: 'numeric'}); //Modifica el texto y lo pone en 'español' y el dia en valor numerico

};

    //Agregar tarea si el usuario ejecute con el "submit" una nuenva tarea en el HTML
const addNewTask = event => {
    //Citar elemento desde el HTML
    event.preventDefault(); //No nos envia a otra pagina al enviar formulario, sino mantener la misma
    const { value } = event.target.taskText; //Va a traer el texto de el id taskText del input en HTML
    if(!value) return; //Si esta vacio el campo para completar no envia la tarea(tiene que haber algo colocado)

    /*Crear la tarea nueva en un Div nuevo*/
    const task = document.createElement('div'); 
    task.classList.add('task', 'roundBorder'); //Agregar 2 clases
    task.addEventListener('click', changeTaskState); //Cuando hago click en esos nuevos Div despliega la funcion changeTaskState
    task.textContent = value; //Ponemos el texto ingresado en este div
    tasksContainer.prepend(task); //Pone este nuevo div(nueva tarea) al principio de la lista
    event.target.reset(); //Resetear el input para que pueda ingresar otra tarea nueva
};

    //Cambiar listado de tareas
    const changeTaskState = event => {
        event.target.classList.toggle('done'); //A los elementos que no tienen la clase done se la agregamos y si tiene la sacamos

    };

    /*Ordenar las tareas*/
    //Ordenar
    const order = () => {
        const done = []; //Array tareas hechas
        const toDo = []; // Array tareas por hacer
        tasksContainer.childNodes.forEach ( e => {  //Cada hijo del tasksContainer del HTML
           e.classList.contains('done')  ? done.push(e) : toDo.push(e) //Por cada elemento que tenga 'done' lo agrega al array done sino al array por hacer
        })
        return [...toDo, ...done]; //Va a colocar todas las tareas por hacer arriba y despues todas las hechas por abajo
    }
    //Agregar los ordenados y los ponemos en el container
    const renderOrderedTasks = () => {
        order().forEach(e => tasksContainer.appendChild(e)) //Agregarlos al taskContainer del HTML
    }

    const cleanAllTasks = () => {
        order().forEach(e => tasksContainer.removeChild(e)) //Eliminar TODO el taskContainer del
    }

setDate();


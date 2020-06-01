let add = document.querySelector("#addToDo");
let ul = document.querySelector("ul");

add.addEventListener("keydown", e => {
	if (e.key == "Enter") {
		let nuevoAdd = document.createTextNode(" " + add.value);
		let nuevoI = document.createElement("i");
		let nuevospan = document.createElement("span");
		let nuevoLi = document.createElement("li");
		nuevoI.classList.add("fa");
		nuevoI.classList.add("fa-trash");

        //Funciones asignadas para eliminar los campos mediante span e icono
		nuevospan.addEventListener("click", eliminarSpan);
        nuevoI.addEventListener("click", eliminarI);
        // ----------

		nuevospan.appendChild(nuevoI);
		nuevoLi.appendChild(nuevospan);
		nuevoLi.appendChild(nuevoAdd);
		ul.appendChild(nuevoLi);
		e.target.value = "";
	}
}); /* Fin del Evento Add */

let eliminar = document.querySelectorAll("span");
eliminar.forEach(span => {
	span.addEventListener("click", eliminarSpan);
});
let eliminarIcono = document.querySelectorAll("i");
eliminarIcono.forEach(icono => {
	icono.addEventListener("click", eliminarI);
});

function eliminarSpan(e) {
	e.target.parentNode.remove();
}
function eliminarI(e) {
	e.target.parentNode.parentNode.remove();
}

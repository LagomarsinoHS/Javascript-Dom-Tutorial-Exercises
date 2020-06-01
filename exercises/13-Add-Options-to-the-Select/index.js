window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here

	for (let pais of countries) {
		let opcion = document.createElement("option");
		let nodo = document.createTextNode(pais);
		opcion.value = pais;
		opcion.appendChild(nodo);
		document.querySelector("#mySelect").appendChild(opcion);
	}

	let boton = document.querySelector("button");
    boton.removeAttribute("onclick");
	boton.addEventListener("click", function() {
		
		alert(document.querySelector("#mySelect").value);
	});
};

let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let nuevo = document.createElement("li");
	nuevo.innerHTML = "Fourth element";
	document.querySelector("#myList").appendChild(nuevo);
	console.log(nuevo);
});

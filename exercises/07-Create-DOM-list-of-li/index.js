let beginning = "<ul>";
let liststring = "";
let ending = "</ul>";

liststring = `<li>First Item</li><li>Second Item</li><li>Third Item</li>`;

document.querySelector("#myDiv").innerHTML = beginning + liststring + ending;

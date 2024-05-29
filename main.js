let a = prompt("Birorta text kiriting...");

let element = document.createElement("h1");
let text = document.createTextNode(a);

element.appendChild(text);

let main = document.querySelector("body");
main.appendChild(element);

element.style.color = "white"
element.style.textAlign = "center"
element.style.fontSize = "100px"
element.style.marginTop = "300px"

main.style.backgroundColor = "orange"

const body = document.body;
const main = document.getElementById("main");
body.removeChild(main);
const newHeader = document.createElement("h1");
document.body.appendChild(newHeader);
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Andy is the champion"
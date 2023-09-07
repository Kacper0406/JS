const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const p = container.querySelectorAll("p");
const link = container.querySelector("a");

const list = document.querySelectorAll("li");

h1.style.color = "#ff0000";
h1.style.fontSize = "20px";

list[0].style.color = "#4287f5"
list[1].style.color = "#f542d7"
list[2].style.color = "#42f59e"

container.style.cssText = "width: 600px; margin: 0 auto;";

for(let i = 0; i < p.length; i++) {
    p[i].style.lineHeight = "30px";
}

link.style.display = "block";
// link.style.display = "";

console.log(link.style.color);

console.log(window.getComputedStyle(link).fontSize);
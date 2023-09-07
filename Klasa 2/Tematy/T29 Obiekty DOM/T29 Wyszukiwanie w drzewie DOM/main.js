const container = document.querySelector("#container");
const p = document.querySelector(".column p");
const allParagraphs = document.querySelectorAll("p");

const form = document.querySelector("#myForm");

const input = form.querySelector("[name='firstName']");

console.log(document.forms);
console.log(document.images);
console.log(document.links);

console.log(document.body);
console.log(document.documentElement);

document.getElementById("myForm");
document.getElementsByClassName("text");


const element = document.createElement("button");
const text = document.createTextNode("Kliknij mnie!");
element.classList.add("button");
element.classList.add("is-link");
element.appendChild(text)
container.appendChild(element)
form.querySelector(":last-child").remove()
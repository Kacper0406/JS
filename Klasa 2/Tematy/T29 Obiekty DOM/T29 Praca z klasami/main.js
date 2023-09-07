const link = document.querySelector(".link");

console.log(link.className);

// link.className = "red";

link.classList.add("red", "green"); //dodaje
link.classList.remove("red"); //usuwa
link.classList.toggle("green"); // nie ma->dodaje | jest->usuwa

console.log(link.classList.contains("green"));
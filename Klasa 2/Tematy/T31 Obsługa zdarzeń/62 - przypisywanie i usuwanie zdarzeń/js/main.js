const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

function disable() {
    alert("Hej!");
    btn.removeEventListener("click", disable)
}

// btn2.onclick = sayHello;
btn2.onclick = function() {
    alert("Witaj!");
};

btn.addEventListener("click", disable)

// btn3.addEventListener("click", sayHello);
btn3.addEventListener("click", function() {
    alert("Witaj!");
});

btn2.onclick = null;

// btn3.removeEventListener("click", sayHello);

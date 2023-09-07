function oblicz() {
    min = Number(document.getElementById("min").value);
    max = Number(document.getElementById("max").value);

    x1 = random(min, max);
    x2 = random(min, max);
    x3 = random(min, max);
    x4 = random(min, max);
    x5 = random(min, max);

    wynik = document.getElementById("wynik");

    suma = x1 + x2 + x3 + x4 + x5;

    wynik.innerHTML = `suma liczb: ${x1},${x2},${x3},${x4},${x5} to: ${suma}`
}
function random(min,max){
    min = Math.ceil(min);
    max = Math.floor(max) + 1;

    return Math.floor(Math.random() * (max - min) + min);
}
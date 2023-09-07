let liczba_a =parseFloat(prompt("Podaj pierwszą liczbę: ", 0));
let liczba_b = parseFloat(prompt("Podaj drugą liczbę: ", 0));
let wynik = liczba_a + liczba_b;

document.getElementById("wynik").innerHTML = liczba_a.toString() + "+" + liczba_b.toString() + "=" + wynik.toString();

console.log(liczba_a + liczba_b);
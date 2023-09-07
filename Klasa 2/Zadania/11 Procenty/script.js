function oblicz() {
    wartosc = Number(document.getElementById("wartosc").value);
    procent = Number(document.getElementById("procent").value);

    wynik = document.getElementById("wynik");

    liczba = wartosc * (procent/100)

    wynik.innerHTML = `${procent}% z ${wartosc} = ${liczba}`
}
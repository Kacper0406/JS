console.log("Skrypt działa!");

function oblicz(){
    a = document.getElementById("liczba_a").value;
    b = document.getElementById("liczba_b").value;
    wynik = document.getElementById("wynik");

    pole = a*b;
    obwod = (2*a)+(2*b);

    wynik_tekst = `długość boku a = ${a} <br>
                   długość boku b = ${b} <br>
                   pole = ${pole} <br>
                   obwód = ${obwod} <br>`;
    wynik.innerHTML = wynik_tekst;
}
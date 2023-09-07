function oblicz() {
    a = document.getElementById("liczba_a").value;
    b = document.getElementById("liczba_b").value;

    wynik = document.getElementById("wynik");

    a = Number(a);
    b = Number(b);

    if(b !== 0){
        iloraz = a / b;
        console.log(iloraz);
        console.log(iloraz);
        wynik.innerHTML = `a = ${liczba_a.value} <br>
                       b = ${liczba_b.value} <br>
                       iloraz = ${iloraz} <br>
                       iloraz zaokrąglony = ${iloraz.toFixed(2)}`
    }
    else{
        wynik.innerHTML = "Nie dziel przez 0!"
    }
}
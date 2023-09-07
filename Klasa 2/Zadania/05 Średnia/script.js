function oblicz() {
    a = document.getElementById("liczba_a").value;
    b = document.getElementById("liczba_b").value;
    c = document.getElementById("liczba_c").value;
    d = document.getElementById("liczba_d").value;
    wynik = document.getElementById("wynik");

    a = Number(a);
    b = Number(b);
    c = Number(c);
    d = Number(d);

    suma = a + b + c + d;
    srednia = suma / 4;
    console.log(suma);
    console.log(srednia);
    wynik.innerHTML = `a = ${liczba_a.value} <br>
                       b = ${liczba_b.value} <br>
                       c = ${liczba_c.value} <br>
                       d = ${liczba_d.value} <br>
                       średnia = ${srednia} <br>
                       zaokrąglona średnia = ${srednia.toFixed(2)}`;
}

// const liczba_a = document.querySelector('#liczba_a');
// const liczba_b = document.querySelector('#liczba_b');
// const liczba_c = document.querySelector('#liczba_c');
// const liczba_d = document.querySelector('#liczba_d');

// const wynik = document.querySelector('#wynik');
// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     let srednia;
//     srednia = (Number(liczba_a.value) + Number(liczba_b.value) + Number(liczba_c.value) + Number(liczba_d.value))/4;
//     let wynik_tekst = `a = ${liczba_a.value} <br>
//                        b = ${liczba_b.value} <br>
//                        c = ${liczba_c.value} <br>
//                        d = ${liczba_d.value} <br>
//                        średnia = ${srednia} <br>
//                        zaokrąglona średnia = ${srednia.toFixed(3)}`
//     wynik.innerHTML = wynik_tekst;
// });
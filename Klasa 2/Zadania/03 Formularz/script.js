function setData(){
    imie = document.getElementById("imie").value;
    wiek = document.getElementById("wiek").value;
    document.getElementById("imie-text").innerHTML = "Witaj " + imie[0].toUpperCase() + imie.substring(1) + " ! 👋";
    document.getElementById("wiek-text").innerHTML = "Masz " + wiek + " lat 🎂";
}

// const imie = document.querySelector('#imie');
// const wiek = document.querySelector('#wiek');
// const wynik = document.querySelector('#imie-text');
// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     // let wynik_tekst = "<h1>Witaj na mojej stronie</h1><br> Masz na imię: " + imie.value + "<br>Masz " + wiek.value + " lat.";
//     let wynik_tekst = `<h1>Cześć ${imie.value} </h1>Miło cię widzieć na mojej stronie szczególnie, że masz ${wiek.value} lat`
//     wynik.innerHTML = wynik_tekst;
// });
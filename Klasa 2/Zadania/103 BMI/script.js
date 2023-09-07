const waga = document.querySelector('#waga');
const wzrost = document.querySelector('#wzrost');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    wynik.innerHTML = "";
    var wysokosc = parseFloat(wzrost.value);
    var masa = parseFloat(waga.value);
    var x = BMI(wysokosc, masa);

    function BMI(wysokosc, masa){
        return masa/wysokosc**2;
    }

    switch (true) {
        case (x < 16):
            wynik.innerHTML = "Wygłodzenie"
            break;
        case (x <= 16.99 && x >= 16):
            wynik.innerHTML = "Wychudzenie"
            break;
        case (x <= 18.49 && x >= 17):
            wynik.innerHTML = "Niedowaga"
            break;
        case (x <= 24.99 && x >= 18.5):
            wynik.innerHTML = "Optimum"
            break;
        case (x <= 29.99 && x >= 25):
            wynik.innerHTML = "Nadwaga"
            break;
        case (x <= 34.99 && x >= 30):
            wynik.innerHTML = "Otyłość I stopnia"
            break;
        case (x <= 39.99 && x >= 35):
            wynik.innerHTML = "Otyłość II stopnia"
            break;
        case (x >= 40):
            wynik.innerHTML = "Otyłość III stopnia"
            break;
        default:
            wynik.innerHTML = `Zła wartość!`
    }
})
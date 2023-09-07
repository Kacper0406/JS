const liczba = document.querySelector('#liczba');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let x = parseInt(liczba.value);
    switch (true) {
        case (x <= 100 && x >= 90):
            wynik.innerHTML = `${x}% to ocena 5`
            break;
        case (x <= 89 && x >= 80):
            wynik.innerHTML = `${x}% to ocena 4,5`
            break;
        case (x <= 79 && x >= 70):
            wynik.innerHTML = `${x}% to ocena 4`
            break;
        case (x <= 69 && x >= 60):
            wynik.innerHTML = `${x}% to ocena 3,5`
            break;
        case (x <= 59 && x >= 50):
            wynik.innerHTML = `${x}% to ocena 3`
            break;
        case (x < 50):
            wynik.innerHTML = `${x}% to ocena 2`
            break;
        default:
            wynik.innerHTML = `Zła wartość!`
    }
})
const liczba = document.querySelector('#liczba');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let x = parseInt(liczba.value);
    switch (x) {
        case 1:
            wynik.innerHTML = `Poniedziałek`
            break;
        case 2:
            wynik.innerHTML = `Wtorek`
            break;
        case 3:
            wynik.innerHTML = `Środa`
            break;
        case 4:
            wynik.innerHTML = `Czwartek`
            break;
        case 5:
            wynik.innerHTML = `Piątek`
            break;
        case 6:
            wynik.innerHTML = `Sobota`
            break;
        case 7:
            wynik.innerHTML = `Niedziela`
            break;
        default:
            wynik.innerHTML = `Błąd`
    }
})
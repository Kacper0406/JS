const liczba_a = document.querySelector('#liczba_a')
const liczba_b = document.querySelector('#liczba_b')
const btn = document.querySelector('button');
const wynik = document.querySelector('#wynik')

btn.addEventListener('click', function(){
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);

    if(b != 0){
        if(a % b === 0){
            wynik.innerHTML = `Liczba A jest podzielna przez liczbę B`;
        }
        else{
            wynik.innerHTML = `Liczba A nie jest podzielna przez liczbę B`;
        }
    }
    else{
        wynik.innerHTML = `Nie dziel przez 0!`;
    }
})
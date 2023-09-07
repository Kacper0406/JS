const liczba = document.querySelector('#liczba')
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let a = parseInt(liczba.value);

    if(a > 9 && a < 100){
        wynik.innerHTML = `Liczba jest większa dwucyfowa `;
        if(a%2==0){
            wynik.innerHTML += `i jest parzysta`
        }else{
            wynik.innerHTML += `i nie jest parzysta`
        }
    }else{
        wynik.innerHTML = `Liczba nie jest dwucyfrowa`;
    }
})
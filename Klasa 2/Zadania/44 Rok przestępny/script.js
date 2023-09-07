const liczba = document.querySelector('#liczba')
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let rok = parseInt(liczba.value);

    if(rok % 4 == 0 && rok % 100 != 0 || rok % 400 == 0){
        wynik.innerHTML = `Rok ${rok} jest przestępny`;
    }else{
        wynik.innerHTML = `Rok ${rok} nie jest przestępny`;
    }
})
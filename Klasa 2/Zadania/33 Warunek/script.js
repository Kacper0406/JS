const liczba_a = document.querySelector('#liczba_a')
const liczba_b = document.querySelector('#liczba_b')
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);

    if(b == 0){
        wynik.innerHTML = "Nie dzielimy przez 0!";
    }else{
        wynik.innerHTML = `${a} / ${b} = ${a/b}`;
    }
})
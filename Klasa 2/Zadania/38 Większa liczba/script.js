const liczba_a = document.querySelector('#liczba_a')
const liczba_b = document.querySelector('#liczba_b')
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);

    if(a > b){
        wynik.innerHTML = `Liczba A jest większa [${a} > ${b}]`;
    }else if(b > a){
        wynik.innerHTML = `Liczba B jest większa [${a} < ${b}]`;
    }else{
        wynik.innerHTML = `Liczby są równe [${a} = ${b}]`;
    }
})
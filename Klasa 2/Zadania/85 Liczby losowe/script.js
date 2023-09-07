const liczba = document.querySelector('#liczba');
const min = document.querySelector('#min');
const max = document.querySelector('#max');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let n = parseInt(liczba.value);
    let min1 = parseInt(min.value);
    let max1 = parseInt(max.value);
    wynik.innerHTML = "";
    for(i=0; i<n; i++){
        wynik.innerHTML += random(min1,max1) + ", "
    }
})

function random(min,max){
    min = Math.ceil(min);
    max = Math.floor(max) + 1;

    return Math.floor(Math.random() * (max - min) + min);
}
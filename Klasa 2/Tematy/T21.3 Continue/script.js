const liczba = document.querySelector('#liczba');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let x = parseInt(liczba.value);
    wynik.innerHTML = "";
    for(i=1; i<=15; i++){
        if(i == x){
            continue
        }
        wynik.innerHTML += i + ", ";
    }
})
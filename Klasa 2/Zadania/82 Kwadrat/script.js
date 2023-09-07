const liczba_a = document.querySelector('#liczba_a')
const liczba_b = document.querySelector('#liczba_b')
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    wynik.innerHTML = "";
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);

    for(var i=0; i<a; i++){
        for(var j=0;j<b; j++){
            wynik.innerHTML += "X";
        }
        wynik.innerHTML += "</br>"
    }
})
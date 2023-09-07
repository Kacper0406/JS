const liczba = document.querySelector('#liczba');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let x = parseInt(liczba.value);
    wynik.innerHTML = "";
    for(j=0; j<x; j++){
        for(i=0; i<x; i++){
            if(i==j){
                wynik.innerHTML += "1"
            }
            else{
                wynik.innerHTML += "0"
            }
        }
        wynik.innerHTML += "<br>"
    }
})
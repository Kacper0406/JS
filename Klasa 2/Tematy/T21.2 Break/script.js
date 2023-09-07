const liczba = document.querySelector('#liczba');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let x = parseInt(liczba.value);
    wynik.innerHTML = "";
    for(i=1; i<=30; i++){
        if(i-1 != x){
            wynik.innerHTML += i + ", ";
        }
        else{
            break;
        }
    }
})
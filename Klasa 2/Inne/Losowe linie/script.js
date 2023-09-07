const input_a = document.querySelector('#input_a')
const btn = document.querySelector('button');

function random(min,max){
    min = Math.ceil(min);
    max = Math.floor(max) + 1;

    return Math.floor(Math.random() * (max - min) + min);
}

btn.addEventListener('click', function(){
    wynik.innerHTML = "";
    let a = input_a.value;

    for(var j=0; j<a; j++){
        ilosc = random(1,9)
        wynik.innerHTML += ilosc
        for(var j=0;j<ilosc; j++){
            wynik.innerHTML += "|";
        }
        wynik.innerHTML += "</br>"
    }
})